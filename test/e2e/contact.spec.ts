import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test('should display contact form', async ({ page }) => {
    await page.goto('/contact');
    
    await expect(page.locator('h1')).toContainText('Get in Touch');
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('should submit contact form successfully', async ({ page }) => {
    await page.goto('/contact');
    
    // Fill out form
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'john@example.com');
    await page.fill('textarea[name="message"]', 'This is a test message');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Wait for success message
    await page.waitForTimeout(2000);
    
    // Check if form was cleared (success indicator)
    await expect(page.locator('input[name="name"]')).toHaveValue('');
  });

  test('should show validation for empty fields', async ({ page }) => {
    await page.goto('/contact');
    
    // Try to submit empty form
    await page.click('button[type="submit"]');
    
    // Check HTML5 validation
    const nameInput = page.locator('input[name="name"]');
    await expect(nameInput).toBeFocused();
  });

  test('should validate email format', async ({ page }) => {
    await page.goto('/contact');
    
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'invalid-email');
    await page.fill('textarea[name="message"]', 'Test message');
    
    await page.click('button[type="submit"]');
    
    // Email input should be focused due to validation
    const emailInput = page.locator('input[name="email"]');
    await expect(emailInput).toBeFocused();
  });

  test('should display contact information', async ({ page }) => {
    await page.goto('/contact');
    
    // Check for contact details
    await expect(page.locator('text=General Inquiries')).toBeVisible();
    await expect(page.locator('text=hello@techbrewer.dev')).toBeVisible();
    await expect(page.locator('text=Feedback')).toBeVisible();
    await expect(page.locator('text=feedback@techbrewer.dev')).toBeVisible();
  });

  test('should display FAQ section', async ({ page }) => {
    await page.goto('/contact');
    
    await expect(page.locator('text=Common Questions')).toBeVisible();
    await expect(page.locator('text=How do I get started?')).toBeVisible();
    await expect(page.locator('text=Are the puzzles free?')).toBeVisible();
  });

  test('should disable submit button during submission', async ({ page }) => {
    await page.goto('/contact');
    
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'john@example.com');
    await page.fill('textarea[name="message"]', 'Test message');
    
    // Click submit
    await page.click('button[type="submit"]');
    
    // Button should be disabled during submission
    const submitButton = page.locator('button[type="submit"]');
    await expect(submitButton).toBeDisabled();
  });
});
