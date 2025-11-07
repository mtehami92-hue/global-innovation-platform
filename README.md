# Global Innovation Platform — Static Site (AR/EN)

This is a **bilingual, responsive static website** (Arabic/English) that works instantly on **GitHub Pages**.  
No build step required — uses Tailwind via CDN.

## Quick Deploy
1. Download the ZIP and extract it.
2. In your GitHub repo, click **Add file → Upload files** and upload all files (including `index.html`, `script.js`, `assets/...`, and `404.html`).
3. Go to **Settings → Pages** and select **Source: Deploy from a branch**, **Branch: main**, **Folder: /(root)**. Save.
4. Open your site: `https://<your-username>.github.io/<repo>/`.

## Customize
- Replace `assets/logo.svg` with your logo.
- Edit text via the i18n dictionary in `script.js`.
- Add sections inside `index.html` (classes use Tailwind).

## Notes
- Forms are demo-only (no backend). Connect to Formspree, Firebase or Supabase to capture submissions.
- If you want a React version or CI/CD via GitHub Actions, you can upgrade later.
