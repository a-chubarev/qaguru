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
    }
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
}

MainPage.NavigationBar = NavigationBar;