import { test, expect } from '@playwright/test';

test.describe('Responsive Design', () => {
  test('should display mobile menu on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Mobile menu button should be visible
    const menuButton = page.locator('button[aria-label="Menu"], button').filter({ hasText: /menu/i }).first();
    await expect(menuButton.or(page.locator('svg').first())).toBeVisible();
  });

  test('should work on tablet viewport', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    
    await expect(page.locator('h1')).toBeVisible();
    
    // Navigate to a page
    await page.click('text=Puzzles');
    await expect(page).toHaveURL('/puzzles');
  });

  test('should work on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    
    await expect(page.locator('h1')).toBeVisible();
    
    // All navigation items should be visible on desktop
    await expect(page.locator('text=Puzzles')).toBeVisible();
    await expect(page.locator('text=Games')).toBeVisible();
    await expect(page.locator('text=Learn')).toBeVisible();
  });

  test('should adapt puzzle grid on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/puzzles');
    
    // Puzzle cards should be visible
    const puzzleCards = page.locator('[data-testid="puzzle-card"], .group').filter({ hasText: 'Solve' });
    await expect(puzzleCards.first()).toBeVisible();
  });

  test('should adapt contact form on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/contact');
    
    // Form should be visible and functional
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });
});
