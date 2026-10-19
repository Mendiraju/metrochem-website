# Metrochem API Private Limited Website

Production-ready GitHub Pages website for **Metrochem API Private Limited**.

## Tech Stack

- React + TypeScript + Vite
- Hash-based routing for GitHub Pages refresh/back/forward compatibility
- GitHub Actions deployment to Pages

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Configuration

Copy `.env.example` to `.env` and update values before publishing:

- `VITE_SITE_URL` - production website URL
- `VITE_BASE_PATH` - `/metrochem-website/` for repository-hosted Pages; `/` for custom domain deployment
- `VITE_CONTACT_EMAIL` - required for contact form `mailto:` fallback
- `VITE_CONTACT_PHONE` - placeholder until company confirms phone details

> The contact form is static by design. It opens an email client (`mailto:`) and does not claim backend submission success.

## GitHub Pages Deployment

Workflow file: `/home/runner/work/metrochem-website/metrochem-website/.github/workflows/deploy.yml`

1. Push to `main` or manually run **Deploy GitHub Pages** workflow.
2. In GitHub: **Settings → Pages → Source = GitHub Actions**.
3. Wait for deployment to complete.
4. Expected URL format: `https://mendiraju.github.io/metrochem-website/`.

If Pages is not automatically enabled, enable it manually in repository settings and rerun workflow.

## Custom Domain (Add Later)

Do **not** add `public/CNAME` yet.

Add custom domain only after:
1. The default Pages URL loads correctly.
2. Contact placeholders and content verification checklist below are completed.

Then:
1. Add `public/CNAME` with your domain.
2. Set DNS records at your provider:
   - `A`/`AAAA` (apex) or `CNAME` (subdomain) to GitHub Pages targets.
3. Set `VITE_SITE_URL` and `VITE_BASE_PATH=/`.
4. Redeploy and verify HTTPS in Pages settings.

## Pre-publication Verification Checklist

- Confirm contact email and phone placeholders are replaced with approved details.
- Confirm product portfolio details and technical claims before publishing them.
- Confirm all quality/compliance statements with approved regulatory/legal wording.
- Confirm image/legal/privacy/terms content with company review.
- Confirm sitemap/canonical URL values match the production domain.

## Facility Address

Plot 34B, 40B & 60B, J.N. Pharma City, Parawada, Visakhapatnam, Andhra Pradesh 531021, India.
