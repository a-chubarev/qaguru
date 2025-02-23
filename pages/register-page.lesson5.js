import {User} from "../mock-data-generators/user.generators";


export class RegisterPage {
    constructor(page) {
        this.page = page;
        this.user = new User();
        this.userNameFieldLocator = this.page.locator(`input[name="username"]`)
        this.userEmailFieldLocator = this.page.locator(`input[name="email"]`)
        this.userPasswordFieldLocator = this.page.locator(`input[name="password"]`)
        this.signUpButtonLocator = this.page.getByRole('button', { name: "Sign up" })
    }

        //TODO: подумать, тут по идее должен быть один метод,
    //     в который я передаю два параметра (имя локатора и вводимый текст)
    async setUserName(username = this.user.username,
                      locator = this.userNameFieldLocator) {
        await locator.fill(username);
    }

    async setUserEmail(email = this.user.email,
                       locator = this.userEmailFieldLocator) {
        await locator.fill(email);
    }

    async setPassword(password = this.user.password,
                      locator = this.userPasswordFieldLocator) {
        await locator.fill(password);
    }

    async clickSignUpButton(button = this.signUpButtonLocator) {
        await button.click();
    }
}

