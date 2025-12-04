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
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>
          {/* Bottom layer */}
          <rect
            x="10"
            y="45"
            width="85"
            height="85"
            rx="16"
            fill="#7C3AED"
            opacity="0.6"
          />
          {/* Middle layer */}
          <rect
            x="22"
            y="28"
            width="85"
            height="85"
            rx="16"
            fill="#9F5AED"
            opacity="0.8"
          />
          {/* Top layer */}
          <rect
            x="35"
            y="10"
            width="85"
            height="85"
            rx="16"
            fill="url(#grad1)"
          />
          {/* Center node */}
          <circle cx="77" cy="52" r="12" fill="white" opacity="0.9" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
