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

## What's new — engagement & conversion pass

- **Typography**: display font upgraded to Bricolage Grotesque (bolder, more distinctive) for headlines, paired with Inter for body text.
- **Color**: accent shifted from muted brass to a warmer, more vivid amber, with a soft radial glow behind the hero and a subtle warm gradient on dark sections for more depth.
- **Conversion nudges** (goal: more visitors reach the form):
  - A floating "Start a Project" button appears in the bottom-right corner once you scroll past the hero (desktop).
  - A persistent "Start a Project" bar pinned to the bottom of the screen on mobile.
  - A new mid-page CTA banner between Services and Methodology, so visitors don't have to scroll all the way down to convert.
  - Primary CTA buttons now use a warm gradient "glow" style for more visual pull.

## Contact form — how it works

The form now submits to **hello@arsalanakhtar.com** via [FormSubmit](https://formsubmit.co), a free service with no account or signup needed.

**Important — one-time activation:** the very first time the form is submitted after this goes live, FormSubmit sends a confirmation email to hello@arsalanakhtar.com. Someone must open that email and click the activation link — after that, every future submission is delivered straight to the inbox automatically. Until it's activated, submissions won't arrive.

## Before going live

- [ ] Replace the placeholder portrait SVG in the About section with a real photo
- [ ] Confirm the FormSubmit activation email (see above) after the first test submission
- [ ] Update `arsalanakhtar.com` in the `<meta>`/OG tags and `sitemap.xml` to your real domain
- [ ] Add a social preview image (`og:image`) for link previews on LinkedIn/Instagram
