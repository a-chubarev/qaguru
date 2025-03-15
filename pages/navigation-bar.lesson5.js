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