import { ImageResponse } from "next/og";

export const alt = "RisenDev";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage({ params }: { params: { locale: string } }) {
  const tagline =
    params.locale === "id"
      ? "Aplikasi web dan sistem bisnis untuk kebutuhan nyata."
      : "Web applications and business systems for real needs.";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#F2EFE8",
        color: "#1C1C18",
        borderBottom: "24px solid #FF4F00",
      }}
    >
      <div style={{ fontSize: 40, fontWeight: 700 }}>RisenDev</div>
      <div style={{ fontSize: 80, lineHeight: 1, fontWeight: 700, letterSpacing: -3 }}>{tagline}</div>
    </div>,
    size,
  );
}
