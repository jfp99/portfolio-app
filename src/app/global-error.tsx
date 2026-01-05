"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          backgroundColor: "#0f172a",
          color: "#f8fafc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <div
            style={{
              height: "5rem",
              width: "5rem",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "9999px",
              backgroundColor: "rgba(239, 68, 68, 0.1)",
            }}
          >
            <AlertTriangle
              style={{ height: "2.5rem", width: "2.5rem", color: "#ef4444" }}
              aria-hidden="true"
            />
          </div>
          <h1
            style={{
              marginTop: "2rem",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Critical Error
          </h1>
          <p
            style={{
              marginTop: "1rem",
              maxWidth: "28rem",
              marginLeft: "auto",
              marginRight: "auto",
              color: "#94a3b8",
            }}
          >
            A critical error has occurred. Please try refreshing the page.
          </p>
          <button
            onClick={reset}
            style={{
              marginTop: "2rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              borderRadius: "0.75rem",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#16a34a",
              color: "white",
              fontWeight: "500",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#15803d")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#16a34a")}
          >
            <RefreshCw style={{ height: "1rem", width: "1rem" }} aria-hidden="true" />
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
