const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { runInNewContext } = require("node:vm");
const { transpileModule, ModuleKind, ScriptTarget } = require("typescript");
const { NextRequest } = require("next/server");

const source = transpileModule(readFileSync("app/api/inquiries/route.ts", "utf8"), {
  compilerOptions: { module: ModuleKind.CommonJS, target: ScriptTarget.ES2020 },
}).outputText;
const valid = {
  name: "Inquiry test",
  contact: "test@example.com",
  projectType: "customWeb",
  description: "A project used only for local validation.",
};
function handler(
  env = {},
  fetch = async () => {
    throw new Error("Unexpected external request");
  },
) {
  const exports = {};
  runInNewContext(source, { exports, require, process: { env }, fetch, Buffer, URL, AbortSignal, Map, Set });
  return exports.POST;
}
function request(data = valid, headers = {}) {
  return new NextRequest("https://example.com/api/inquiries", {
    method: "POST",
    headers: { origin: "https://example.com", "content-type": "application/json", ...headers },
    body: JSON.stringify(data),
  });
}
(async () => {
  assert.equal((await handler()(request())).status, 503, "Unconfigured delivery must not claim success");
  for (const patch of [
    { name: "" },
    { contact: "invalid" },
    { projectType: "invented" },
    { projectType: "constructor" },
    { description: "short" },
    { website: "spam" },
  ])
    assert.equal((await handler()(request({ ...valid, ...patch }))).status, 400);
  assert.equal((await handler()(request(null))).status, 400);
  assert.equal((await handler()(request(valid, { origin: "https://other.example" }))).status, 403);
  assert.equal((await handler()(request({ ...valid, description: "x".repeat(17000) }))).status, 413);
  let delivered;
  const post = handler({ INQUIRY_WEBHOOK_URL: "https://delivery.example/inquiries" }, async (url, options) => {
    delivered = JSON.parse(options.body);
    return new Response(null, { status: 200 });
  });
  assert.equal((await post(request({ ...valid, unwanted: "must not be forwarded" }))).status, 200);
  assert.deepEqual(delivered, valid);
  assert.equal(
    (
      await handler(
        { INQUIRY_WEBHOOK_URL: "https://delivery.example/inquiries" },
        async () => new Response(null, { status: 500 }),
      )(request())
    ).status,
    502,
  );
  const limited = handler({ INQUIRY_TRUSTED_IP_HEADER: "x-client-ip" });
  for (let i = 0; i < 5; i++) assert.equal((await limited(request())).status, 503);
  assert.equal((await limited(request())).status, 429);
  console.log(
    "Inquiry validation, origin, payload limits, spam, delivery success/failure, and rate limit checks passed. No external messages sent.",
  );
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
