# SMDurgan.com Cutover Checklist

## 1) WordPress Backup (Hostinger)

- Export WordPress XML (`Tools > Export`).
- Export MySQL database dump.
- Archive `wp-content/uploads`.
- Store backups in secure retained storage before DNS cutover.

## 2) Cloudflare Pages Setup

- Project name: `smd-web`.
- Production branch: `main`.
- Build command: `npm run build`.
- Build output: `dist`.
- Add env var: `RESEND_API_KEY`.

## 3) GitHub Secrets

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## 4) Domain Mapping

- Add custom domain `smdurgan.com` to Pages project.
- Add custom domain `www.smdurgan.com` to Pages project.
- Enforce `www -> apex` redirect in Cloudflare rules.

## 5) Validation

- Verify `https://smdurgan.com` serves Astro output.
- Verify `/sitemap-index.xml` and `/robots.txt`.
- Verify `/contact` form sends via Resend.
- Verify no `wp-json` or `wp-content` references in rendered HTML.

## 6) Decommission Hostinger WordPress

- Keep confirmed backups.
- Disable public WordPress access.
- Cancel/decommission hosting subscription.
