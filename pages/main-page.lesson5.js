//Главная страница
import {getRandomArticleHeader} from "../utils/button-utils";

export class MainPage{
    constructor(page){
        this.page = page;
    }

    async openPage(){
        await this.page.goto(process.env.BASE_URL);
    }

}

//navbar
export class NavigationBar{
    constructor(page){
        this.page = page;
        this.userNameButtonLocator = this.page.locator('div.nav-link.dropdown-toggle.cursor-pointer')
    }

    async clickConduitButton(){
        await this.page.locator('a.navbar-brand', { hasText: "conduit" }).click();
    }
    async clickSourceCodeButton(){
        await this.page.locator('a.nav-link', { hasText: "Source code" }).click();
    }
    async clickHomeButton(){
        await this.page.locator('a.nav-link', { hasText: "Home" }).click();
    }
    async clickLoginButton(){
        await this.page.locator('a.nav-link', { hasText: "Login" }).click();
    }
    async clickSignupButton(){
        await this.page.locator('a.nav-link', { hasText: "Sign up" }).click();
    }
    async clickNewArticleButton(){
        await this.page.locator('a.nav-link', { hasText: "New Article" }).click();
    }
    async clickUserNameButton(){
        await this.page.locator('div.nav-link.dropdown-toggle.cursor-pointer').click();
    }
}

export class ContainerPage{
    constructor(page){
        this.page = page;
        this.globalFeedButtonLocator = this.page.getByRole('button', { name: "Global Feed" })
        this.yourFeedButtonLocator = this.page.getByRole('button', { name: "Your Feed" })
        this.articleHeadersLocator = this.page.locator('a.preview-link h1')

    }

    async clickYourFeedButton() {
        await this.page.getByRole('button', { name: "Your Feed" }).click();
    }

    async clickGlobalFeedButton() {
        await this.page.getByRole('button', { name: "Global Feed" }).click();
    }

    async getArticleHeaders() {
        return await this.page.locator('a.preview-link h1');
    }

    async clickRandomArticleHeader(){
        let articleHeaders = await this.getArticleHeaders()
        let header = await getRandomArticleHeader(articleHeaders)
        await header.click();
    }
}

export class UserDropDown{
    constructor(page){
        this.page = page;
        this.profileButtonLocator = this.page.locator('a.dropdown-item', { hasText: "Profile" })
        this.settingsButttonLocator = this.page.locator('a.dropdown-item', { hasText: "Settings" })
        this.logoutButtonLocator = this.page.locator('a.dropdown-item', {hasText: "Logout" })
    }
    async clickProfileButton(){
        await this.page.locator('a.dropdown-item', { hasText: "Profile" }).click();
    }
    async clickSettingsButton(){
        await this.page.locator('a.dropdown-item', { hasText: "Settings" }).click();
    }
    async clickLogoutButton(){
        await this.page.locator('a.dropdown-item', {hasText: "Logout" }).click();
    }
}
MainPage.NavigationBar = NavigationBar;
MainPage.ContainerPage = ContainerPage;
MainPage.UserDropDown = UserDropDown;