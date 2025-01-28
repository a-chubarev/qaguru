import { test, expect } from '@playwright/test';
import {RegisterPage} from "../pages/register-page.lesson5";
import * as dotenv from "dotenv";
dotenv.config();

test.describe('lesson 5', () => {
    let registerPage;

    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        await registerPage.openRegisterPage();
        await registerPage.registerUser();
        await expect(page.locator(`xpath=/html/body/div[1]/header/nav/div/ul[2]/li[3]/div[1]`)).toHaveText(registerPage.user.username)
    });

    test('Регистрация нового пользователя', async ({ page }) => {
        await expect(page.locator(`xpath=/html/body/div[1]/header/nav/div/ul[2]/li[3]/div[1]`)).toHaveText(registerPage.user.username)
    });
});