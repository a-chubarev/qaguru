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
        this.userPasswordFieldLocator = this.page.locator(`input[name="password"]`)
        this.updateSettingsButton = this.page.getByRole('button', { name: 'Update Settings' })
    }

    //TODO: дописать для остальных полей
    async setUserPassword(password = this.changeUser.password,
                      locator = this.userPasswordFieldLocator) {
        await locator.fill(password);
    }
    async clickUpdateSettingsButton(button = this.updateSettingsButton) {
        await button.click();
    }

}
