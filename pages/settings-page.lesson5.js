import {User} from "../mock-data-generators/user.generators";


export class SettingsPage {
    constructor(page) {
        this.page = page;
        this.changeUser = new User();
        this.userAvatarFiledName = 'image'
        this.usernameFieldName = 'username'
        this.userShortDescriptionFieldName = 'bio'
        this.userEmailFieldName = 'email'
        this.userPasswordFieldName = 'password'
        this.updateSettingsButtonName = 'Update Settings'
    }

    //TODO: дописать для остальных полей
    async setUserPassword(password = this.changeUser.password,
                      locatorName = this.userPasswordFieldName) {
        await this.page.locator(`input[name="${locatorName}"]`).fill(password);
    }
    async clickUpdateSettingsButton(buttonName = this.updateSettingsButtonName) {
        await this.page.getByRole('button', { name: buttonName }).click();
    }

}
