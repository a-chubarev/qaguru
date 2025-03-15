export class RegisterPage {
    constructor(page) {
        this.page = page;
        this.userNameFieldLocator = this.page.locator(`input[name="username"]`)
        this.userEmailFieldLocator = this.page.locator(`input[name="email"]`)
        this.userPasswordFieldLocator = this.page.locator(`input[name="password"]`)
        this.signUpButtonLocator = this.page.getByRole('button', { name: "Sign up" })
    }

    async registerUser(userData) {
        await this.userNameFieldLocator.fill(userData.username)
        await this.userEmailFieldLocator.fill(userData.email)
        await this.userPasswordFieldLocator.fill(userData.password)
        await this.signUpButtonLocator.click()
    }
}