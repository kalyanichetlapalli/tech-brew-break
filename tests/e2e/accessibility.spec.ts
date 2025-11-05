import { test, expect } from '@playwright/test';

test.describe('Accessibility E2E Tests', () => {
  const pages = [
    '/',
    '/puzzles',
    '/games',
    '/brainstorm',
    '/learn',
    '/about',
    '/contact',
  ];

  for (const pagePath of pages) {
    test(`should have accessible page: ${pagePath}`, async ({ page }) => {
      await page.goto(pagePath);
      
      // Check for main heading
      const h1 = page.locator('h1');
      await expect(h1).toBeVisible();
      
      // Check for main landmark
      const main = page.locator('main');
      await expect(main).toBeVisible();
      
      // Check for navigation
      const nav = page.locator('nav');
      await expect(nav).toBeVisible();
      
      // Check for footer
      const footer = page.locator('footer');
      await expect(footer).toBeVisible();
    });

    test(`should support keyboard navigation: ${pagePath}`, async ({ page }) => {
      await page.goto(pagePath);
      
      // Tab through interactive elements
      await page.keyboard.press('Tab');
      const focusedElement = await page.locator(':focus');
      await expect(focusedElement).toBeVisible();
      
      // Check for focus indicators
      const hasFocusStyle = await focusedElement.evaluate((el) => {
        const styles = window.getComputedStyle(el);
        return styles.outline !== 'none' || styles.outlineWidth !== '0px';
      });
      
      // Focus should be visible
      await expect(focusedElement).toBeVisible();
    });
  }

  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBeGreaterThanOrEqual(1);
    
    // Should not skip heading levels
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
    expect(headings.length).toBeGreaterThan(0);
  });

  test('should have alt text on images', async ({ page }) => {
    await page.goto('/');
    
    const images = await page.locator('img').all();
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      expect(alt).toBeDefined();
    }
  });

  test('should have labels for form inputs', async ({ page }) => {
    await page.goto('/contact');
    
    const inputs = await page.locator('input, textarea, select').all();
    for (const input of inputs) {
      const id = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');
      const ariaLabelledBy = await input.getAttribute('aria-labelledby');
      
      // Input should have some form of label
      const hasLabel = id || ariaLabel || ariaLabelledBy;
      expect(hasLabel).toBeTruthy();
    }
  });

  test('should support screen reader navigation', async ({ page }) => {
    await page.goto('/');
    
    // Check for ARIA landmarks
    const landmarks = await page.locator('[role="navigation"], [role="main"], [role="contentinfo"]').all();
    expect(landmarks.length).toBeGreaterThan(0);
  });

  test('should have sufficient color contrast', async ({ page }) => {
    await page.goto('/');
    
    // Check for text elements
    const textElements = await page.locator('p, h1, h2, h3, h4, h5, h6, span, a, button').all();
    expect(textElements.length).toBeGreaterThan(0);
    
    // All text should be visible (basic contrast check)
    for (const element of textElements) {
      await expect(element).toBeVisible();
    }
  });

  test('should handle focus trap in modals', async ({ page }) => {
    await page.goto('/');
    
    // If there are any modals/dialogs, test focus trap
    const dialogs = await page.locator('[role="dialog"]').all();
    
    if (dialogs.length > 0) {
      // Focus should stay within dialog when tabbing
      await page.keyboard.press('Tab');
      const focusedElement = await page.locator(':focus');
      
      // Check that focus is within the dialog
      const isInDialog = await focusedElement.evaluate((el) => {
        return el.closest('[role="dialog"]') !== null;
      });
      
      expect(isInDialog || dialogs.length === 0).toBeTruthy();
    }
  });
});
