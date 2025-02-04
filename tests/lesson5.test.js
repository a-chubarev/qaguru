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
        // TODO: убрать вывод в консоль
        console.log(`Имя пользователя в претесте: ${registerPage.user.username}`)
        await mainPage.openPage()
        await console.log(page.url())
        await navigationBar.clickSignupButton()
        await console.log(page.url())
        await registerPage.setUserName()
        await registerPage.setPassword()
        await registerPage.setUserEmail()
        await registerPage.clickSignUpButton()
        //await expect (page.locator('div.nav-link dropdown-toggle cursor-pointer', {hasText:registerPage.user.username}).isVisible())
        //await expect(page.url()).not.toEqual(process.env.BASE_URL)
    })

    test('Регистрация нового пользователя',
        async ({page}) => {
            // TODO: убрать вывод в консоль
            console.log(`Имя пользователя в тесте регистрации: ${registerPage.user.username}`)
            // Полный URL
            console.log(page.url())
            //
            // await expect('1').toEqual('1')
            await expect(page.locator('div.nav-link dropdown-toggle cursor-pointer')).toHaveText(registerPage.user.username)
        });
})
