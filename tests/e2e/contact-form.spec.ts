import { test, expect } from '@playwright/test';

test.describe('Contact Form E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should submit contact form successfully', async ({ page }) => {
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[type="email"]', 'john@example.com');
    await page.fill('textarea[name="message"]', 'This is a test message');
    
    await page.click('button[type="submit"]');
    
    // Wait for success message
    await expect(page.locator('text=/thank you|success/i')).toBeVisible({ timeout: 5000 });
  });

  test('should validate required fields', async ({ page }) => {
    await page.click('button[type="submit"]');
    
    // Check for HTML5 validation
    const nameInput = page.locator('input[name="name"]');
    const isInvalid = await nameInput.evaluate((el: HTMLInputElement) => !el.validity.valid);
    expect(isInvalid).toBeTruthy();
  });

  test('should validate email format', async ({ page }) => {
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[type="email"]', 'invalid-email');
    await page.fill('textarea[name="message"]', 'Test message');
    
    const emailInput = page.locator('input[type="email"]');
    const isInvalid = await emailInput.evaluate((el: HTMLInputElement) => !el.validity.valid);
    expect(isInvalid).toBeTruthy();
  });

  test('should clear form after successful submission', async ({ page }) => {
    await page.fill('input[name="name"]', 'Jane Smith');
    await page.fill('input[type="email"]', 'jane@example.com');
    await page.fill('textarea[name="message"]', 'Another test message');
    
    await page.click('button[type="submit"]');
    
    // Wait for submission to complete
    await page.waitForTimeout(2000);
    
    // Check if form is cleared
    await expect(page.locator('input[name="name"]')).toHaveValue('');
    await expect(page.locator('input[type="email"]')).toHaveValue('');
    await expect(page.locator('textarea[name="message"]')).toHaveValue('');
  });

  test('should handle special characters in message', async ({ page }) => {
    const specialMessage = '<script>alert("XSS")</script> & special chars: @#$%';
    
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[type="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', specialMessage);
    
    await page.click('button[type="submit"]');
    
    // Should handle without errors
    await expect(page.locator('text=/thank you|success/i')).toBeVisible({ timeout: 5000 });
  });

  test('should handle very long messages', async ({ page }) => {
    const longMessage = 'a'.repeat(5000);
    
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[type="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', longMessage);
    
    await page.click('button[type="submit"]');
    
    await expect(page.locator('text=/thank you|success/i')).toBeVisible({ timeout: 5000 });
  });

  test('should disable submit button during submission', async ({ page }) => {
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[type="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'Test message');
    
    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();
    
    // Check if button is disabled
    await expect(submitButton).toBeDisabled();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });
});
