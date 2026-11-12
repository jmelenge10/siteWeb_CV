// Fails if private details (phone number, street address…) appear in the tracked files or in the built site.
//
// The patterns are private themselves, so they are NOT in this repository: they come from the
// PRIVACY_PATTERNS environment variable (a GitHub Actions secret in CI), as one regular expression,
// for example:  06[ .]?12[ .]?34|12 rue de l.Exemple|75001
//
// The script only ever prints file names and counts, never the pattern or the text it matched,
// because CI logs of a public repository are public.

import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';

const source = process.env.PRIVACY_PATTERNS?.trim();
if (!source) {
  // Secrets are not available to pull requests from forks or from Dependabot.
  console.log('::warning title=Privacy scan skipped::PRIVACY_PATTERNS is not set, nothing was checked.');
  process.exit(process.env.PRIVACY_SCAN_REQUIRED ? 1 : 0);
}

let pattern;
try {
  pattern = new RegExp(source, 'gi');
} catch {
  console.error('PRIVACY_PATTERNS is not a valid regular expression.');
  process.exit(2);
}

const TEXT = new Set(['.html', '.js', '.mjs', '.ts', '.astro', '.css', '.json', '.md', '.txt', '.xml', '.svg', '.yml', '.yaml', '']);
const SKIP = new Set(['package-lock.json']); // only package names and checksums

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

const tracked = execFileSync('git', ['ls-files'], { encoding: 'utf8' }).split('\n').filter(Boolean);
const built = existsSync('dist') ? walk('dist') : [];
const files = [...new Set([...tracked, ...built])].filter((f) => existsSync(f) && !SKIP.has(f));

let hasPdfToText = true;
try {
  execFileSync('pdftotext', ['-v'], { stdio: 'ignore' });
} catch {
  hasPdfToText = false;
}

const read = (file) => {
  const ext = extname(file).toLowerCase();
  if (ext === '.pdf') return hasPdfToText ? execFileSync('pdftotext', ['-layout', file, '-'], { encoding: 'utf8' }) : null;
  if (!TEXT.has(ext)) return null;
  // Fingerprinted file names (/_astro/name.Ab12Cd.js) are random letters and digits: ignore them.
  return readFileSync(file, 'utf8').replace(/_astro\/[\w.\-]+/g, '');
};

const hits = [];
let scanned = 0;
let pdfSkipped = 0;
for (const file of files) {
  const text = read(file);
  if (text === null) {
    if (file.toLowerCase().endsWith('.pdf')) pdfSkipped++;
    continue;
  }
  scanned++;
  const count = (text.match(pattern) ?? []).length;
  if (count) hits.push({ file, count });
}

if (pdfSkipped) {
  console.log(`::warning title=PDFs not scanned::pdftotext is missing, ${pdfSkipped} PDF file(s) were not checked.`);
  if (process.env.CI) process.exit(1);
}

if (hits.length) {
  for (const { file, count } of hits) console.log(`::error file=${file},title=Private detail found::${count} match(es) in ${file}`);
  console.error(`Privacy scan FAILED: ${hits.length} file(s) contain private details. Matched text is not shown on purpose.`);
  process.exit(1);
}
const pdfs = files.filter((f) => f.toLowerCase().endsWith('.pdf')).length - pdfSkipped;
console.log(`::notice title=Privacy scan passed::${scanned} files checked (${pdfs} PDFs), no private detail found.`);
