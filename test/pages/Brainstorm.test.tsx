import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Brainstorm from '@/pages/Brainstorm';

const renderBrainstorm = () => {
  return render(
    <BrowserRouter>
      <Brainstorm />
    </BrowserRouter>
  );
};

describe('Brainstorm Page', () => {
  it('renders the page title', () => {
    renderBrainstorm();
    expect(screen.getByText(/brainstorm/i)).toBeInTheDocument();
  });

  it('displays the page description', () => {
    renderBrainstorm();
    expect(screen.getByText(/share ideas/i)).toBeInTheDocument();
  });

  it('shows coming soon message', () => {
    renderBrainstorm();
    expect(screen.getByText(/coming soon/i)).toBeInTheDocument();
  });

  it('uses semantic HTML structure', () => {
    const { container } = renderBrainstorm();
    expect(container.querySelector('main')).toBeInTheDocument();
  });
});
