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