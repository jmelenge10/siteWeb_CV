import { defineConfig, devices } from '@playwright/test';

// Tests run against the built site (run `npm run build` first), served by `astro preview`.
export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: { baseURL: 'http://localhost:4399' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'npm run preview -- --port 4399',
    url: 'http://localhost:4399',
    reuseExistingServer: !process.env.CI,
  },
});
