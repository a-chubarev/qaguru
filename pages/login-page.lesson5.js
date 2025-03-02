export class LoginPage {
    constructor(page) {
        this.page = page;
        this.userEmailFieldLocator = this.page.locator(`input[name="email"]`)
        this.userPasswordFieldLocator = this.page.locator(`input[name="password"]`)
        this.signupButton = this.page.getByRole('button', { name: 'Login' })
    }

    async loginUser(userData) {
        await this.userEmailFieldLocator.fill(userData.email);
        await this.userPasswordFieldLocator.fill(userData.password);
        await this.signupButton.click();
    }
}