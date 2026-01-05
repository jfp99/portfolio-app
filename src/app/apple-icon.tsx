import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F172A",
          borderRadius: "40px",
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Leaf shape - Spinach green */}
          <path
            d="M16 4C9 4 4 10 4 16C4 19 5.5 21.5 8 23C11 25 13.5 25 16 24C18.5 25 21 25 24 23C26.5 21.5 28 19 28 16C28 10 23 4 16 4Z"
            fill="#16a34a"
          />
          {/* Central vein */}
          <path
            d="M16 6V24"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.3"
          />
          {/* Side veins */}
          <path
            d="M16 10L10 14"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.2"
          />
          <path
            d="M16 10L22 14"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.2"
          />
          <path
            d="M16 15L9 18"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.2"
          />
          <path
            d="M16 15L23 18"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.2"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
