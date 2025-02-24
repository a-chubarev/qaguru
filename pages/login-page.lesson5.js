export class LoginPage {
    constructor(page, userData) {
        this.page = page;
        this.userData = userData
    }

    async fillUserEmail() {
        await this.page.locator(`input[name="email"]`).fill(this.userData.email);
    }
    async fillUserPassword() {
        await this.page.locator(`input[name="password"]`).fill(this.userData.password);
    }
    async clickLoginButton() {
        await this.page.getByRole('button', { name: 'Login' }).click();
    }
}