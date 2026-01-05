/**
 * Rate Limiting Utility for EPNR Portfolio
 *
 * Implements in-memory rate limiting for API routes.
 * For production with multiple instances, consider using @upstash/ratelimit with Redis.
 */

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

// In-memory store for rate limiting
// Note: This resets on server restart. Use Redis for production scaling.
const rateLimitStore = new Map<string, RateLimitRecord>();

// Configuration
const RATE_LIMIT_CONFIG = {
  // Contact form: 3 requests per hour
  contact: {
    maxRequests: 3,
    windowMs: 60 * 60 * 1000, // 1 hour
  },
  // General API: 100 requests per minute
  api: {
    maxRequests: 100,
    windowMs: 60 * 1000, // 1 minute
  },
} as const;

type RateLimitType = keyof typeof RATE_LIMIT_CONFIG;

interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetIn: number; // milliseconds until reset
  limit: number;
}

/**
 * Check if a request should be rate limited
 * @param identifier - Unique identifier (usually IP address)
 * @param type - Type of rate limit to apply
 */
export function checkRateLimit(
  identifier: string,
  type: RateLimitType = 'api'
): RateLimitResult {
  const config = RATE_LIMIT_CONFIG[type];
  const key = `${type}:${identifier}`;
  const now = Date.now();

  // Get existing record or create new one
  let record = rateLimitStore.get(key);

  // If no record or window has expired, create new record
  if (!record || now > record.resetTime) {
    record = {
      count: 0,
      resetTime: now + config.windowMs,
    };
  }

  // Increment count
  record.count++;
  rateLimitStore.set(key, record);

  const remaining = Math.max(0, config.maxRequests - record.count);
  const resetIn = Math.max(0, record.resetTime - now);

  return {
    success: record.count <= config.maxRequests,
    remaining,
    resetIn,
    limit: config.maxRequests,
  };
}

/**
 * Get rate limit headers for response
 */
export function getRateLimitHeaders(result: RateLimitResult): Record<string, string> {
  return {
    'X-RateLimit-Limit': result.limit.toString(),
    'X-RateLimit-Remaining': result.remaining.toString(),
    'X-RateLimit-Reset': Math.ceil(result.resetIn / 1000).toString(),
  };
}

/**
 * Clean up expired entries periodically
 * Call this on a schedule or at the start of requests
 */
export function cleanupExpiredEntries(): void {
  const now = Date.now();
  for (const [key, record] of rateLimitStore.entries()) {
    if (now > record.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}

/**
 * Get client IP from request headers
 * Works with various proxies and hosting providers
 */
export function getClientIp(request: Request): string {
  // Check various headers in order of priority
  const headers = request.headers;

  // Cloudflare
  const cfConnectingIp = headers.get('cf-connecting-ip');
  if (cfConnectingIp) return cfConnectingIp;

  // Vercel
  const xRealIp = headers.get('x-real-ip');
  if (xRealIp) return xRealIp;

  // Standard proxy header
  const xForwardedFor = headers.get('x-forwarded-for');
  if (xForwardedFor) {
    // Take the first IP in the chain (original client)
    return xForwardedFor.split(',')[0].trim();
  }

  // Fallback
  return 'anonymous';
}

// Cleanup expired entries every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupExpiredEntries, 5 * 60 * 1000);
}
