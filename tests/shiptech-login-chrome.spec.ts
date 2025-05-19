import { test, expect, chromium } from '@playwright/test';

test('Login to Shiptech in Chrome', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the login page
  const initialUrl = 'https://qc.shiptech.com';
  await page.goto(initialUrl);

  // Fill in email and click Next
  await page.fill('input[type="email"]', 'hariharan.cm@inatech.onmicrosoft.com');
  await page.click('input[type="submit"]');

  // Wait for password field and fill it
  await page.waitForSelector('input[type="password"]');
  await page.fill('input[type="password"]', 'Afterlife@123');

  // Click the final sign-in button
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    page.click('input[type="submit"]')
  ]);

  // Wait for and click the "Yes" button on "Stay signed in?" prompt
  const yesButton = page.locator('input[type="submit"]:has-text("Yes")');
  if (await yesButton.isVisible({ timeout: 5000 })) {
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'networkidle' }),
      yesButton.click()
    ]);
  }

  // Wait for a home page-specific element to ensure the page is loaded
  // Replace '.home-page-selector' with an actual selector unique to your home page
  await page.waitForSelector("//span[normalize-space()='3']", { timeout: 60000 });

  // Verify the current URL matches the expected home URL
  await expect(page).toHaveURL('https://qc.shiptech.com/#/');

  await browser.close();
});
