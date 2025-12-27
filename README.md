
## Overview

Static-exported Next.js portfolio deployed to GitHub Pages (user site) with a Vercel serverless function handling the contact form email via Resend.

---

## What lives where

- Frontend (this repo): static site built with `npm run build:export`; deployed to `https://sairam940.github.io/` via GitHub Actions + `gh-pages`.
- Email API: Vercel function `api/send-email` in the `portfolio-email-api` repo; receives form POSTs and sends email with Resend.
- Secrets in this repo (GitHub → Settings → Secrets and variables → Actions):
	- `NEXT_PUBLIC_SEND_EMAIL_API_URL`: full URL of the deployed Vercel endpoint (e.g. `https://your-app.vercel.app/api/send-email`).
	- `GH_PAT`: GitHub PAT with `repo` scope to push the built site to `sairam940/sairam940.github.io` (branch `master`).

## Local setup

1) Install deps: `npm ci`
2) Optional local env for server actions (not used in static Pages deploy): create `.env.local` with `RESEND_API_KEY=...` if you ever run the server action locally.
3) Build/export locally (uses `NEXT_PUBLIC_SEND_EMAIL_API_URL` if set in the shell):

```powershell
$env:NEXT_PUBLIC_SEND_EMAIL_API_URL = "https://your-app.vercel.app/api/send-email"
npm run build:export
```

## Vercel email API setup

- Env var on Vercel: `RESEND_API_KEY`.
- Handler expects JSON `{ senderEmail, message }`, allows CORS from `https://sairam940.github.io`.
- Update the recipient or from address in the Vercel repo if needed, then redeploy Vercel.

## Deploying the site (GitHub Actions)

- Workflow: `.github/workflows/gh-pages-deploy.yml` runs on pushes to `main`.
- Steps: install → `npm run build:export` (with `NEXT_PUBLIC_SEND_EMAIL_API_URL`) → add `.nojekyll` → publish `out/` to `sairam940/sairam940.github.io` branch `master` using `GH_PAT`.
- To rerun: GitHub UI → Actions → `Deploy Portfolio to GitHub Pages` → select latest run → Re-run.

## If something changes

- API URL changes: update GitHub secret `NEXT_PUBLIC_SEND_EMAIL_API_URL`, rerun the deploy workflow.
- PAT rotates: update secret `GH_PAT`, rerun deploy.
- Vercel Resend key rotates: update Vercel `RESEND_API_KEY`, redeploy Vercel; then rerun site deploy so the frontend bakes the same API URL (URL unchanged unless you moved hosts).
- Domain/origin changes: update CORS in Vercel handler (allowed origin) and ensure `NEXT_PUBLIC_SEND_EMAIL_API_URL` points to the new host.

## Quick test plan

- After deploy, open `https://sairam940.github.io`, submit the contact form, expect HTTP 200 and email received; verify in Resend logs if needed.
