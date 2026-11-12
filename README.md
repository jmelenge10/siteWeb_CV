# Personal site: James Melenge Diaz

Bilingual (English and French) presentation site for a cloud architect and DevOps engineer. Static, built with [Astro](https://astro.build) and Tailwind CSS v4, hosted on Cloudflare Pages.

The text on this site is personal content, all rights reserved.

## Run it

Requires Node 22 or later.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/ locally
npm run check     # type check (also checks that both languages have the same shape)
npm test          # browser tests against the built site (run `npm run build` first)
```

First time only, install the test browser: `npx playwright install chromium`.

## Where things are

| Path | What it holds |
| --- | --- |
| `src/data/profile.ts` | English content: profile, skills, experience, certifications, education |
| `src/data/fr.ts` | French content, same shape |
| `src/data/types.ts` | The shape both languages must follow |
| `src/data/i18n.ts` | Interface strings and the language helpers |
| `src/components/Home.astro` | The page, rendered for both languages |
| `src/components/CvDoc.astro` | The printable CV, rendered for both languages |
| `src/pages/` | `/` and `/cv` in English, `/fr/` and `/fr/cv` in French |
| `src/styles/global.css` | Theme tokens (light and dark) and component styles |
| `public/cv.pdf`, `public/cv-fr.pdf` | Downloadable CVs |
| `public/img/certs/` | Certification badges |
| `public/_headers` | Security and cache headers applied by Cloudflare Pages |
| `public/og.png` | Image shown when the site is shared, captured from the `/og` page |
| `tests/site.spec.ts` | Playwright tests: pages, 404, languages, theme, layout widths, Content-Security-Policy |

## Regenerate the CV PDFs

The PDFs are printed from the `/cv` pages with headless Chrome, so run the preview server first.

```sh
npm run build && npm run preview -- --port 4399 &
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless --no-pdf-header-footer --print-to-pdf=public/cv.pdf    http://localhost:4399/cv/
"$CHROME" --headless --no-pdf-header-footer --print-to-pdf=public/cv-fr.pdf http://localhost:4399/fr/cv/
```

## Regenerate the share image

With the preview server running:

```sh
"$CHROME" --headless --hide-scrollbars --window-size=1200,630 --virtual-time-budget=5000 --screenshot=public/og.png http://localhost:4399/og/
```

## Checks

GitHub Actions (`.github/workflows/ci.yml`) runs the type check, the build and the browser tests on every push and pull request.

The Content-Security-Policy allows no inline scripts or styles, so keep scripts and styles in files.

### Privacy scan

`scripts/privacy-scan.mjs` fails the build if private details (phone number, street address) appear in the tracked files, the built site or the PDFs. The patterns are private, so they are not in this repository: CI reads them from the `PRIVACY_PATTERNS` repository secret (one regular expression). The scan prints file names only. Without the secret the scan is skipped with a warning; set the repository variable `PRIVACY_SCAN_REQUIRED` to `1` to make a missing secret fail on `main`.

To run it locally: `PRIVACY_PATTERNS='pattern1|pattern2' npm run privacy` (PDFs are checked when `pdftotext` is installed).

### Email address

The address is split in the HTML and the `mailto:` link is added by the page script (`src/components/Email.astro`), so simple harvesters do not find it. It is still readable in the CV PDFs and in `src/data/profile.ts`.

## Deploy

Cloudflare Pages builds on every push to `main`: build command `npm run build`, output directory `dist`, environment variable `NODE_VERSION=22`.
