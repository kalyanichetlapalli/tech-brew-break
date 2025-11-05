import { test, expect } from '@playwright/test';

test.describe('Navigation E2E Tests', () => {
  test('should navigate to all main pages', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation to Puzzles
    await page.click('text=Puzzles');
    await expect(page).toHaveURL('/puzzles');
    await expect(page.locator('h1')).toContainText(/coding challenges/i);
    
    // Test navigation to Games
    await page.click('text=Games');
    await expect(page).toHaveURL('/games');
    await expect(page.locator('h1')).toContainText(/games/i);
    
    // Test navigation to Brainstorm
    await page.click('text=Brainstorm');
    await expect(page).toHaveURL('/brainstorm');
    await expect(page.locator('h1')).toContainText(/brainstorm/i);
    
    // Test navigation to Learn
    await page.click('text=Learn');
    await expect(page).toHaveURL('/learn');
    await expect(page.locator('h1')).toContainText(/learn/i);
    
    // Test navigation to About
    await page.click('text=About');
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toContainText(/about/i);
    
    // Test navigation to Contact
    await page.click('text=Contact');
    await expect(page).toHaveURL('/contact');
    await expect(page.locator('h1')).toContainText(/contact/i);
  });

  test('should navigate back to home from logo', async ({ page }) => {
    await page.goto('/puzzles');
    await page.click('text=CodeBrew');
    await expect(page).toHaveURL('/');
  });

  test('should handle 404 page', async ({ page }) => {
    await page.goto('/non-existent-page');
    await expect(page.locator('h1')).toContainText('404');
    
    // Test return home link
    await page.click('text=Return to Home');
    await expect(page).toHaveURL('/');
  });

  test('should maintain navigation state across page transitions', async ({ page }) => {
    await page.goto('/');
    
    await page.click('text=Puzzles');
    await expect(page).toHaveURL('/puzzles');
    
    await page.goBack();
    await expect(page).toHaveURL('/');
    
    await page.goForward();
    await expect(page).toHaveURL('/puzzles');
  });

  test('should have accessible navigation', async ({ page }) => {
    await page.goto('/');
    
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    
    // Check for keyboard navigation
    await page.keyboard.press('Tab');
    const focusedElement = await page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });
});
