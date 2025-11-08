import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to all main pages', async ({ page }) => {
    await page.goto('/');
    
    // Check home page loads
    await expect(page.locator('h1')).toContainText('Tech');
    
    // Navigate to Puzzles
    await page.click('text=Puzzles');
    await expect(page).toHaveURL('/puzzles');
    await expect(page.locator('h1')).toContainText('Coding Puzzles');
    
    // Navigate to Games
    await page.click('text=Games');
    await expect(page).toHaveURL('/games');
    await expect(page.locator('h1')).toContainText('Tech Games');
    
    // Navigate to Learn
    await page.click('text=Learn');
    await expect(page).toHaveURL('/learn');
    await expect(page.locator('h1')).toContainText('Learn');
    
    // Navigate to Brainstorm
    await page.click('text=Brainstorm');
    await expect(page).toHaveURL('/brainstorm');
    await expect(page.locator('h1')).toContainText('Brainstorm');
    
    // Navigate to Contact
    await page.click('text=Contact');
    await expect(page).toHaveURL('/contact');
    await expect(page.locator('h1')).toContainText('Get in Touch');
    
    // Navigate to About
    await page.click('text=About');
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toContainText('About');
  });

  test('should handle 404 page', async ({ page }) => {
    await page.goto('/non-existent-page');
    await expect(page.locator('h1')).toContainText('404');
    await expect(page.locator('text=Page not found')).toBeVisible();
    
    // Click return to home
    await page.click('text=Return to Home');
    await expect(page).toHaveURL('/');
  });

  test('should toggle theme', async ({ page }) => {
    await page.goto('/');
    
    // Find and click theme toggle button
    const themeButton = page.locator('button').filter({ has: page.locator('svg') }).first();
    await themeButton.click();
    
    // Wait for theme to change
    await page.waitForTimeout(500);
    
    // Check if dark class is applied to html element
    const htmlElement = page.locator('html');
    const isDark = await htmlElement.evaluate(el => el.classList.contains('dark'));
    
    expect(isDark).toBeTruthy();
  });
});
