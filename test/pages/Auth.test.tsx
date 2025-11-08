import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Auth from '@/pages/Auth';

vi.mock('@/contexts/AuthContext', () => ({
  useAuth: () => ({
    user: null,
    signIn: vi.fn(),
    signUp: vi.fn(),
    signOut: vi.fn(),
  }),
}));

const renderAuth = () => {
  return render(
    <BrowserRouter>
      <Auth />
    </BrowserRouter>
  );
};

describe('Auth Page', () => {
  it('renders the authentication form', () => {
    renderAuth();
    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('displays sign in tab by default', () => {
    renderAuth();
    expect(screen.getByRole('tab', { name: /sign in/i })).toBeInTheDocument();
  });

  it('displays sign up tab', () => {
    renderAuth();
    expect(screen.getByRole('tab', { name: /sign up/i })).toBeInTheDocument();
  });

  it('renders email and password inputs', () => {
    renderAuth();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('has a submit button', () => {
    renderAuth();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });
});
