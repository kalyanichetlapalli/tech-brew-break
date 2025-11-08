import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '@/pages/NotFound';

const renderNotFound = () => {
  return render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
};

describe('NotFound Page', () => {
  it('renders 404 message', () => {
    renderNotFound();
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });

  it('displays page not found text', () => {
    renderNotFound();
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });

  it('shows link to home page', () => {
    renderNotFound();
    const homeLink = screen.getByRole('link', { name: /go home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('uses proper semantic structure', () => {
    const { container } = renderNotFound();
    expect(container.querySelector('main')).toBeInTheDocument();
  });
});
