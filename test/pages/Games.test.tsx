import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Games from '@/pages/Games';

const renderGames = () => {
  return render(
    <BrowserRouter>
      <Games />
    </BrowserRouter>
  );
};

describe('Games Page', () => {
  it('renders the page title', () => {
    renderGames();
    expect(screen.getByText(/tech games/i)).toBeInTheDocument();
  });

  it('displays game cards', () => {
    renderGames();
    const cards = screen.getAllByRole('article');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('renders play buttons for games', () => {
    renderGames();
    const playButtons = screen.getAllByRole('button', { name: /play/i });
    expect(playButtons.length).toBeGreaterThan(0);
  });

  it('shows game descriptions', () => {
    renderGames();
    expect(screen.getByText(/coming soon/i)).toBeInTheDocument();
  });

  it('uses proper semantic structure', () => {
    const { container } = renderGames();
    expect(container.querySelector('main')).toBeInTheDocument();
  });
});
