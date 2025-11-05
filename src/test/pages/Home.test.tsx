import { describe, it, expect } from 'vitest';
import { render, screen } from '../utils/test-utils';
import Home from '@/pages/Home';

describe('Home Page', () => {
  it('should render hero section', () => {
    render(<Home />);
    
    expect(screen.getByText(/Take a Break/i)).toBeInTheDocument();
    expect(screen.getByText(/Level Up Your Skills/i)).toBeInTheDocument();
  });

  it('should render call-to-action buttons', () => {
    render(<Home />);
    
    expect(screen.getByText('Start Puzzling')).toBeInTheDocument();
    expect(screen.getByText('Play Games')).toBeInTheDocument();
  });

  it('should render puzzle of the day section', () => {
    render(<Home />);
    
    expect(screen.getByText(/Puzzle of the Day/i)).toBeInTheDocument();
    expect(screen.getByText('Solve Now')).toBeInTheDocument();
  });

  it('should render features grid', () => {
    render(<Home />);
    
    expect(screen.getByText('Puzzles')).toBeInTheDocument();
    expect(screen.getByText('Tech Games')).toBeInTheDocument();
    expect(screen.getByText('Brainstorm')).toBeInTheDocument();
    expect(screen.getByText('Learn Concepts')).toBeInTheDocument();
  });

  it('should have correct navigation links in features', () => {
    render(<Home />);
    
    const puzzlesCard = screen.getByText('Puzzles').closest('a');
    const gamesCard = screen.getByText('Tech Games').closest('a');
    
    expect(puzzlesCard).toHaveAttribute('href', '/puzzles');
    expect(gamesCard).toHaveAttribute('href', '/games');
  });

  it('should render inspirational quote', () => {
    render(<Home />);
    
    expect(screen.getByText(/programming/i)).toBeInTheDocument();
  });

  it('should display code snippet in puzzle of the day', () => {
    const { container } = render(<Home />);
    
    const codeBlock = container.querySelector('code');
    expect(codeBlock).toBeInTheDocument();
  });
});
