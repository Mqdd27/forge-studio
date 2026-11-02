import { defineRouting } from "next-intl/routing";

// hreflang lives in page metadata; the middleware's Link header emits http:// URLs behind the proxy.
export const routing = defineRouting({ locales: ["en", "id"], defaultLocale: "en", alternateLinks: false });
