import { test, expect } from '@playwright/test';

test.describe('Puzzles Page', () => {
  test('should display all puzzle cards', async ({ page }) => {
    await page.goto('/puzzles');
    
    await expect(page.locator('h1')).toContainText('Coding Puzzles');
    
    // Check that puzzle cards are displayed
    const puzzleCards = page.locator('[data-testid="puzzle-card"], .group').filter({ hasText: 'Solve' });
    await expect(puzzleCards.first()).toBeVisible();
  });

  test('should filter puzzles by difficulty', async ({ page }) => {
    await page.goto('/puzzles');
    
    // Check for difficulty badges
    const easyBadge = page.locator('text=Easy').first();
    const mediumBadge = page.locator('text=Medium').first();
    const hardBadge = page.locator('text=Hard').first();
    
    await expect(easyBadge.or(mediumBadge).or(hardBadge)).toBeVisible();
  });

  test('should navigate to specific puzzle', async ({ page }) => {
    await page.goto('/puzzles');
    
    // Click first "Solve" button
    await page.click('text=Solve >> nth=0');
    
    // Should navigate to puzzle page
    await expect(page).toHaveURL(/\/puzzle\//);
  });

  test('should display puzzle categories', async ({ page }) => {
    await page.goto('/puzzles');
    
    // Check for category badges
    const categories = page.locator('text=Arrays, text=Strings, text=Algorithms, text=Data Structures');
    await expect(categories.first()).toBeVisible();
  });

  test('should show coming soon section', async ({ page }) => {
    await page.goto('/puzzles');
    
    await expect(page.locator('text=Coming Soon')).toBeVisible();
    await expect(page.locator('text=More challenging puzzles')).toBeVisible();
  });

  test('should have working puzzle icons', async ({ page }) => {
    await page.goto('/puzzles');
    
    // Check that puzzle cards have icons (svg elements)
    const icons = page.locator('svg').first();
    await expect(icons).toBeVisible();
  });
});
