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
        this.conduitButtonLocator = this.page.locator('a.navbar-brand', { hasText: "conduit" })
        this.sourceCodeButtonLocator = this.page.locator('a.nav-link', { hasText: "Source code" })
        this.homeButtonLocator = this.page.locator('a.nav-link', { hasText: "Home" })
        this.loginButtonLocator = this.page.locator('a.nav-link', { hasText: "Login" })
        this.signUpButtonLocator = this.page.locator('a.nav-link', { hasText: "Sign up" })
        this.newArticleButtonLocator = this.page.locator('a.nav-link', { hasText: "New Article" })
        this.userNameButtonLocator = this.page.locator('div.nav-link.dropdown-toggle.cursor-pointer')
    }
    // TODO: Здесь то же, что и на странице регистрации.
    //  По идее можно оставить один метод в который буду передавать два параметра и кликать
    //  И вообще надо разделить navbar по состояниям (авторизован юзер или нет)
    async clickConduitButton(locator = this.conduitButtonLocator){
        await locator.click();
    }
    async clickSourceCodeButton(locator = this.sourceCodeButtonLocator){
        await locator.click();
    }
    async clickHomeButton(locator = this.homeButtonLocator){
        await locator.click();
    }
    async clickLoginButton(locator = this.loginButtonLocator){
        await locator.click();
    }
    async clickSignupButton(locator = this.signUpButtonLocator){
        await locator.click();
    }
    async clickNewArticleButton(locator = this.newArticleButtonLocator){
        await locator.click();
    }
    async clickUserNameButton(locator = this.userNameButtonLocator){
        await locator.click();
    }
}

export class ContainerPage{
    constructor(page){
        this.page = page;
        //TODO: и это надо по идее вынести тоже в отдельный класс,
        // который будет наследоваться от ContainerPage
        this.globalFeedButtonLocator = this.page.getByRole('button', { name: "Global Feed" })
        this.yourFeedButtonLocator = this.page.getByRole('button', { name: "Your Feed" })
        this.articleHeadersLocator = this.page.locator('a.preview-link h1')

    }

    async clickYourFeedButton(button = this.yourFeedButtonLocator) {
        await button.click();
    }

    async clickGlobalFeedButton(button = this.globalFeedButtonLocator) {
        await button.click();
    }

    async getArticleHeaders(locator = this.articleHeadersLocator) {
        return await locator;
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
MainPage.NavigationBar = NavigationBar;
MainPage.ContainerPage = ContainerPage;
MainPage.UserDropDown = UserDropDown;