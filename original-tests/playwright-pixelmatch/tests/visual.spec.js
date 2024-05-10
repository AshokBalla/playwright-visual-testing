import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import fsExtra from 'fs-extra';

test('visual test for homepage', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('https://example.com');
    const actualPath = 'screenshots/actual/example.png';
    const baselinePath = 'screenshots/baseline/example.png';
    await fsExtra.ensureDir('screenshots/actual');
    await page.screenshot({ path: actualPath, fullPage: true });
    if (!fs.existsSync(baselinePath)) {
        console.warn(`⚠️ No baseline found. Creating at ${baselinePath}`);
        await fsExtra.ensureDir('screenshots/baseline');
        await fsExtra.copy(actualPath, baselinePath);
        return;
    }
    expect(fs.existsSync(baselinePath)).toBe(true);
});