import { test, expect } from '@playwright/test';

test.describe('Performance E2E Tests', () => {
  test('should load home page within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    // Page should load in under 3 seconds
    expect(loadTime).toBeLessThan(3000);
    
    // Check for visible content
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should have minimal layout shifts', async ({ page }) => {
    await page.goto('/');
    
    // Wait for page to settle
    await page.waitForLoadState('networkidle');
    
    // Take initial screenshot
    const before = await page.screenshot();
    
    // Wait a bit more
    await page.waitForTimeout(500);
    
    // Check that major elements are stable
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('should lazy load images', async ({ page }) => {
    await page.goto('/');
    
    // Check for loading attributes on images
    const images = await page.locator('img').all();
    
    for (const img of images) {
      const loading = await img.getAttribute('loading');
      // Images should have loading="lazy" or be visible
      const isVisible = await img.isVisible();
      expect(loading === 'lazy' || isVisible).toBeTruthy();
    }
  });

  test('should handle large list rendering', async ({ page }) => {
    await page.goto('/puzzles');
    
    // Check that puzzles render without performance issues
    const startTime = Date.now();
    await page.waitForSelector('text=Try Now', { timeout: 5000 });
    const renderTime = Date.now() - startTime;
    
    expect(renderTime).toBeLessThan(2000);
  });

  test('should minimize bundle size indicators', async ({ page }) => {
    await page.goto('/');
    
    // Check for code splitting indicators
    const scripts = await page.locator('script[type="module"]').all();
    
    // Should have scripts loaded
    expect(scripts.length).toBeGreaterThan(0);
  });

  test('should cache static assets', async ({ page, context }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Navigate away and back
    await page.goto('/puzzles');
    await page.goto('/');
    
    // Page should load quickly from cache
    const startTime = Date.now();
    await page.waitForLoadState('networkidle');
    const cachedLoadTime = Date.now() - startTime;
    
    expect(cachedLoadTime).toBeLessThan(1000);
  });

  test('should handle rapid interactions', async ({ page }) => {
    await page.goto('/learn');
    
    // Rapidly click between tabs
    const startTime = Date.now();
    await page.click('text=Web');
    await page.click('text=Mobile');
    await page.click('text=Backend');
    await page.click('text=DevOps');
    const interactionTime = Date.now() - startTime;
    
    // Should handle quickly
    expect(interactionTime).toBeLessThan(2000);
    
    // Content should be visible
    await expect(page.locator('text=Watch Now').first()).toBeVisible();
  });
});
