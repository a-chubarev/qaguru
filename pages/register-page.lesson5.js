import {User} from "../mock-data-generators/user.generators";

// Страница регистрации
export class RegisterPage {
    constructor(page) {
        this.page = page;
        this.user = new User();
    }

    // Открываем страницу регистрации
    async openRegisterPage() {
        await this.page.goto(process.env.BASE_URL)
        await this.page.locator('xpath=/html/body/div[1]/header/nav/div/ul[2]/li[3]/a').click()
    }

    //Регистрируем пользователя
    async registerUser(){
        //Имя пользователя
        await this.page.locator('xpath=/html/body/div[1]/main/div/div/div/div/form/fieldset[1]/input').fill(this.user.username)
        //email
        await this.page.locator('xpath=/html/body/div[1]/main/div/div/div/div/form/fieldset[2]/input').fill(this.user.email)
        //password
        await this.page.locator('xpath=/html/body/div[1]/main/div/div/div/div/form/fieldset[3]/input').fill(this.user.password)
        //Кнопка регистрации
        await this.page.locator('xpath=/html/body/div[1]/main/div/div/div/div/form/button').click()
    }

}


