export class SettingsPage {
    constructor(page) {
        this.page = page;
        this.userPasswordFieldLocator = this.page.locator(`input[name="password"]`)
        this.updateSettingsButton = this.page.getByRole('button', { name: 'Update Settings' })
    }

    async changeUserPassword(password) {
        await this.userPasswordFieldLocator.fill(password);
        await this.updateSettingsButton.click();
    }
}
