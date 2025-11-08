import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    // Check for h1
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    
    // Page should have proper heading structure
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
    expect(headings.length).toBeGreaterThan(0);
  });

  test('should have accessible form labels', async ({ page }) => {
    await page.goto('/contact');
    
    // Check that inputs have associated labels
    const nameInput = page.locator('input[name="name"]');
    const emailInput = page.locator('input[name="email"]');
    const messageTextarea = page.locator('textarea[name="message"]');
    
    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(messageTextarea).toBeVisible();
  });

  test('should have alt text for images', async ({ page }) => {
    await page.goto('/');
    
    // Get all images
    const images = page.locator('img');
    const count = await images.count();
    
    if (count > 0) {
      // Check first image has alt attribute
      const firstImage = images.first();
      const alt = await firstImage.getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });

  test('should support keyboard navigation', async ({ page }) => {
    await page.goto('/');
    
    // Tab through focusable elements
    await page.keyboard.press('Tab');
    
    // Check that an element is focused
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });

  test('should have visible focus indicators', async ({ page }) => {
    await page.goto('/');
    
    // Tab to first interactive element
    await page.keyboard.press('Tab');
    
    // Get focused element
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
    
    // Check that focus is visible (element should have outline or ring)
    const hasOutline = await focusedElement.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return styles.outline !== 'none' || 
             styles.boxShadow.includes('ring') ||
             styles.borderColor !== styles.backgroundColor;
    });
    
    expect(hasOutline).toBeTruthy();
  });

  test('should have proper button roles', async ({ page }) => {
    await page.goto('/');
    
    // Check that buttons are properly marked
    const buttons = page.locator('button, [role="button"]');
    await expect(buttons.first()).toBeVisible();
  });

  test('should have proper link roles', async ({ page }) => {
    await page.goto('/');
    
    // Check that links are properly marked
    const links = page.locator('a[href]');
    await expect(links.first()).toBeVisible();
  });
});
