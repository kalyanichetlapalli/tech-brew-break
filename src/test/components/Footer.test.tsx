import { describe, it, expect } from 'vitest';
import { render, screen } from '../utils/test-utils';
import Footer from '@/components/Footer';

describe('Footer Component', () => {
  it('should render copyright text', () => {
    render(<Footer />);
    
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${currentYear}.*CodeBrew`))).toBeInTheDocument();
  });

  it('should render footer links', () => {
    render(<Footer />);
    
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('should have correct link hrefs', () => {
    render(<Footer />);
    
    const aboutLink = screen.getByText('About').closest('a');
    const contactLink = screen.getByText('Contact').closest('a');
    
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('should render social media message', () => {
    render(<Footer />);
    
    expect(screen.getByText(/Follow us on social media/i)).toBeInTheDocument();
  });
});
