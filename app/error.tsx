'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to console in development
    console.error('Application error:', error)

    // TODO: Send to error monitoring service in production (e.g., Sentry)
    // if (process.env.NODE_ENV === 'production') {
    //   logErrorToService(error)
    // }
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <Container>
        <div className="max-w-md mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-destructive/10 p-6">
              <AlertTriangle className="h-12 w-12 text-destructive" />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-4">Something went wrong!</h1>

          <p className="text-muted-foreground mb-8">
            An unexpected error occurred while loading this page.
            Don't worry, your data is safe.
          </p>

          {process.env.NODE_ENV === 'development' && (
            <details className="mb-8 text-left">
              <summary className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground mb-2">
                Error Details (Development Only)
              </summary>
              <pre className="mt-2 p-4 bg-muted rounded-lg text-xs overflow-auto max-h-48">
                {error.message}
                {error.digest && `\nError ID: ${error.digest}`}
              </pre>
            </details>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={reset} size="lg">
              Try Again
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
