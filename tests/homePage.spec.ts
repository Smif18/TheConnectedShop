import { test, expect } from '@playwright/test';
import { link } from 'fs';
test.describe('checkHomePageElements', ()=>{

    test.beforeEach(async({page})=>{
        await page.goto('https://theconnectedshop.com');
    })
    test('Home page loads successfully', async ({ page }) => {
        await expect(page).toHaveTitle("The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office");
        await expect(page).toHaveURL('https://theconnectedshop.com')
      });
      test('Check header elements', async ({ page }) => {
        const logoLink = page.locator('a.Header__LogoLink');
        const primaryLogo = logoLink.locator('img.Header__LogoImage--primary');
        const transparentLogo = logoLink.locator('img.Header__LogoImage--transparent');
        const threeLinks = page.locator('nav.Header__SecondaryNav');
        const account = page.locator('nav.Header__SecondaryNav a.Link--primary:has-text("Account")');
        const searchLink = threeLinks.locator('a[data-action="toggle-search"]');
        //const cart = page.locator('a[aria-label="Open-cart"]').first();
        
  

        // проверка отображения логотипа
        await expect(logoLink).toBeVisible();
        // проверка primary logo
        await expect(primaryLogo).toHaveAttribute('alt', 'The Connected Shop Logo');
        await expect(primaryLogo).toHaveAttribute('src', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_250x.png?v=1705959137');
          // проверка transparent logo
        await expect(transparentLogo).toHaveAttribute('alt', 'The Connected Shop Logo White');
        await expect(transparentLogo).toHaveAttribute('src', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_logo_250x.png?v=1705959163');
          // проверка ссылки Account
        await expect(account.getByText('account')).toBeVisible();
        // второй вариант проверки на текст
        await expect(account).toHaveText('Account');
        // проверка на наличие ссылки в Account
        await expect(account).toHaveAttribute('href', '/account');
        // проверка search на наличие ссылки и видимость
        await expect(searchLink.nth(0)).toBeVisible();
        await expect(searchLink).toHaveAttribute('data-action', "toggle-search");
        await expect(searchLink).toHaveAttribute('href', '/search');
        // Проверка Cart
        //await expect(cart).toBeVisible();
      })
})