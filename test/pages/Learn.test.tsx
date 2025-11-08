import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Learn from '@/pages/Learn';

const renderLearn = () => {
  return render(
    <BrowserRouter>
      <Learn />
    </BrowserRouter>
  );
};

describe('Learn Page', () => {
  it('renders the page title', () => {
    renderLearn();
    expect(screen.getByText(/learn concepts/i)).toBeInTheDocument();
  });

  it('displays category cards', () => {
    renderLearn();
    const cards = screen.getAllByRole('article');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('shows coming soon message', () => {
    renderLearn();
    expect(screen.getByText(/coming soon/i)).toBeInTheDocument();
  });

  it('renders with proper semantic HTML', () => {
    const { container } = renderLearn();
    expect(container.querySelector('main')).toBeInTheDocument();
  });
});
