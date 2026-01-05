"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    if (process.env.NODE_ENV === "production") {
      // Replace with your error monitoring service
      // logErrorToService(error);
    }
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
        <AlertTriangle
          className="h-10 w-10 text-destructive"
          aria-hidden="true"
        />
      </div>
      <h1 className="mt-8 text-2xl font-bold sm:text-3xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-center text-muted-foreground">
        An unexpected error has occurred. Our team has been notified and is
        working to fix the issue.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={reset}
          className={cn(
            "inline-flex items-center gap-2 rounded-lg px-6 py-3",
            "bg-spinach-600 text-white font-medium",
            "transition-colors hover:bg-spinach-700",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          )}
        >
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
          Try Again
        </button>
        <Link
          href="/"
          className={cn(
            "inline-flex items-center gap-2 rounded-lg px-6 py-3",
            "border border-border bg-background",
            "font-medium transition-colors hover:bg-muted",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          )}
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          Go Home
        </Link>
      </div>
      {process.env.NODE_ENV === "development" && (
        <details className="mt-8 max-w-lg">
          <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
            Error details (development only)
          </summary>
          <pre className="mt-2 overflow-auto rounded-lg bg-muted p-4 text-xs">
            {error.message}
            {error.digest && `\n\nDigest: ${error.digest}`}
          </pre>
        </details>
      )}
    </div>
  );
}
