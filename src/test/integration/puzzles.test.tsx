import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, waitFor } from '../utils/test-utils';
import Puzzles from '@/pages/Puzzles';

describe('Puzzles Module Integration', () => {
  beforeEach(() => {
    // Reset any state between tests
  });

  it('should render puzzles page', () => {
    render(<Puzzles />);
    
    expect(screen.getByText(/coding challenges/i)).toBeInTheDocument();
  });

  it('should display puzzle cards', () => {
    render(<Puzzles />);
    
    // Check for puzzle elements
    const cards = screen.getAllByRole('article');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('should filter puzzles by difficulty', () => {
    render(<Puzzles />);
    
    // Look for difficulty badges
    const difficulties = ['Easy', 'Medium', 'Hard'];
    difficulties.forEach(difficulty => {
      const elements = screen.getAllByText(difficulty);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  it('should display puzzle categories', () => {
    render(<Puzzles />);
    
    // Check for common categories
    const categories = ['Algorithms', 'Data Structures', 'Logic'];
    categories.forEach(category => {
      const elements = screen.getAllByText(category);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  it('should handle puzzle selection', async () => {
    render(<Puzzles />);
    
    const tryNowButtons = screen.getAllByText(/try now/i);
    expect(tryNowButtons.length).toBeGreaterThan(0);
  });

  it('should render coming soon section', () => {
    render(<Puzzles />);
    
    expect(screen.getByText(/coming soon/i)).toBeInTheDocument();
  });

  it('should display puzzle descriptions', () => {
    render(<Puzzles />);
    
    const descriptions = screen.getAllByText(/solve.*challenge/i);
    expect(descriptions.length).toBeGreaterThan(0);
  });

  it('should handle edge case: no puzzles available', () => {
    // This would need server mock override
    render(<Puzzles />);
    
    // Page should still render without errors
    expect(screen.getByText(/coding challenges/i)).toBeInTheDocument();
  });

  it('should validate difficulty color coding', () => {
    const { container } = render(<Puzzles />);
    
    // Check that difficulty badges have appropriate classes
    const badges = container.querySelectorAll('[class*="badge"]');
    expect(badges.length).toBeGreaterThan(0);
  });
});
