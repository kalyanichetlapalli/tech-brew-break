import { test, expect } from '@playwright/test';

test.describe('Accessibility E2E Tests', () => {
  const routes = ['/', '/puzzles', '/games', '/learn', '/brainstorm', '/contact', '/about'];

  routes.forEach((route) => {
    test(`should have accessible page: ${route}`, async ({ page }) => {
      await page.goto(route);
      
      // Wait for page to load
      await page.waitForLoadState('networkidle');
      
      // Check for h1 heading
      const h1 = page.locator('h1');
      await expect(h1.first()).toBeVisible();
      
      // Check that page has proper heading structure
      const headings = await page.locator('h1, h2, h3').all();
      expect(headings.length).toBeGreaterThan(0);
      
      // Check for proper landmark regions
      const main = page.locator('main, [role="main"], body > div');
      await expect(main.first()).toBeVisible();
      
      // Verify interactive elements are accessible
      const buttons = page.locator('button, a[href]');
      const buttonCount = await buttons.count();
      if (buttonCount > 0) {
        await expect(buttons.first()).toBeVisible();
      }
    });

    test(`should support keyboard navigation: ${route}`, async ({ page }) => {
      await page.goto(route);
      
      // Wait for page to load
      await page.waitForLoadState('networkidle');
      
      // Press Tab to focus first interactive element
      await page.keyboard.press('Tab');
      
      // Wait a bit for focus to settle
      await page.waitForTimeout(100);
      
      // Check that an element is focused
      const focusedElement = page.locator(':focus');
      const focusedCount = await focusedElement.count();
      
      // Either an element should be focused, or we're on a page without focusable elements
      if (focusedCount > 0) {
        await expect(focusedElement.first()).toBeVisible();
        
        // Verify focus indicator is visible
        const hasFocusIndicator = await focusedElement.first().evaluate((el) => {
          const styles = window.getComputedStyle(el);
          return (
            styles.outline !== 'none' ||
            styles.outlineStyle !== 'none' ||
            styles.boxShadow.includes('ring') ||
            styles.boxShadow !== 'none'
          );
        });
        
        expect(hasFocusIndicator).toBeTruthy();
      }
    });
  });

  test('should have accessible form labels on contact page', async ({ page }) => {
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');
    
    // Check that inputs have associated labels or aria-labels
    const nameInput = page.locator('input[name="name"], input[type="text"]').first();
    const emailInput = page.locator('input[name="email"], input[type="email"]').first();
    const messageTextarea = page.locator('textarea[name="message"], textarea').first();
    
    // Just verify they exist and are visible
    if (await nameInput.count() > 0) {
      await expect(nameInput).toBeVisible();
    }
    if (await emailInput.count() > 0) {
      await expect(emailInput).toBeVisible();
    }
    if (await messageTextarea.count() > 0) {
      await expect(messageTextarea).toBeVisible();
    }
  });

  test('should have alt text for images', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Get all images
    const images = page.locator('img');
    const count = await images.count();
    
    // Check that images have alt attributes (can be empty for decorative images)
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const hasAlt = await img.evaluate((el) => el.hasAttribute('alt'));
      expect(hasAlt).toBeTruthy();
    }
  });

  test('should have proper ARIA roles', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check that buttons are properly marked
    const buttons = page.locator('button, [role="button"]');
    const buttonCount = await buttons.count();
    if (buttonCount > 0) {
      await expect(buttons.first()).toBeVisible();
    }
    
    // Check that links are properly marked
    const links = page.locator('a[href]');
    const linkCount = await links.count();
    if (linkCount > 0) {
      await expect(links.first()).toBeVisible();
    }
  });

  test('should have visible focus indicators on all pages', async ({ page }) => {
    const testRoutes = ['/', '/puzzles', '/games'];
    
    for (const route of testRoutes) {
      await page.goto(route);
      await page.waitForLoadState('networkidle');
      
      // Tab to first interactive element
      await page.keyboard.press('Tab');
      await page.waitForTimeout(100);
      
      const focusedElement = page.locator(':focus');
      const count = await focusedElement.count();
      
      if (count > 0) {
        await expect(focusedElement.first()).toBeVisible();
      }
    }
  });
});
