// @ts-check
import { test, expect } from '@playwright/test';

test('Добавление и удаление товаров в корзине', async ({ page }) => {
/*
1. Перейти на сайт https://rahulshettyacademy.com/seleniumPractise/#/.
2. В строке поиска ввести значение “ro”.
3. Найти элемент Carrot в результатах поиска и установить количество
равным 5 с помощью поля ввода (input).
4. Найти элемент Mushroom в результатах поиска и установить количество
равным 3, используя нажатия на кнопку увеличения (increment).
5. Добавить Carrot в корзину.
6. Добавить Mushroom в корзину.
7. Нажать на иконку корзины для открытия списка товаров.
8. Удалить Carrot из корзины.
*/
  //1. Перейти на сайт
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
  // 2. Ввести “ro” в строку поиска
  await page.locator('.search-keyword').fill('ro');
  await page.waitForTimeout(1000);
  // 3. Установить количество Carrot = 5 через input
  const carrotCard = page.locator(".product:has-text('Carrot')");
  const carrotInput = carrotCard.locator('input.quantity');
  await carrotInput.fill('5');
  // 4. Установить количество Mushroom = 3 нажатием на кнопку "+"
  const mushroomCard = page.locator(".product:has-text('Mushroom')");
  const mushroomIncrement = mushroomCard.locator('a.increment');
  await mushroomIncrement.click();
  await mushroomIncrement.click();
  // 5. Добавить Carrot в корзину
  await carrotCard.locator('button:has-text("ADD TO CART")').click(); 
  // 6. Добавить Mushroom в корзину
  await mushroomCard.locator('button:has-text("ADD TO CART")').click();
  // 7. Открыть корзину
  await page.locator('img[alt="Cart"]').click();
  // 8. Удалить Carrot из корзины
  await page.getByRole('listitem').filter({ hasText: 'Carrot - 1 Kg563 Nos. 168×' }).getByRole('link').click();
  await page.waitForTimeout(1000);
});
