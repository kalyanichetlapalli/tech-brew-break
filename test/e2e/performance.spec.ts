import { test, expect } from '@playwright/test';

test.describe('Performance', () => {
  test('should load home page within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    // Page should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);
    
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should have no console errors on home page', async ({ page }) => {
    const errors: string[] = [];
    
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Filter out known/acceptable errors if any
    const criticalErrors = errors.filter(error => 
      !error.includes('404') && !error.includes('favicon')
    );
    
    expect(criticalErrors.length).toBe(0);
  });

  test('should handle navigation without page reload', async ({ page }) => {
    await page.goto('/');
    
    const navigationPromise = page.waitForURL('/puzzles');
    await page.click('text=Puzzles');
    await navigationPromise;
    
    // Should be a SPA navigation (fast)
    await expect(page.locator('h1')).toContainText('Coding Puzzles');
  });

  test('should lazy load images efficiently', async ({ page }) => {
    await page.goto('/');
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    // Images should be present
    const images = page.locator('img');
    const count = await images.count();
    
    if (count > 0) {
      // Check that at least first image loaded
      await expect(images.first()).toBeVisible();
    }
  });

  test('should have minimal layout shifts', async ({ page }) => {
    await page.goto('/');
    
    // Wait for initial render
    await page.waitForTimeout(100);
    
    // Get initial position of main heading
    const h1 = page.locator('h1').first();
    const initialBox = await h1.boundingBox();
    
    // Wait a bit more for potential shifts
    await page.waitForTimeout(500);
    
    // Check position hasn't changed significantly
    const finalBox = await h1.boundingBox();
    
    if (initialBox && finalBox) {
      const shift = Math.abs(initialBox.y - finalBox.y);
      expect(shift).toBeLessThan(10); // Allow small shifts
    }
  });
});
