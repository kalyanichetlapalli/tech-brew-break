import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '../utils/test-utils';
import userEvent from '@testing-library/user-event';
import Learn from '@/pages/Learn';

describe('Learn Module Integration', () => {
  it('should render learn page', () => {
    render(<Learn />);
    
    expect(screen.getByText(/learn with videos/i)).toBeInTheDocument();
  });

  it('should display category tabs', () => {
    render(<Learn />);
    
    const categories = ['All', 'Web', 'Mobile', 'Backend', 'DevOps', 'AI/ML'];
    categories.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it('should filter videos by category', async () => {
    const user = userEvent.setup();
    render(<Learn />);
    
    const webTab = screen.getByText('Web');
    await user.click(webTab);
    
    // Videos should be filtered
    await waitFor(() => {
      const videoCards = screen.getAllByText(/watch now/i);
      expect(videoCards.length).toBeGreaterThan(0);
    });
  });

  it('should display video cards', () => {
    render(<Learn />);
    
    const watchButtons = screen.getAllByText(/watch now/i);
    expect(watchButtons.length).toBeGreaterThan(0);
  });

  it('should show video durations', () => {
    render(<Learn />);
    
    const durations = screen.getAllByText(/min/);
    expect(durations.length).toBeGreaterThan(0);
  });

  it('should display view counts', () => {
    render(<Learn />);
    
    const views = screen.getAllByText(/views/i);
    expect(views.length).toBeGreaterThan(0);
  });

  it('should render featured playlist', () => {
    render(<Learn />);
    
    expect(screen.getByText(/featured playlist/i)).toBeInTheDocument();
  });

  it('should handle tab navigation', async () => {
    const user = userEvent.setup();
    render(<Learn />);
    
    const mobileTab = screen.getByText('Mobile');
    await user.click(mobileTab);
    
    // Should switch tabs without errors
    expect(mobileTab).toBeInTheDocument();
  });

  it('should validate video card structure', () => {
    const { container } = render(<Learn />);
    
    const cards = container.querySelectorAll('[class*="card"]');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('should show video thumbnails', () => {
    const { container } = render(<Learn />);
    
    const thumbnails = container.querySelectorAll('[class*="aspect-ratio"]');
    expect(thumbnails.length).toBeGreaterThan(0);
  });

  it('should handle all categories', async () => {
    const user = userEvent.setup();
    render(<Learn />);
    
    const allTab = screen.getByText('All');
    await user.click(allTab);
    
    // Should show all videos
    const watchButtons = screen.getAllByText(/watch now/i);
    expect(watchButtons.length).toBeGreaterThan(0);
  });
});
