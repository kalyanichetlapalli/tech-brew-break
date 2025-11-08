import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import About from '@/pages/About';

const renderAbout = () => {
  return render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
};

describe('About Page', () => {
  it('renders the page title', () => {
    renderAbout();
    expect(screen.getByText(/about codebrew/i)).toBeInTheDocument();
  });

  it('renders mission section', () => {
    renderAbout();
    expect(screen.getByText(/our mission/i)).toBeInTheDocument();
  });

  it('renders features section', () => {
    renderAbout();
    expect(screen.getByText(/what we offer/i)).toBeInTheDocument();
  });

  it('renders the page with proper semantic structure', () => {
    const { container } = renderAbout();
    expect(container.querySelector('main')).toBeInTheDocument();
  });

  it('displays content within container', () => {
    const { container } = renderAbout();
    expect(container.querySelector('.container')).toBeInTheDocument();
  });
});
