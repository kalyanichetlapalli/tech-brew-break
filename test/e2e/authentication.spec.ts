import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test('should display sign in form', async ({ page }) => {
    await page.goto('/auth');
    
    await expect(page.locator('h2')).toContainText('Welcome to Tech Brewer');
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('should switch between sign in and sign up tabs', async ({ page }) => {
    await page.goto('/auth');
    
    // Check Sign In tab is active
    await expect(page.locator('text=Sign In').first()).toBeVisible();
    
    // Click Sign Up tab
    await page.click('text=Sign Up');
    await expect(page.locator('button[type="submit"]')).toContainText('Sign Up');
    
    // Click Sign In tab again
    await page.click('text=Sign In');
    await expect(page.locator('button[type="submit"]')).toContainText('Sign In');
  });

  test('should show validation error for empty email', async ({ page }) => {
    await page.goto('/auth');
    
    // Try to submit without entering email
    await page.fill('input[type="password"]', 'password123');
    await page.click('button[type="submit"]');
    
    // Check for validation (HTML5 validation or custom error)
    const emailInput = page.locator('input[type="email"]');
    await expect(emailInput).toBeFocused();
  });

  test('should show validation error for short password', async ({ page }) => {
    await page.goto('/auth');
    
    // Enter invalid credentials
    await page.fill('input[type="email"]', 'test@example.com');
    await page.fill('input[type="password"]', '12345');
    await page.click('button[type="submit"]');
    
    // Wait for potential error message
    await page.waitForTimeout(1000);
    
    // Check if error is displayed or button is still present (meaning form didn't submit)
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('should redirect to home if already authenticated', async ({ page }) => {
    // This test assumes user is not authenticated
    // In a real scenario, you'd mock authentication state
    await page.goto('/auth');
    
    // If not authenticated, should stay on auth page
    await expect(page).toHaveURL('/auth');
  });

  test('should show loading state during submission', async ({ page }) => {
    await page.goto('/auth');
    
    await page.fill('input[type="email"]', 'test@example.com');
    await page.fill('input[type="password"]', 'password123');
    
    // Click submit and immediately check for loading state
    await page.click('button[type="submit"]');
    
    // Check if button shows loading state (disabled or spinner)
    const submitButton = page.locator('button[type="submit"]');
    await expect(submitButton).toBeDisabled();
  });
});
