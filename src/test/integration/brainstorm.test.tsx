import { describe, it, expect } from 'vitest';
import { render, screen } from '../utils/test-utils';
import Brainstorm from '@/pages/Brainstorm';

describe('Brainstorm Module Integration', () => {
  it('should render brainstorm page', () => {
    render(<Brainstorm />);
    
    expect(screen.getByText(/creative thinking challenges/i)).toBeInTheDocument();
  });

  it('should display featured challenge', () => {
    render(<Brainstorm />);
    
    expect(screen.getByText(/featured challenge/i)).toBeInTheDocument();
  });

  it('should show challenge cards', () => {
    render(<Brainstorm />);
    
    const startButtons = screen.getAllByText(/start brainstorming/i);
    expect(startButtons.length).toBeGreaterThan(0);
  });

  it('should display challenge categories', () => {
    render(<Brainstorm />);
    
    const categories = screen.getAllByText(/innovation|problem-solving|creative thinking/i);
    expect(categories.length).toBeGreaterThan(0);
  });

  it('should show challenge hints', () => {
    render(<Brainstorm />);
    
    const hintButtons = screen.getAllByText(/view hints/i);
    expect(hintButtons.length).toBeGreaterThan(0);
  });

  it('should render how it works section', () => {
    render(<Brainstorm />);
    
    expect(screen.getByText(/how brainstorming works/i)).toBeInTheDocument();
  });

  it('should display step-by-step instructions', () => {
    render(<Brainstorm />);
    
    // Check for numbered steps
    const steps = screen.getAllByText(/choose|think|share/i);
    expect(steps.length).toBeGreaterThan(0);
  });

  it('should handle challenge interaction', () => {
    render(<Brainstorm />);
    
    const startButtons = screen.getAllByText(/start brainstorming/i);
    expect(startButtons[0]).toBeInTheDocument();
  });

  it('should validate challenge card structure', () => {
    const { container } = render(<Brainstorm />);
    
    const cards = container.querySelectorAll('[class*="card"]');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('should show challenge descriptions', () => {
    render(<Brainstorm />);
    
    const descriptions = screen.getAllByText(/what if/i);
    expect(descriptions.length).toBeGreaterThan(0);
  });
});
