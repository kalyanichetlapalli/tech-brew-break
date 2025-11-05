import { test, expect } from '@playwright/test';

test.describe('Complete User Flow E2E Tests', () => {
  test('should complete full user journey', async ({ page }) => {
    // Start at home page
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
    
    // Navigate to puzzles
    await page.click('text=Start Puzzling');
    await expect(page).toHaveURL(/.*puzzles/);
    
    // View a puzzle
    const tryNowButton = page.locator('text=Try Now').first();
    await expect(tryNowButton).toBeVisible();
    
    // Navigate to games
    await page.click('text=Games');
    await expect(page).toHaveURL(/.*games/);
    
    // Check leaderboard
    await expect(page.locator('text=/top players/i')).toBeVisible();
    
    // Navigate to learn section
    await page.click('text=Learn');
    await expect(page).toHaveURL(/.*learn/);
    
    // Filter by category
    await page.click('text=Web');
    await expect(page.locator('text=Watch Now').first()).toBeVisible();
    
    // Navigate to brainstorm
    await page.click('text=Brainstorm');
    await expect(page).toHaveURL(/.*brainstorm/);
    
    // View challenge hints
    const viewHintsButton = page.locator('text=View Hints').first();
    await expect(viewHintsButton).toBeVisible();
    
    // Navigate to contact
    await page.click('text=Contact');
    await expect(page).toHaveURL(/.*contact/);
    
    // Submit contact form
    await page.fill('input[name="name"]', 'Journey User');
    await page.fill('input[type="email"]', 'journey@example.com');
    await page.fill('textarea[name="message"]', 'Completed full journey!');
    await page.click('button[type="submit"]');
    
    // Return to home
    await page.click('text=CodeBrew');
    await expect(page).toHaveURL('/');
  });

  test('should handle rapid navigation', async ({ page }) => {
    await page.goto('/');
    
    // Rapidly navigate between pages
    await page.click('text=Puzzles');
    await page.click('text=Games');
    await page.click('text=Learn');
    await page.click('text=About');
    await page.click('text=CodeBrew');
    
    // Should end up at home without errors
    await expect(page).toHaveURL('/');
  });

  test('should persist state during navigation', async ({ page }) => {
    await page.goto('/learn');
    
    // Select a category
    await page.click('text=Mobile');
    await expect(page.locator('[aria-selected="true"]')).toContainText('Mobile');
    
    // Navigate away
    await page.click('text=Puzzles');
    await expect(page).toHaveURL(/.*puzzles/);
    
    // Navigate back
    await page.click('text=Learn');
    await expect(page).toHaveURL(/.*learn/);
  });

  test('should handle browser back and forward', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Puzzles');
    await page.click('text=Games');
    
    // Use browser back
    await page.goBack();
    await expect(page).toHaveURL(/.*puzzles/);
    
    // Use browser forward
    await page.goForward();
    await expect(page).toHaveURL(/.*games/);
  });

  test('should work on different screen sizes', async ({ page }) => {
    const viewports = [
      { width: 375, height: 667 },   // Mobile
      { width: 768, height: 1024 },  // Tablet
      { width: 1920, height: 1080 }, // Desktop
    ];
    
    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await page.goto('/');
      
      await expect(page.locator('nav')).toBeVisible();
      await expect(page.locator('footer')).toBeVisible();
    }
  });
});
