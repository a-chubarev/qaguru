import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register-page.lesson5';
import { MainPage, NavigationBar } from '../pages/main-page.lesson5';
import * as dotenv from 'dotenv';
//import { faker } from '@faker-js/faker'; // Correct import
/*import { test, expect } from '@playwright/test';
import {RegisterPage} from "../pages/register-page.lesson5";
import {MainPage, NavigationBar} from "../pages/main-page.lesson5";
import * as dotenv from "dotenv";
import {config} from "dotenv";
import { faker } from '@faker-js/faker';
import {as} from "@faker-js/faker/dist/airline-D6ksJFwG";*/
dotenv.config();


test.describe('lesson5', () => {
    let mainPage;
    let navigationBar;
    let registerPage;
    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page);
        navigationBar = new NavigationBar(page);
        registerPage = new RegisterPage(page);
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
            await expect(page.locator('div.nav-link.dropdown-toggle.cursor-pointer')).toHaveText(pupu)
        });
})
