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
        this.conduitButtonName = 'conduit'
        this.sourceCodeButtonName ='Source code'
        this.homeButtonName = 'Home'
        this.loginButtonName = 'Login'
        this.signupButtonName = 'Sign up'
        this.newArticleButtonName = 'New Article'
    }
    // TODO: Здесь то же, что и на странице регистрации.
    //  По идее можно оставить один метод в который буду передавать два параметра и кликать
    //  И вообще надо разделить navbar по состояниям (авторизован юзер или нет)
    async clickConduitButton(){
        await this.page.locator('a.navbar-brand', { hasText: this.conduitButtonName }).click();
    }
    async clickSourceCodeButton(){
        await this.page.locator('a.nav-link', { hasText: this.sourceCodeButtonName }).click();
    }
    async clickHomeButton(){
        await this.page.locator('a.nav-link', { hasText: this.homeButtonName }).click();
    }
    async clickLoginButton(){
        await this.page.locator('a.nav-link', { hasText: this.loginButtonName }).click();
    }
    async clickSignupButton(){
        await this.page.locator('a.nav-link', { hasText: this.signupButtonName }).click();
    }
    async clickNewArticleButton(){
        await this.page.locator('a.nav-link', { hasText: this.newArticleButtonName }).click();
    }
    async clickUserNameButton(){
        await this.page.locator('div.nav-link.dropdown-toggle.cursor-pointer').click();
    }
}

export class ContainerPage{
    constructor(page){
        this.page = page;
        //TODO: и это надо по идее вынести тоже в отдельный класс,
        // который будет наследоваться от ContainerPage
        this.yourFeedButtonName = 'Your Feed';
        this.globalFeedButtonName = 'Global Feed';

    }

    async clickYourFeedButton(buttonName = this.yourFeedButtonName) {
        await this.page.getByRole('button', { name: buttonName }).click();
    }

    async clickGlobalFeedButton(buttonName = this.globalFeedButtonName) {
        await this.page.getByRole('button', { name: buttonName }).click();
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
        this.profileButtonName = 'Profile';
        this.settingsButtonName = 'Settings';
        this.logoutButtonName = 'Logout';
    }
    async clickProfileButton(){
        await this.page.locator('a.dropdown-item', { hasText: this.profileButtonName }).click();
    }
    async clickSettingsButton(){
        await this.page.locator('a.dropdown-item', { hasText: this.settingsButtonName }).click();
    }
    async clickLogoutButton(){
        await this.page.locator('a.dropdown-item', { hasText: this.logoutButtonName }).click();
    }
}
MainPage.NavigationBar = NavigationBar;
MainPage.ContainerPage = ContainerPage;
MainPage.UserDropDown = UserDropDown;