import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      {/* 404 Display */}
      <div className="relative">
        <span className="text-[150px] font-bold leading-none text-muted-foreground/10 sm:text-[200px]">
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
            <Search className="mx-auto h-12 w-12 text-muted-foreground" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Message */}
      <h1 className="mt-8 text-2xl font-bold sm:text-3xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>

      {/* Actions */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-spinach-600 px-6 text-sm font-medium text-white transition-colors hover:bg-spinach-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spinach-500 focus-visible:ring-offset-2"
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          Back to Home
        </Link>
        <button
          onClick={() => typeof window !== "undefined" && window.history.back()}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spinach-500 focus-visible:ring-offset-2"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Go Back
        </button>
      </div>

      {/* Helpful Links */}
      <div className="mt-12 text-sm text-muted-foreground">
        <p>You might be looking for:</p>
        <div className="mt-3 flex flex-wrap justify-center gap-4">
          <Link href="/case-studies" className="text-spinach-600 hover:underline dark:text-spinach-400">
            Case Studies
          </Link>
          <Link href="/contact" className="text-spinach-600 hover:underline dark:text-spinach-400">
            Contact
          </Link>
          <Link href="/booking" className="text-spinach-600 hover:underline dark:text-spinach-400">
            Book a Call
          </Link>
        </div>
      </div>
    </div>
  );
}
