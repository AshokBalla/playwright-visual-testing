import { test, expect } from '@playwright/test';
test('debug artifact sample', async () => {
  expect('trace').toContain('tr');
});
