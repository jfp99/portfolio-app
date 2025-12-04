# Email Setup Guide - Resend Integration

This guide will help you set up email functionality for your portfolio's contact form using [Resend](https://resend.com/).

---

## Why Resend?

- **Developer-friendly**: Simple API, excellent TypeScript support
- **Free tier**: 3,000 emails/month for free (perfect for portfolio contact forms)
- **Fast**: Emails sent in milliseconds
- **Reliable**: 99.9% uptime SLA
- **No credit card required** for free tier

---

## Step 1: Create a Resend Account

1. Go to [https://resend.com/signup](https://resend.com/signup)
2. Sign up with your email or GitHub account (recommended)
3. Verify your email address

---

## Step 2: Get Your API Key

1. Once logged in, go to [API Keys](https://resend.com/api-keys)
2. Click **"Create API Key"**
3. Name it something like `Portfolio Contact Form`
4. Select **"Full Access"** (or "Sending access" if you prefer minimal permissions)
5. Click **"Add"**
6. **Copy the API key immediately** - you won't be able to see it again!

---

## Step 3: Configure Environment Variables

1. Copy your `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

2. Open `.env.local` and add your Resend API key:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Jean-Francois Pruvost Portfolio"

# Email Service (Resend)
RESEND_API_KEY=re_your_actual_api_key_here
EMAIL_FROM=onboarding@resend.dev
EMAIL_TO=your-actual-email@example.com

# Environment
NODE_ENV=development
```

**Important:**
- Replace `re_your_actual_api_key_here` with your actual Resend API key
- Replace `your-actual-email@example.com` with the email where you want to receive contact form submissions

---

## Step 4: Testing with Resend's Test Domain

For initial testing, you can use Resend's test domain:

```bash
EMAIL_FROM=onboarding@resend.dev
```

This works out of the box - no domain verification needed!

**Limitations of test domain:**
- Can only send to your own verified email
- "via resend.dev" appears in email clients
- Not recommended for production

---

## Step 5: Verify Your Own Domain (Production)

For production use, verify your own domain:

### 5.1 Add Domain in Resend

1. Go to [Domains](https://resend.com/domains) in Resend dashboard
2. Click **"Add Domain"**
3. Enter your domain (e.g., `yourportfolio.com`)
4. Click **"Add"**

### 5.2 Add DNS Records

Resend will show you DNS records to add. Add these to your domain provider (Vercel, Cloudflare, Namecheap, etc.):

**Example DNS records:**
```
Type: TXT
Name: _resend
Value: resend-verification=abc123...

Type: MX
Name: @
Value: feedback-smtp.resend.com
Priority: 10
```

**Common Domain Providers:**
- **Vercel**: [Vercel DNS Guide](https://vercel.com/docs/projects/domains/dns-records)
- **Cloudflare**: DNS tab in your domain dashboard
- **Namecheap**: Advanced DNS settings
- **GoDaddy**: DNS Management

### 5.3 Verify Domain

1. Wait 5-10 minutes for DNS propagation
2. Click **"Verify"** in Resend dashboard
3. Once verified, update `.env.local`:

```bash
EMAIL_FROM=contact@yourportfolio.com
```

---

## Step 6: Test the Contact Form

### 6.1 Start Development Server

```bash
npm run dev
```

### 6.2 Submit a Test Message

1. Go to `http://localhost:3000/contact`
2. Fill out the contact form with test data
3. Submit the form

### 6.3 Check Results

**In Development (without API key):**
- Console will log: `⚠️ Email service not configured`
- Form data will be logged to console
- No actual email sent (this is expected!)

**With API key configured:**
- Console will log: `✅ Contact email sent successfully: [message_id]`
- You should receive an email at the address specified in `EMAIL_TO`
- The email will have a professional template with your message

---

## Step 7: Production Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel project settings:

```
RESEND_API_KEY=re_your_actual_api_key
EMAIL_FROM=contact@yourportfolio.com
EMAIL_TO=your@email.com
NEXT_PUBLIC_SITE_URL=https://yourportfolio.com
NEXT_PUBLIC_SITE_NAME=Your Name Portfolio
NODE_ENV=production
```

4. Deploy!

---

## Email Template Features

The contact form emails include:

✅ **Professional HTML template** with your brand colors
✅ **Responsive design** - looks great on all devices
✅ **Plain text fallback** for email clients that don't support HTML
✅ **Reply-to header** - clicking reply goes directly to the sender
✅ **Anti-XSS protection** - all user inputs are sanitized
✅ **Timestamp** - know exactly when the message was sent
✅ **One-click reply button** - reply to sender with one click

---

## Troubleshooting

### Problem: "Email service not configured"

**Solution:** Make sure `RESEND_API_KEY` is set in `.env.local`

```bash
# Check if file exists
cat .env.local

# Should show:
RESEND_API_KEY=re_your_actual_key
```

---

### Problem: "Failed to send email"

**Possible causes:**

1. **Invalid API key**
   - Check your API key in [Resend Dashboard](https://resend.com/api-keys)
   - Regenerate if necessary

2. **EMAIL_FROM not verified**
   - Using a custom domain? Make sure it's verified in Resend
   - For testing, use `onboarding@resend.dev`

3. **Rate limiting**
   - Free tier: 3,000 emails/month
   - Check usage in Resend dashboard

---

### Problem: Email goes to spam

**Solutions:**

1. **Verify your domain** (see Step 5)
2. **Add SPF, DKIM records** (Resend provides these)
3. **Use a professional sender name**:
   ```bash
   EMAIL_FROM=no-reply@yourportfolio.com
   ```

---

## Rate Limiting

The contact form has built-in rate limiting:

- **3 submissions per hour per IP address**
- Prevents spam and abuse
- Protects your email quota

For production, consider upgrading to **Redis-based rate limiting** with Vercel KV.

---

## Monitoring

### Check Email Logs

1. Go to [Resend Emails](https://resend.com/emails)
2. View all sent emails, delivery status, opens, clicks
3. Debug failed emails with detailed error messages

### Check Application Logs

In Vercel or your terminal:

```bash
# Successful submission
✅ Email sent successfully: cm1abc123...

# Failed submission
❌ Failed to send email: API key invalid
```

---

## Cost Breakdown

**Resend Pricing:**

- **Free**: 3,000 emails/month ($0)
- **Pro**: 50,000 emails/month ($20)
- **Enterprise**: Custom volume

**Average portfolio contact form:**
- 5-20 submissions/month
- **Free tier is more than enough!**

---

## Security Best Practices

✅ **Never commit `.env.local`** - it's in `.gitignore`
✅ **Use environment variables** in production (Vercel, etc.)
✅ **Rate limiting enabled** - 3 requests/hour per IP
✅ **Honeypot field** - catches bots automatically
✅ **Input sanitization** - prevents XSS attacks
✅ **Email validation** - Zod schema validation

---

## Testing in Development

### Test without sending real emails

The app gracefully handles missing configuration:

```typescript
// In lib/email.ts
if (!resend) {
  console.log('📧 Contact form submission (not sent):', data)
  return { success: false, isDevelopment: true }
}
```

This allows you to:
- Develop without an API key
- Test form validation
- Check console logs
- No emails sent accidentally

---

## Alternative: SendGrid

If you prefer SendGrid instead of Resend:

1. Install SendGrid SDK:
```bash
npm install @sendgrid/mail
```

2. Update `lib/email.ts` to use SendGrid API
3. Add `SENDGRID_API_KEY` to environment variables

---

## Getting Help

- **Resend Docs**: [https://resend.com/docs](https://resend.com/docs)
- **Resend Support**: support@resend.com
- **GitHub Issues**: Open an issue in your repository

---

## Quick Start Summary

```bash
# 1. Sign up for Resend
https://resend.com/signup

# 2. Get API key
https://resend.com/api-keys

# 3. Configure environment
cp .env.example .env.local
# Edit .env.local with your API key

# 4. Test locally
npm run dev
# Go to http://localhost:3000/contact

# 5. Deploy to production
git push
# Add env vars in Vercel/hosting platform
```

---

**That's it!** Your contact form is now fully functional with professional email delivery. 🎉

---

**Last Updated**: 2025-10-20
**Author**: Portfolio App Setup Guide
