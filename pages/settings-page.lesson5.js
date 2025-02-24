import {User} from "../mock-data-generators/user.generators";


export class SettingsPage {
    constructor(page) {
        this.page = page;
        this.changeUser = new User();
        this.userAvatarFiledName = 'image'
        this.usernameFieldName = 'username'
        this.userShortDescriptionFieldName = 'bio'
        this.userEmailFieldName = 'email'
        //this.userPasswordFieldName = 'password'
        this.updateSettingsButton = this.page.getByRole('button', { name: 'Update Settings' })
    }

    async setUserPassword(password = this.changeUser.password) {
        await this.page.locator(`input[name="password"]`).fill(password);
    }
    async clickUpdateSettingsButton() {
        await this.page.getByRole('button', { name: 'Update Settings' }).click();
    }

}
