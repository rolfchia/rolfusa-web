# rolfusa-web

ROLF WebApps on AWS Deployment Test

This is a ROLF WebApps on AWS Deployment Test. It is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

_Disclaimer: This project was also drafted with the assistance of Copilot's generative AI and has been thoroughly reviewed, revised, and approved by the author._

## Project Structure: rolfusa-web

```
rolfusa-web/
├── pages/
│   ├── index.tsx         // SSG homepage
│   ├── ssr.tsx           // SSR page
│   └── _app.tsx          // Global layout
├── components/
│   └── Header.tsx        // Shared header
├── public/
│   └── logo.png          // Static assets
├── styles/
│   └── globals.css       // Global styles
├── package.json
└── next.config.ts

```

---

## Installation & Setup

- `npx create-next-app@latest rolfusa-web --typescript`
- `cd rolfusa-webs`
- `npm install`

### Opt-Out of Next.js Telemetry

- [Next.js Telemetry](https://nextjs.org/telemetry)
- `npx next telemetry disable`
- `npx next telemetry status`

## Getting Started

First, run the development server:

- `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Step-by-Step: Push Your Next.js App to GitHub

1. Initialize Git (if not already done)

- `cd rolfusa-web`
- `git init`

2. Create a `.gitignore` file (Next.js already includes one).
3. Stage and Commit Your Code

- `git add .`
- `git commit -m "Initial commit of rolfusa-web with SSG and SSR"`

4. Create a GitHub Repo

- Go to github.com → click New Repository → name it `rolfusa-web` → choose Public or Private → click Create Repository.

5. Link Local Repo to GitHub

- Copy the repo URL (e.g., https://github.com/chiachang100/rolfusa-web.git) and run:
- `git remote add origin https://github.com/rolfchia/rolfusa-web.git`

6. Push to GitHub

- `git branch -M main`
- `git push -u origin main`

7. ✅ Done!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

---
