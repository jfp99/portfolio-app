import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
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
            x="2"
            y="10"
            width="20"
            height="20"
            rx="4"
            fill="#7C3AED"
            opacity="0.6"
          />
          {/* Middle layer */}
          <rect
            x="5"
            y="6"
            width="20"
            height="20"
            rx="4"
            fill="#9F5AED"
            opacity="0.8"
          />
          {/* Top layer */}
          <rect
            x="8"
            y="2"
            width="20"
            height="20"
            rx="4"
            fill="url(#grad1)"
          />
          {/* Center node */}
          <circle cx="18" cy="12" r="3" fill="white" opacity="0.9" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
