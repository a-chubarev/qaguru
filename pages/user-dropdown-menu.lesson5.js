export class UserDropDown{
    constructor(page){
        this.page = page;
        this.profileButtonLocator = this.page.locator('a.dropdown-item', { hasText: "Profile" })
        this.settingsButttonLocator = this.page.locator('a.dropdown-item', { hasText: "Settings" })
        this.logoutButtonLocator = this.page.locator('a.dropdown-item', {hasText: "Logout" })
    }
    async clickProfileButton(locator = this.profileButtonLocator){
        await locator.click();
    }
    async clickSettingsButton(locator = this.settingsButttonLocator){
        await locator.click();
    }
    async clickLogoutButton(locator = this.logoutButtonLocator){
        await locator.click();
    }
}
