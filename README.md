# Arsalan Akhtar — Meta Ads & E-commerce Growth

Static site, no build step. Two color variants are included:

- `index.html` + `styles.css` — bone / near-black / brass accent (default)
- `index-bold.html` + `styles-bold.css` — cream / deep plum / coral + teal accents

Both use the same `script.js`.

## Deploy on GitHub Pages

1. Create a new repo (e.g. `yourusername.github.io` for a root domain, or any name for a project page).
2. Push these files to the repo root:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Source → Deploy from a branch → main / (root)**. Save.
4. Your site goes live at `https://yourusername.github.io/your-repo/` (or your custom domain if configured below).

## Using the bold variant instead of the default

Either rename `index-bold.html` to `index.html` (overwriting the default) before pushing,
or link to `/index-bold.html` directly once live.

## Custom domain (optional)

Add a `CNAME` file at the repo root containing just your domain, e.g.:
```
arsalanakhtar.com
```
Then point your domain's DNS to GitHub Pages (A records to GitHub's IPs, or a CNAME record to `yourusername.github.io`).

## Before going live

- [ ] Replace the placeholder portrait SVG in the About section with a real photo
- [ ] Wire `#inquiry-form` in `script.js` to an actual endpoint (Formspree, Resend, etc.) — it currently only validates client-side
- [ ] Update `arsalanakhtar.com` in the `<meta>`/OG tags and `sitemap.xml` to your real domain
- [ ] Add a social preview image (`og:image`) for link previews on LinkedIn/Instagram
- [ ] Add your real social profile URLs — search each HTML file for `<!-- Replace href="#" below with your real profile URLs -->` in the footer and swap the five `href="#"` links (Facebook, Instagram, LinkedIn, YouTube, TikTok) for your actual profile links
