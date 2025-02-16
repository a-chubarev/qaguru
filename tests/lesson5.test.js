import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register-page.lesson5';
import {ContainerPage, MainPage, NavigationBar, UserDropDown} from '../pages/main-page.lesson5';
import * as dotenv from 'dotenv';
import {isButtonClickable} from "../utils/button-utils";
//import { faker } from '@faker-js/faker'; // Correct import
/*import { test, expect } from '@playwright/test';
import {RegisterPage} from "../pages/register-page.lesson5";
import {MainPage, NavigationBar} from "../pages/main-page.lesson5";
import * as dotenv from "dotenv";
import {config} from "dotenv";
import { faker } from '@faker-js/faker';
import {as} from "@faker-js/faker/dist/airline-D6ksJFwG";*/
import {NewArticlePage} from "../pages/article-page.lesson5";
import {ArticlePage} from "../pages/article-page.lesson5";
import {SettingsPage} from "../pages/settings-page.lesson5";

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
    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page);
        navigationBar = new NavigationBar(page);
        registerPage = new RegisterPage(page);
        newArticlePage = new NewArticlePage(page);
        await mainPage.openPage()
        await navigationBar.clickSignupButton()
        await registerPage.setUserName()
        await registerPage.setPassword()
        await registerPage.setUserEmail()
        await registerPage.clickSignUpButton()
        await page.waitForNavigation()
    })

    test('Пользователь зарегистрирован и авторизован',
        async ({page}) => {
            // Запомнить что в Playwright селекторы классов должны быть разделены точками (.)
            // или объединены через атрибут [class]. Потратил час на поиск проблемы
            await expect(page.locator('div.nav-link.dropdown-toggle.cursor-pointer')).toHaveText(registerPage.user.username)
        });

    test('Пользователь может опубликовать статью', async ({page}) => {
       //TODO статья не публикуется почему-то
        await navigationBar.clickNewArticleButton()
        await newArticlePage.setTitle()
        await newArticlePage.setDescription()
        await newArticlePage.setTitleBody()
        await newArticlePage.setTags()
        await newArticlePage.clickPublishButton()
        await expect(page.locator('div.container h1')).toHaveText(newArticlePage.article.title)
    })

    test('Пользователь может опубликовать комментарий', async ({page}) => {
        articlePage = new ArticlePage(page);
        containerPage = new ContainerPage(page)
        await navigationBar.clickConduitButton()
        await containerPage.clickGlobalFeedButton()
        await containerPage.clickRandomArticleHeader()
        await articlePage.setArticleComment()
        await articlePage.clickPostCommentButton()
    })

    test('Пользователь может сменить пароль', async ({page}) => {
        userDropDown = new UserDropDown(page);
        settingsPage = new SettingsPage(page);
        await navigationBar.clickUserNameButton()
        await userDropDown.clickSettingsButton()
        console.log(page.url())
        await settingsPage.setUserPassword()
        await settingsPage.clickUpdateSettingsButton()
        await expect(page.getByRole('button', { name: settingsPage.updateSettingsButtonName })).toHaveCount(0)
    })


})