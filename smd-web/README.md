# smd-web

SMDurgan, LLC website (`smdurgan.com`) built with Astro and deployed on Cloudflare Pages.

## Commands

- `npm install`
- `npm run dev`
- `npm run verify`

## Deploy

CI deploys `dist/` to Cloudflare Pages project `smd-web` from `main`.

Required GitHub secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Required Cloudflare Pages env vars:

- `RESEND_API_KEY`
