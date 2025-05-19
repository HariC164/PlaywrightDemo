import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login-page';

test.describe('Shiptech Login Tests', () => {
    test('should login successfully with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        // Navigate to the login page
        await page.goto('https://qc.shiptech.com');
        
        // Perform login
        await loginPage.login(
            'hariharan.cm@inatech.onmicrosoft.com',
            'Afterlife@123'
        );

        // Add verification that login was successful
        // Depending on what's available after login, you might want to verify:
        // - URL change
        // - Presence of dashboard elements
        // - Absence of login form
        await expect(page).not.toHaveURL(/.*login.*/);
    });
});
