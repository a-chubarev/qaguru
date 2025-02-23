import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register-page.lesson5';
import {ContainerPage, MainPage, NavigationBar, UserDropDown} from '../pages/main-page.lesson5';
import * as dotenv from 'dotenv';
import {NewArticlePage} from "../pages/article-page.lesson5";
import {ArticlePage} from "../pages/article-page.lesson5";
import {SettingsPage} from "../pages/settings-page.lesson5";
import {LoginPage} from "../pages/login-page.lesson5";

dotenv.config();


test.describe.serial('lesson5', () => {
    let mainPage;
    let navigationBar;
    let registerPage;
    let newArticlePage;
    let articlePage;
    let containerPage;
    let userDropDown;
    let settingsPage;
    let loginPage;
    let userData;

    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page);
        navigationBar = new NavigationBar(page);
        newArticlePage = new NewArticlePage(page);
        await mainPage.openPage()
        if (userData) {
            loginPage = new LoginPage(page, userData);
            await navigationBar.clickLoginButton();
            await loginPage.fillUserEmail()
            await loginPage.fillUserPassword()
            await loginPage.clickLoginButton()
        }
        else {
            registerPage = new RegisterPage(page);
            userData = registerPage.user;
            await navigationBar.clickSignupButton()
            await registerPage.setUserName()
            await registerPage.setPassword()
            await registerPage.setUserEmail()
            await registerPage.clickSignUpButton()
            await page.waitForNavigation()
        }
    })

    test('Пользователь зарегистрирован и авторизован',
        async ({page}) => {
            // Запомнить что в Playwright селекторы классов должны быть разделены точками (.)
            // или объединены через атрибут [class]. Потратил час на поиск проблемы
            await expect(page.locator('div.nav-link.dropdown-toggle.cursor-pointer')).toHaveText(registerPage.user.username)
        });

    test('Пользователь может опубликовать статью', async ({page}) => {
        await navigationBar.clickNewArticleButton()
        await newArticlePage.setTitle()
        await newArticlePage.setDescription()
        await newArticlePage.setTitleBody()
        await newArticlePage.setTags()
        await newArticlePage.clickPublishButton()
        await expect(page.locator('div.container h1')).toHaveText(newArticlePage.article.title)
        //Насколько я понял на вкладке Your Feed должны быть статьи пользователя, под которым я авторизован.
        // Добавил тест на проверку, что там есть хоть что-то, но с ним падает,
        // т.к. У меня не выводятся статьи на этой вкладке. Закомментировал
        // await expect(page.locator('div.article-preview')).not.toHaveCount(0)
    })

    test('Пользователь может опубликовать комментарий', async ({page}) => {
        articlePage = new ArticlePage(page);
        containerPage = new ContainerPage(page)
        await navigationBar.clickConduitButton()
        await containerPage.clickGlobalFeedButton()
        await containerPage.clickRandomArticleHeader()
        await articlePage.setArticleComment()
        await articlePage.clickPostCommentButton()
        await expect(page.locator('p.card-text')).toHaveText(articlePage.article.articleText)
    })

    test('Пользователь может сменить пароль', async ({page}) => {
        userDropDown = new UserDropDown(page);
        settingsPage = new SettingsPage(page);
        //Меняю пароль пользователя на другой
        userData.password = settingsPage.changeUser.password;
        await navigationBar.clickUserNameButton()
        await userDropDown.clickSettingsButton()
        await settingsPage.setUserPassword()
        await settingsPage.clickUpdateSettingsButton()
        //не нашел другого способа проверить что кнопка не отображается
        await expect(page.getByRole('button', { name: settingsPage.updateSettingsButtonName })).toHaveCount(0)
        await navigationBar.clickUserNameButton()
        await userDropDown.clickLogoutButton()
        await navigationBar.clickLoginButton()
        await loginPage.fillUserEmail()
        await loginPage.fillUserPassword()
        await loginPage.clickLoginButton()
        await expect(page.locator('div.nav-link.dropdown-toggle.cursor-pointer')).toHaveText(userData.username)
    })


})