import {User} from "../mock-data-generators/user.generators";


export class RegisterPage {
    constructor(page) {
        this.page = page;
        this.user = new User();
    }

    async setUserName(username = this.user.username) {
        await this.page.locator(`input[name="username"]`).fill(username);
    }

    async setUserEmail(email = this.user.email) {
        await this.page.locator(`input[name="email"]`).fill(email);
    }

    async setPassword(password = this.user.password) {
        await this.page.locator(`input[name="password"]`).fill(password);
    }

    async clickSignUpButton() {
        await this.page.getByRole('button', { name: "Sign up" }).click();
    }
}

