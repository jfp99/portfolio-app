"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-red-500/10">
            <AlertTriangle
              className="h-10 w-10 text-red-500"
              aria-hidden="true"
            />
          </div>
          <h1 className="mt-8 text-2xl font-bold sm:text-3xl">
            Critical Error
          </h1>
          <p className="mt-4 max-w-md mx-auto text-slate-400">
            A critical error has occurred. Please try refreshing the page.
          </p>
          <button
            onClick={reset}
            className="mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3 bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors"
          >
            <RefreshCw className="h-4 w-4" aria-hidden="true" />
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
