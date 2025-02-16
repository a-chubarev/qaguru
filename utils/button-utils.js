//Проверка отображения и доступности кнопки
export async function isButtonClickable(page, buttonLocator, buttonText) {
    const button = page.locator(buttonLocator, { hasText: buttonText });
    try {
        await button.waitFor({ state: 'enabled', timeout: 3000 }); // Ожидаем до 3 секунд
        return true;
    } catch (error) {
        return false;
    }
}

//Вернуть индекс рандомной статьи
export async function getRandomArticleHeader(headers) {
    const count = await headers.count();
    const randomIndex = Math.floor(Math.random() * count);
    return headers.nth(randomIndex);
}