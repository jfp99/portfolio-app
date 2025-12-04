"use client";

import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  className?: string;
  type?: "project" | "blog" | "profile" | "feature";
  title?: string;
}

export function PlaceholderImage({
  className,
  type = "project",
  title,
}: PlaceholderImageProps) {
  const patterns = {
    project: (
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-full w-full", className)}
        role="img"
        aria-label={title || "Project placeholder"}
      >
        <defs>
          <linearGradient id="projectGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#projectGrad)" />
        <rect x="140" y="90" width="120" height="120" rx="12" fill="currentColor" fillOpacity="0.1" />
        <path
          d="M175 130h50M175 150h50M175 170h30"
          stroke="url(#iconGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="165" cy="130" r="4" fill="url(#iconGrad)" />
        <circle cx="165" cy="150" r="4" fill="url(#iconGrad)" />
        <circle cx="165" cy="170" r="4" fill="url(#iconGrad)" />
      </svg>
    ),
    blog: (
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-full w-full", className)}
        role="img"
        aria-label={title || "Blog placeholder"}
      >
        <defs>
          <linearGradient id="blogGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#blogGrad)" />
        <rect x="120" y="80" width="160" height="140" rx="8" fill="currentColor" fillOpacity="0.1" />
        <rect x="140" y="100" width="80" height="8" rx="4" fill="#7C3AED" fillOpacity="0.6" />
        <rect x="140" y="120" width="120" height="6" rx="3" fill="currentColor" fillOpacity="0.2" />
        <rect x="140" y="135" width="100" height="6" rx="3" fill="currentColor" fillOpacity="0.2" />
        <rect x="140" y="150" width="110" height="6" rx="3" fill="currentColor" fillOpacity="0.2" />
        <rect x="140" y="175" width="60" height="24" rx="4" fill="#F97316" fillOpacity="0.3" />
      </svg>
    ),
    profile: (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-full w-full", className)}
        role="img"
        aria-label={title || "Profile placeholder"}
      >
        <defs>
          <linearGradient id="profileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="100" fill="url(#profileGrad)" />
        <circle cx="100" cy="80" r="30" fill="currentColor" fillOpacity="0.15" />
        <path
          d="M55 150c0-24.853 20.147-45 45-45s45 20.147 45 45"
          fill="currentColor"
          fillOpacity="0.15"
        />
      </svg>
    ),
    feature: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-full w-full", className)}
        role="img"
        aria-label={title || "Feature placeholder"}
      >
        <defs>
          <linearGradient id="featureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="16" fill="url(#featureGrad)" fillOpacity="0.1" />
        <rect x="25" y="25" width="50" height="50" rx="8" fill="url(#featureGrad)" fillOpacity="0.2" />
        <path
          d="M40 50h20M50 40v20"
          stroke="url(#featureGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  };

  return patterns[type];
}
