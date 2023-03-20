import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    launchOptions: { slowMo: 100 },
  },
});
