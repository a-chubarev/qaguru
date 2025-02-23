export class LoginPage {
    constructor(page, userData) {
        this.page = page;
        this.userEmailFieldLocator = this.page.locator(`input[name="email"]`)
        this.userPasswordFieldLocator = this.page.locator(`input[name="password"]`)
        this.signupButton = this.page.getByRole('button', { name: 'Login' })
        this.userData = userData
    }

    //TODO: подумать, тут по идее должен быть один метод,
    //     в который я передаю два параметра (имя локатора и вводимый текст)
    async fillUserEmail(locator = this.userEmailFieldLocator) {
        await locator.fill(this.userData.email);
    }
    async fillUserPassword(locator = this.userPasswordFieldLocator) {
        await locator.fill(this.userData.password);
    }
    async clickLoginButton(button = this.signupButton) {
        await button.click();
    }
}