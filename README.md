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
```

## Where things are

| Path | What it holds |
| --- | --- |
| `src/data/profile.ts` | English content: profile, skills, experience, certifications, education |
| `src/data/fr.ts` | French content, same shape |
| `src/data/i18n.ts` | Interface strings and the language helpers |
| `src/components/Home.astro` | The page, rendered for both languages |
| `src/components/CvDoc.astro` | The printable CV, rendered for both languages |
| `src/pages/` | `/` and `/cv` in English, `/fr/` and `/fr/cv` in French |
| `src/styles/global.css` | Theme tokens (light and dark) and component styles |
| `public/cv.pdf`, `public/cv-fr.pdf` | Downloadable CVs |
| `public/img/certs/` | Certification badges |

## Regenerate the CV PDFs

The PDFs are printed from the `/cv` pages with headless Chrome, so run the preview server first.

```sh
npm run build && npm run preview -- --port 4399 &
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless --no-pdf-header-footer --print-to-pdf=public/cv.pdf    http://localhost:4399/cv/
"$CHROME" --headless --no-pdf-header-footer --print-to-pdf=public/cv-fr.pdf http://localhost:4399/fr/cv/
```

## Deploy

Cloudflare Pages builds on every push to `main`: build command `npm run build`, output directory `dist`, environment variable `NODE_VERSION=22`.
