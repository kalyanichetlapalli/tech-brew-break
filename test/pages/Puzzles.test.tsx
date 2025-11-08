import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Puzzles from '@/pages/Puzzles';

const renderPuzzles = () => {
  return render(
    <BrowserRouter>
      <Puzzles />
    </BrowserRouter>
  );
};

describe('Puzzles Page', () => {
  it('renders the page title', () => {
    renderPuzzles();
    expect(screen.getByText(/code puzzles/i)).toBeInTheDocument();
  });

  it('renders difficulty filter buttons', () => {
    renderPuzzles();
    expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /easy/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /medium/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /hard/i })).toBeInTheDocument();
  });

  it('displays puzzle cards', () => {
    renderPuzzles();
    const cards = screen.getAllByRole('article');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('renders solve buttons for puzzles', () => {
    renderPuzzles();
    const solveButtons = screen.getAllByRole('link', { name: /solve/i });
    expect(solveButtons.length).toBeGreaterThan(0);
  });

  it('uses semantic HTML structure', () => {
    const { container } = renderPuzzles();
    expect(container.querySelector('main')).toBeInTheDocument();
  });
});
