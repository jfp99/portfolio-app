"use client";

import { Component, type ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to monitoring service in production
    if (process.env.NODE_ENV === "production") {
      // Replace with your error monitoring service (Sentry, LogRocket, etc.)
      // logErrorToService(error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center p-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle
              className="h-8 w-8 text-destructive"
              aria-hidden="true"
            />
          </div>
          <h2 className="mt-6 text-xl font-semibold">Something went wrong</h2>
          <p className="mt-2 max-w-md text-center text-muted-foreground">
            An unexpected error occurred. Please try again or contact support if
            the problem persists.
          </p>
          <button
            onClick={this.handleRetry}
            className={cn(
              "mt-6 inline-flex items-center gap-2 rounded-lg px-4 py-2",
              "border border-border bg-background",
              "text-sm font-medium transition-colors hover:bg-muted",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            )}
          >
            <RefreshCw className="h-4 w-4" aria-hidden="true" />
            Try Again
          </button>
          {process.env.NODE_ENV === "development" && this.state.error && (
            <details className="mt-6 max-w-lg">
              <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                Error details (development only)
              </summary>
              <pre className="mt-2 overflow-auto rounded-lg bg-muted p-4 text-xs">
                {this.state.error.message}
                {"\n"}
                {this.state.error.stack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
