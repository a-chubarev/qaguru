export class LoginPage {
    constructor(page, userData) {
        this.page = page;
        this.userEmailFieldName = 'email'
        this.userPasswordFieldName = 'password'
        this.signupButtonName = 'Login'
        this.userData = userData
    }

    //TODO: подумать, тут по идее должен быть один метод,
    //     в который я передаю два параметра (имя локатора и вводимый текст)
    async fillUserEmail(locatorName = this.userEmailFieldName) {
        await this.page.locator(`input[name="${locatorName}"]`).fill(this.userData.email);
    }
    async fillUserPassword(locatorName = this.userPasswordFieldName) {
        await this.page.locator(`input[name="${locatorName}"]`).fill(this.userData.password);
    }
    async clickLoginButton(buttonName = this.signupButtonName) {
        await this.page.getByRole('button', { name: buttonName }).click();
    }
}