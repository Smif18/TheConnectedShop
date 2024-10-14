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
        const account = threeLinks.locator('a.Link--primary');
        const searchLink = threeLinks.locator('xpath=a[@data-action.toggle-search]');
  

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
        await expect(searchLink).toBeVisible();
        //await expect(searchLink).toHaveAttribute('data-action', "toggle-search");
      })
})