//Главная страница
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
    //  И вообще надо разделить либо navbar по состояниям (авторизован юзер или нет)
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
}

export class ContainerPage{
    constructor(page){
        this.page = page;
        //TODO: и это надо по идее вынести тоже в отдельный класс,
        // который будет наследоваться от ContainerPage
        this.yourFeedButtonName = 'Your Feed';
        this.globalFeedButtonName = 'Global Feed';

    }

}
MainPage.NavigationBar = NavigationBar;