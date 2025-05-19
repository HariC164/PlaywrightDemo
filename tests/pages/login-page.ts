import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    // Locators
    private emailInput = this.page.locator('input[type="email"]');
    private passwordInput = this.page.locator('input[type="password"]');
    private loginButton = this.page.getByRole('button', { name: /sign in/i });

    // Actions
    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
