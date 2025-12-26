[![Watch tutorial here](https://img.youtube.com/vi/sUKptmUVIBM/0.jpg)](https://youtu.be/sUKptmUVIBM)

# [Watch video here](https://youtu.be/sUKptmUVIBM)

## What you will learn

- Latest Next.js 13 features
- Next.js App Router
- Next.js Server Actions
- Client & Server Components
- TypeScript (Beginner & Intermediate)
- Tailwind CSS
- Context API
- Advanced Animations with Framer Motion
- React.Email & Resend
- Custom React hooks
- Fresh, modern UI design
- Light & Dark mode
- Responsive website

## Important

If you want to be a professional developer, you have to know the fundamentals like JavaScript and CSS really well. I highly recommend you go through my [Professional JavaScript](https://bytegrad.com/courses/professional-javascript) and [Professional CSS](https://bytegrad.com/courses/professional-css) courses.

I'm close to releasing a complete React & Next.js course. Get on the email list to receive early-bird pricing: [link](https://email.bytegrad.com/).

## Setup

1. Add RESEND_API_KEY environment variable in `.env.local`
2. In the `actions/sendEmail.ts` file, change the `to` email to your own recipient if you want to receive messages


## Deploying to GitHub Pages (static export)

This project is configured for static export and GitHub Pages deployment:

- Build & export locally: `npm run build:export`
- Deploy to GitHub Pages: `npm run deploy` (requires `gh-pages` dev dependency)

Notes when hosting on GitHub Pages:
- The contact form is a client-side form that POSTs to an API endpoint. GitHub Pages is static-only, so you must host the email API separately (recommended: Vercel).
- Set the environment variable `NEXT_PUBLIC_SEND_EMAIL_API_URL` to your deployed API endpoint (for example `https://your-app.vercel.app/api/send-email`) before building the static site so the contact form will post to that URL.
- If hosting at `https://username.github.io/repo`, set `NEXT_PUBLIC_BASE_PATH=/repo` before build to ensure correct asset paths.

Example (PowerShell):

```powershell
$env:NEXT_PUBLIC_SEND_EMAIL_API_URL = "https://your-app.vercel.app/api/send-email"
$env:NEXT_PUBLIC_BASE_PATH = "/your-repo-name"
npm run build:export
npm run deploy
```

If you want, I can help deploy the API to Vercel and wire everything up for you.
