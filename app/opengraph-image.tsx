import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Advait Skyline — Premium 1 & 2 BHK Residences & Shops by Dhanasvi Infra";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#1C110A", // brand charcoal background
          backgroundImage: "radial-gradient(circle at center, #6B3A1F 0%, #1C110A 100%)", // premium deep brown radial gradient glow
          padding: "60px 80px",
          border: "12px solid #C9973A", // brand gold border frame
          boxSizing: "border-box",
        }}
      >
        {/* Top Header Block */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: 800,
              color: "#C9973A", // gold
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            MAHA RERA · PM3000002600013
          </span>
          <span
            style={{
              fontSize: "16px",
              fontWeight: 800,
              color: "#F5EFE6", // cream
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            DHANASVI INFRA
          </span>
        </div>

        {/* Center Main Titles */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "76px",
              fontWeight: 800,
              color: "#FFFFFF",
              fontFamily: "serif",
              letterSpacing: "0.05em",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            ADVAIT SKYLINE
          </h1>
          <p
            style={{
              fontSize: "24px",
              fontWeight: 600,
              color: "#C9973A", // gold
              letterSpacing: "0.15em",
              margin: "15px 0 0 0",
              textTransform: "uppercase",
            }}
          >
            Premium 1 & 2 BHK Residences & Shops
          </p>
        </div>

        {/* Bottom Details Footer */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "2px solid rgba(245, 239, 230, 0.1)",
            paddingTop: "25px",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#F5EFE6", // cream
              letterSpacing: "0.08em",
            }}
          >
            📍 Naroli–Bhilad Checkpost, Vadfaliya, D&NH
          </span>
          <span
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#C4843A", // copper
              letterSpacing: "0.08em",
            }}
          >
            Bookings Open &rarr;
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
