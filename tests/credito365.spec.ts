import { test, expect } from '@playwright/test';
test.describe('checkHomePageElements', ()=>{

    test.beforeEach(async({page})=>{
        await page.goto('https://credito365.co');
    })
    test('Home page loads successfully', async ({ page }) => {
        await expect(page).toHaveTitle("Prestamos en linea online: favorables créditos en línea en 20 minutos. Préstamos Rápidos y Seguros en Colombia - Credito365");
      });
})