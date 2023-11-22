import { expect, test } from '@playwright/test';

test('Can play tic-tac-toe', async ({ page }) => {
	await page.goto('/play/tic-tac-toe');

	await page.locator(`[data-x="1"][data-y="1"]`).click();
	await page.locator(`[data-x="2"][data-y="1"]`).click();
	await page.locator(`[data-x="1"][data-y="2"]`).click();
	await page.locator(`[data-x="2"][data-y="2"]`).click();
	await page.locator(`[data-x="1"][data-y="3"]`).click();

	await expect(page.getByText('X Wins!')).toBeVisible();
});
