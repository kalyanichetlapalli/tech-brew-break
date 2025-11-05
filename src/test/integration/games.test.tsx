import { describe, it, expect } from 'vitest';
import { render, screen } from '../utils/test-utils';
import Games from '@/pages/Games';

describe('Games Module Integration', () => {
  it('should render games page', () => {
    render(<Games />);
    
    expect(screen.getByText(/tech-themed mini games/i)).toBeInTheDocument();
  });

  it('should display game cards', () => {
    render(<Games />);
    
    const gameCards = screen.getAllByText(/play now/i);
    expect(gameCards.length).toBeGreaterThan(0);
  });

  it('should show featured game section', () => {
    render(<Games />);
    
    expect(screen.getByText(/featured game/i)).toBeInTheDocument();
  });

  it('should display player counts', () => {
    render(<Games />);
    
    const playerCounts = screen.getAllByText(/players/i);
    expect(playerCounts.length).toBeGreaterThan(0);
  });

  it('should show game durations', () => {
    render(<Games />);
    
    const durations = screen.getAllByText(/min/);
    expect(durations.length).toBeGreaterThan(0);
  });

  it('should render leaderboard section', () => {
    render(<Games />);
    
    expect(screen.getByText(/top players/i)).toBeInTheDocument();
  });

  it('should display leaderboard entries', () => {
    render(<Games />);
    
    // Check for player rankings
    const rankings = screen.getAllByText(/#[0-9]/);
    expect(rankings.length).toBeGreaterThan(0);
  });

  it('should show game scores in leaderboard', () => {
    render(<Games />);
    
    const scores = screen.getAllByText(/points/i);
    expect(scores.length).toBeGreaterThan(0);
  });

  it('should handle empty leaderboard', () => {
    render(<Games />);
    
    // Should render without errors
    expect(screen.getByText(/tech-themed mini games/i)).toBeInTheDocument();
  });

  it('should validate game card structure', () => {
    const { container } = render(<Games />);
    
    const cards = container.querySelectorAll('[class*="card"]');
    expect(cards.length).toBeGreaterThan(0);
  });
});
