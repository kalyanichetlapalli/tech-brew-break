import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../utils/test-utils';
import Navigation from '@/components/Navigation';
import { BrowserRouter } from 'react-router-dom';

describe('Navigation Component', () => {
  it('should render all navigation links', () => {
    render(<Navigation />);
    
    expect(screen.getByText('CodeBrew')).toBeInTheDocument();
    expect(screen.getByText('Puzzles')).toBeInTheDocument();
    expect(screen.getByText('Games')).toBeInTheDocument();
    expect(screen.getByText('Brainstorm')).toBeInTheDocument();
    expect(screen.getByText('Learn')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('should have correct href attributes', () => {
    render(<Navigation />);
    
    expect(screen.getByText('Puzzles').closest('a')).toHaveAttribute('href', '/puzzles');
    expect(screen.getByText('Games').closest('a')).toHaveAttribute('href', '/games');
    expect(screen.getByText('Brainstorm').closest('a')).toHaveAttribute('href', '/brainstorm');
    expect(screen.getByText('Learn').closest('a')).toHaveAttribute('href', '/learn');
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '/contact');
  });

  it('should render logo with correct link', () => {
    render(<Navigation />);
    
    const logo = screen.getByText('CodeBrew');
    expect(logo.closest('a')).toHaveAttribute('href', '/');
  });

  it('should be responsive', () => {
    const { container } = render(<Navigation />);
    
    // Check for responsive classes
    const nav = container.querySelector('nav');
    expect(nav).toHaveClass('border-b');
  });
});
