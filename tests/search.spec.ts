import { test, expect } from '@playwright/test';
test.describe('checkSearchFunction', ()=>{
    test.beforeEach(async({page})=>{
        await page.goto('https://theconnectedshop.com');
    })
    test('findingExistedProducts', async ({ page }) => {
        const threeLinks = page.locator('nav.Header__SecondaryNav');
        const searchLink = threeLinks.locator('a[data-action="toggle-search"]');

        await searchLink.click();
        const searchBar = page.locator('.Search__SearchBar');
        await expect(searchBar).toBeVisible();
        const searchImput = page.locator('input[name="q"]');
        await searchImput.fill('Smart Door Lock');
        const searchResult = page.locator('span.Heading.Text--subdued.u-h7').first();
        await expect(searchResult).toHaveText(/results/);
    })
    test('findingNotMatchedProduct', async({ page }) =>{
        const threeLinks = page.locator('nav.Header__SecondaryNav');
        const searchLink = threeLinks.locator('a[data-action="toggle-search"]');

        await searchLink.click();
        const searchBar = page.locator('.Search__SearchBar');
        await expect(searchBar).toBeVisible();
        const searchImput = page.locator('input[name="q"]');
        await searchImput.fill('Test');
        // найти текст "No results could be found"

    })
})
