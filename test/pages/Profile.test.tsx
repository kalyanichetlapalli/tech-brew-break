import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Profile from '@/pages/Profile';

vi.mock('@/contexts/AuthContext', () => ({
  useAuth: () => ({
    user: {
      id: '123',
      email: 'test@example.com',
      user_metadata: { full_name: 'Test User' },
      email_confirmed_at: '2024-01-01',
    },
    signOut: vi.fn(),
  }),
}));

const renderProfile = () => {
  return render(
    <BrowserRouter>
      <Profile />
    </BrowserRouter>
  );
};

describe('Profile Page', () => {
  it('renders the page title', () => {
    renderProfile();
    expect(screen.getByText(/your profile/i)).toBeInTheDocument();
  });

  it('displays user profile component', () => {
    renderProfile();
    expect(screen.getByText(/test@example.com/i)).toBeInTheDocument();
  });

  it('shows sign out button', () => {
    renderProfile();
    expect(screen.getByRole('button', { name: /sign out/i })).toBeInTheDocument();
  });

  it('uses semantic HTML structure', () => {
    const { container } = renderProfile();
    expect(container.querySelector('main')).toBeInTheDocument();
  });
});
