import { describe, it, expect } from 'vitest';
import { render, screen } from '../utils/test-utils';
import About from '@/pages/About';

describe('About Page', () => {
  it('should render page title', () => {
    render(<About />);
    
    expect(screen.getByText('About CodeBrew')).toBeInTheDocument();
  });

  it('should render mission section', () => {
    render(<About />);
    
    expect(screen.getByText(/our mission/i)).toBeInTheDocument();
  });

  it('should render values section', () => {
    render(<About />);
    
    expect(screen.getByText(/Refreshing/i)).toBeInTheDocument();
    expect(screen.getByText(/Accessible/i)).toBeInTheDocument();
    expect(screen.getByText(/Engaging/i)).toBeInTheDocument();
  });

  it('should render story section', () => {
    render(<About />);
    
    expect(screen.getByText(/our story/i)).toBeInTheDocument();
  });

  it('should render team section', () => {
    render(<About />);
    
    expect(screen.getByText(/the team/i)).toBeInTheDocument();
  });

  it('should display value descriptions', () => {
    render(<About />);
    
    // Check that each value has descriptive content
    const refreshing = screen.getByText(/Refreshing/i).closest('div');
    const accessible = screen.getByText(/Accessible/i).closest('div');
    const engaging = screen.getByText(/Engaging/i).closest('div');
    
    expect(refreshing).toBeInTheDocument();
    expect(accessible).toBeInTheDocument();
    expect(engaging).toBeInTheDocument();
  });

  it('should have proper semantic structure', () => {
    const { container } = render(<About />);
    
    const mainHeading = container.querySelector('h1');
    expect(mainHeading).toBeInTheDocument();
  });
});
