"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export function Logo({ size = 36, className, showText = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Stack MCP Logo"
        role="img"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
        {/* Bottom layer - Violet */}
        <rect
          x="2"
          y="12"
          width="22"
          height="22"
          rx="5"
          fill="#7C3AED"
          opacity="0.5"
        />
        {/* Middle layer - Blend */}
        <rect
          x="6"
          y="7"
          width="22"
          height="22"
          rx="5"
          fill="#9F5AED"
          opacity="0.7"
        />
        {/* Top layer - Gradient */}
        <rect
          x="10"
          y="2"
          width="22"
          height="22"
          rx="5"
          fill="url(#logoGrad)"
        />
        {/* Center node - Intelligence */}
        <circle cx="21" cy="13" r="4" fill="white" opacity="0.9" />
      </svg>
      {showText && (
        <span className="text-xl font-bold">Stack MCP</span>
      )}
    </div>
  );
}

export function LogoMark({ size = 36, className }: Omit<LogoProps, 'showText'>) {
  return <Logo size={size} className={className} showText={false} />;
}
