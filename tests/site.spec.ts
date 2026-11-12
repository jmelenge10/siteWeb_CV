import { readFileSync, existsSync } from 'node:fs';
import { expect, test, type Page } from '@playwright/test';

const widths = [360, 768, 1024, 1440];
const homes = ['/', '/fr/'];

// The production headers live in public/_headers (applied by Cloudflare, not by the preview server).
const headersFile = readFileSync('dist/_headers', 'utf8');
const csp = headersFile.match(/Content-Security-Policy: (.+)/)![1];

/** Serve pages with the production Content-Security-Policy and collect anything it blocks. */
async function withCsp(page: Page) {
  const violations: string[] = [];
  page.on('console', (m) => {
    if (/Content Security Policy/i.test(m.text())) violations.push(m.text());
  });
  await page.route('**/*', async (route) => {
    if (route.request().resourceType() !== 'document') return route.continue();
    const response = await route.fetch();
    await route.fulfill({ response, headers: { ...response.headers(), 'content-security-policy': csp } });
  });
  return violations;
}

test.describe('pages and files', () => {
  for (const url of ['/', '/fr/', '/cv/', '/fr/cv/', '/cv.pdf', '/cv-fr.pdf', '/robots.txt', '/sitemap-index.xml', '/og.png', '/favicon.svg']) {
    test(`${url} is served`, async ({ request }) => {
      expect((await request.get(url)).status()).toBe(200);
    });
  }

  test('an unknown address returns a real 404', async ({ request }) => {
    expect((await request.get('/does-not-exist')).status()).toBe(404);
  });

  test('robots.txt and sitemap are real files, not the home page', async ({ request }) => {
    expect(await (await request.get('/robots.txt')).text()).toContain('Sitemap:');
    expect(await (await request.get('/sitemap-index.xml')).text()).toContain('<sitemapindex');
  });

  test('security headers file is shipped', () => {
    expect(existsSync('dist/_headers')).toBe(true);
    for (const h of ['Content-Security-Policy', 'X-Frame-Options', 'Strict-Transport-Security', 'Permissions-Policy']) {
      expect(headersFile).toContain(h);
    }
    expect(csp).not.toContain('unsafe-inline');
  });
});

for (const home of homes) {
  test.describe(`home ${home}`, () => {
    test('nothing is blocked by the Content-Security-Policy', async ({ page }) => {
      const violations = await withCsp(page);
      await page.goto(home);
      await page.locator('#theme-toggle').click();
      expect(violations).toEqual([]);
      // Styles and fonts really loaded under the policy.
      await expect(page.locator('h1')).toHaveCSS('font-family', /IBM Plex Sans/);
    });

    for (const width of widths) {
      test(`no horizontal overflow at ${width}px`, async ({ page }) => {
        await page.setViewportSize({ width, height: 800 });
        await page.goto(home);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        expect(overflow).toBeLessThanOrEqual(0);
      });
    }

    test('every section can be reached from the navigation on a phone', async ({ page }) => {
      await page.setViewportSize({ width: 360, height: 740 });
      await page.goto(home);
      const links = page.locator('.toc a');
      expect(await links.count()).toBe(7);
      for (const link of await links.all()) {
        const hash = await link.getAttribute('href');
        await link.scrollIntoViewIfNeeded();
        await link.click();
        await expect(page).toHaveURL(new RegExp(`${hash}$`));
        await expect(page.locator(hash!)).toBeInViewport();
      }
    });

    test('the diagram shown fits its screen', async ({ page }) => {
      await page.setViewportSize({ width: 360, height: 740 });
      await page.goto(home);
      await expect(page.locator('.diagram-narrow')).toBeVisible();
      await expect(page.locator('.diagram-wide')).toBeHidden();
      await page.setViewportSize({ width: 1440, height: 900 });
      await expect(page.locator('.diagram-wide')).toBeVisible();
      await expect(page.locator('.diagram-narrow')).toBeHidden();
    });

    test('theme switch changes the theme and is remembered', async ({ page }) => {
      await page.emulateMedia({ colorScheme: 'light' });
      await page.goto(home);
      const html = page.locator('html');
      const ground = () => page.evaluate(() => getComputedStyle(document.body).backgroundColor);
      const light = await ground();
      await page.locator('#theme-toggle').click();
      await expect(html).toHaveAttribute('data-theme', 'dark');
      expect(await ground()).not.toBe(light);
      await page.reload();
      await expect(html).toHaveAttribute('data-theme', 'dark');
    });

    test('external and credential links are https', async ({ page }) => {
      await page.goto(home);
      const hrefs = await page.locator('a[href^="http"]').evaluateAll((as) => as.map((a) => (a as HTMLAnchorElement).href));
      expect(hrefs.length).toBeGreaterThan(0);
      for (const href of hrefs) expect(href).toMatch(/^https:\/\//);
    });
  });
}

test('language switch goes both ways', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.locator('.lang-switch').click();
  await expect(page).toHaveURL(/\/fr\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
  await page.locator('.lang-switch').click();
  await expect(page).toHaveURL(/:4399\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('both languages have the same sections and certifications', async ({ page }) => {
  const shape = async (url: string) => {
    await page.goto(url);
    return {
      sections: await page.locator('main section[id]').evaluateAll((s) => s.map((x) => x.id)),
      certs: await page.locator('.cert').count(),
      roles: await page.locator('#experience .timeline > li').count(),
    };
  };
  expect(await shape('/fr/')).toEqual(await shape('/'));
});
