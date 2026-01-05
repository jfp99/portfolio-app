"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  animated?: boolean;
}

const sizeConfig = {
  sm: { icon: 24, gap: "gap-2", text: "text-base", showSubtitle: false },
  md: { icon: 32, gap: "gap-2.5", text: "text-lg", showSubtitle: true },
  lg: { icon: 40, gap: "gap-3", text: "text-xl", showSubtitle: true },
  xl: { icon: 48, gap: "gap-3.5", text: "text-2xl", showSubtitle: true },
};

/**
 * EPNR Logo Component - Spinach Leaf
 *
 * Concept: "Spinach Leaf" - Clean, minimal leaf design representing growth and freshness
 * with subtle green accents.
 *
 * Symbolism:
 * - Leaf shape = Growth, nature, and vitality
 * - Clean lines = Professional and modern
 * - Green accents = Connection to spinach theme and growth
 * - Monochrome base = Timeless and versatile
 *
 * Style: Minimal, clean elegance with natural inspiration
 */
export function Logo({
  className,
  size = "md",
  showText = true,
  animated = true,
}: LogoProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animated && !prefersReducedMotion;
  const config = sizeConfig[size];

  return (
    <div className={cn("flex items-center", config.gap, className)}>
      {/* Spinach Leaf Icon */}
      <svg
        width={config.icon}
        height={config.icon}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "flex-shrink-0",
          shouldAnimate && "transition-transform duration-300 hover:scale-105"
        )}
        aria-label="EPNR Logo"
        role="img"
      >
        <title>EPNR Logo - Spinach Leaf</title>

        {/* Leaf outline - cleaner, centered design */}
        <path
          d="M16 3C10 3 4 9 4 15C4 18 5.5 20.5 8 22C11 24 13.5 24 16 23C18.5 24 21 24 24 22C26.5 20.5 28 18 28 15C28 9 22 3 16 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Central vein */}
        <path
          d="M16 5V23"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Left veins - simplified */}
        <path d="M16 8L10 12" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" opacity="0.35" />
        <path d="M16 13L8 17" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" opacity="0.35" />
        <path d="M16 18L12 21" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" opacity="0.35" />

        {/* Right veins - simplified */}
        <path d="M16 8L22 12" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" opacity="0.35" />
        <path d="M16 13L24 17" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" opacity="0.35" />
        <path d="M16 18L20 21" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" opacity="0.35" />

        {/* Green accent dots - fewer, more impactful */}
        <circle cx="10" cy="12" r="1.25" className="fill-spinach-500" />
        <circle cx="8" cy="17" r="1.25" className="fill-spinach-500" />
        <circle cx="22" cy="12" r="1.25" className="fill-spinach-500" />
        <circle cx="24" cy="17" r="1.25" className="fill-spinach-500" />
      </svg>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className={cn(
              "font-bold tracking-tight leading-none text-foreground",
              config.text
            )}
          >
            EPNR
          </span>
          {config.showSubtitle && (
            <span className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground mt-0.5">
              Automation Studio
            </span>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Logo Mark Only (for favicons, small spaces)
 */
export function LogoMark({
  size = "md",
  className,
}: {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  return <Logo className={className} size={size} showText={false} animated={false} />;
}

/**
 * Animated Logo - Spinach Leaf with subtle pulse animation
 */
export function AnimatedLogo({
  className,
  size = 48,
}: {
  className?: string;
  size?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="EPNR Logo"
        role="img"
      >
        <title>EPNR Logo - Spinach Leaf</title>

        {/* Leaf outline */}
        <path
          d="M16 3C10 3 4 9 4 15C4 18 5.5 20.5 8 22C11 24 13.5 24 16 23C18.5 24 21 24 24 22C26.5 20.5 28 18 28 15C28 9 22 3 16 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Central vein */}
        <path
          d="M16 5V23"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Left veins */}
        <path d="M16 8L10 12" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" opacity="0.35" />
        <path d="M16 13L8 17" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" opacity="0.35" />
        <path d="M16 18L12 21" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" opacity="0.35" />

        {/* Right veins */}
        <path d="M16 8L22 12" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" opacity="0.35" />
        <path d="M16 13L24 17" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" opacity="0.35" />
        <path d="M16 18L20 21" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" opacity="0.35" />

        {/* Animated green accent dots */}
        <circle cx="10" cy="12" r="1.25" className="fill-spinach-500">
          {shouldAnimate && (
            <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
          )}
        </circle>
        <circle cx="8" cy="17" r="1.25" className="fill-spinach-500">
          {shouldAnimate && (
            <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" begin="0.5s" />
          )}
        </circle>
        <circle cx="22" cy="12" r="1.25" className="fill-spinach-500">
          {shouldAnimate && (
            <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" begin="1s" />
          )}
        </circle>
        <circle cx="24" cy="17" r="1.25" className="fill-spinach-500">
          {shouldAnimate && (
            <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" begin="1.5s" />
          )}
        </circle>
      </svg>
    </div>
  );
}

/**
 * Wordmark Only
 */
export function Wordmark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const config = {
    sm: { text: "text-base", showSubtitle: false },
    md: { text: "text-lg", showSubtitle: true },
    lg: { text: "text-xl", showSubtitle: true },
  };

  return (
    <div className={cn("flex flex-col", className)}>
      <span className={cn("font-bold tracking-tight leading-none text-foreground", config[size].text)}>
        EPNR
      </span>
      {config[size].showSubtitle && (
        <span className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground mt-0.5">
          Automation Studio
        </span>
      )}
    </div>
  );
}

export default Logo;
