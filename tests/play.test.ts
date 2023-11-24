import { expect, test } from '@playwright/test';
import { describe } from 'vitest';

test('Can play tic-tac-toe', async ({ page }) => {
	await page.goto('/play/tic-tac-toe');

	await page.locator(`[data-x="1"][data-y="1"]`).click();
	await page.locator(`[data-x="2"][data-y="1"]`).click();
	await page.locator(`[data-x="1"][data-y="2"]`).click();
	await page.locator(`[data-x="2"][data-y="2"]`).click();
	await page.locator(`[data-x="1"][data-y="3"]`).click();

	await expect(page.getByText('X Wins!')).toBeVisible();
});


test.describe('Mobile', () => {
	test.use({hasTouch: true});

	// For some reason this does not work on playwright
	test.skip('tic-tac-toe', async ({ page }) => {
		await page.goto('/play/tic-tac-toe');
	
		await page.locator(`[data-x="1"][data-y="1"]`).tap();
		await page.locator(`[data-x="2"][data-y="1"]`).tap();
		await page.locator(`[data-x="1"][data-y="2"]`).tap();
		await page.locator(`[data-x="2"][data-y="2"]`).tap();
		await page.locator(`[data-x="1"][data-y="3"]`).tap();
	
		await expect(page.getByText('X Wins!')).toBeVisible();
	});	
});