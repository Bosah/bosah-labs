# Environment Setup — BOSAH LABS

This document explains required environment variables and recommended practices before deploying BOSAH LABS.

## Required variables (development & production)
- `NEXT_PUBLIC_API_BASE_URL` — Base URL for the API.
- `NEXT_PUBLIC_FEATURE_FLAG` — Toggle feature flags in the UI.

## Supabase
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## AI API Layer
- `AI_API_PROVIDER` — e.g., `openai` or `local`.
- `OPENAI_API_KEY` — API key for OpenAI or provider-specific key.

## Telemetry
- `TELEMETRY_INGESTION_URL`
- `TELEMETRY_API_KEY`

## Local Development
1. Copy `.env.example` to `.env.local`.
2. Populate keys with development or staging secrets.

```bash
cp .env.example .env.local
# then edit .env.local
```

## Security
- Never commit `.env.local` or production secrets. Add `.env.local` to `.gitignore`.
- For production, configure environment variables in Vercel (or your hosting platform) rather than storing them in repo.

## Notes
- Ensure any service-specific keys (Supabase service role, telemetry write keys) are rotated regularly and limited by least privilege.