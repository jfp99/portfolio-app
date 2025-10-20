'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log critical error
    console.error('Critical application error:', error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          backgroundColor: '#0f172a',
          color: '#f1f5f9'
        }}>
          <div style={{ maxWidth: '32rem', textAlign: 'center' }}>
            <div style={{
              marginBottom: '2rem',
              fontSize: '4rem'
            }}>
              ⚠️
            </div>

            <h1 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Critical Error
            </h1>

            <p style={{
              color: '#cbd5e1',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              A critical error occurred that prevented the application from loading.
              Please try refreshing the page.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={reset}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#6366f1',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4f46e5'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6366f1'}
              >
                Try Again
              </button>

              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a
                href="/"
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#334155',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                  display: 'inline-block',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#475569')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#334155')}
              >
                Go Home
              </a>
            </div>

            {process.env.NODE_ENV === 'development' && error.message && (
              <details style={{
                marginTop: '2rem',
                textAlign: 'left',
                backgroundColor: '#1e293b',
                padding: '1rem',
                borderRadius: '0.5rem'
              }}>
                <summary style={{ cursor: 'pointer', marginBottom: '0.5rem' }}>
                  Error Details (Dev Only)
                </summary>
                <pre style={{
                  fontSize: '0.75rem',
                  overflow: 'auto',
                  maxHeight: '12rem',
                  color: '#f87171'
                }}>
                  {error.message}
                </pre>
              </details>
            )}
          </div>
        </div>
      </body>
    </html>
  )
}
