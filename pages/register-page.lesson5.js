import {User} from "../mock-data-generators/user.generators";


export class RegisterPage {
    constructor(page) {
        this.page = page;
        this.user = new User();
        this.userNameFiledName = 'username'
        this.userEmailFieldName = 'email'
        this.userPasswordFieldName = 'password'
        this.signupButtonName = 'Sign up'
    }

        //TODO: подумать, тут по идее должен быть один метод,
    //     в который я передаю два параметра (имя локатора и вводимый текст)
    async setUserName(username = this.user.username,
                      locatorName = this.userNameFiledName) {
        await this.page.locator(`input[name="${locatorName}"]`).fill(username);
    }

    async setUserEmail(email = this.user.email,
                       locatorName = this.userEmailFieldName) {
        await this.page.locator(`input[name="${locatorName}"]`).fill(email);
    }

    async setPassword(password = this.user.password,
                      locatorName = this.userPasswordFieldName) {
        await this.page.locator(`input[name="${locatorName}"]`).fill(password);
    }

    async clickSignUpButton(buttonName = this.signupButtonName) {
        await this.page.getByRole('button', { name: buttonName }).click();
    }
}

