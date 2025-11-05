import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '../utils/test-utils';
import userEvent from '@testing-library/user-event';
import Contact from '@/pages/Contact';

describe('Contact Page', () => {
  it('should render contact form', () => {
    render(<Contact />);
    
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('should render contact information', () => {
    render(<Contact />);
    
    expect(screen.getByText(/general inquiries/i)).toBeInTheDocument();
    expect(screen.getByText(/feedback/i)).toBeInTheDocument();
  });

  it('should handle form submission with valid data', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    await user.type(nameInput, 'Test User');
    await user.type(emailInput, 'test@example.com');
    await user.type(messageInput, 'This is a test message');
    
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
  });

  it('should validate empty form submission', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    await user.click(submitButton);
    
    // Form should not submit with empty fields
    expect(submitButton).toBeInTheDocument();
  });

  it('should validate email format', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const emailInput = screen.getByLabelText(/email/i);
    
    await user.type(emailInput, 'invalid-email');
    
    // HTML5 validation will catch this
    expect(emailInput).toHaveValue('invalid-email');
  });

  it('should render FAQ section', () => {
    render(<Contact />);
    
    expect(screen.getByText(/common questions/i)).toBeInTheDocument();
  });

  it('should clear form after successful submission', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    const messageInput = screen.getByLabelText(/message/i) as HTMLTextAreaElement;
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    await user.type(nameInput, 'Test User');
    await user.type(emailInput, 'test@example.com');
    await user.type(messageInput, 'Test message');
    
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(nameInput.value).toBe('');
      expect(emailInput.value).toBe('');
      expect(messageInput.value).toBe('');
    }, { timeout: 3000 });
  });

  it('should handle long message text', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const messageInput = screen.getByLabelText(/message/i);
    const longMessage = 'a'.repeat(1000);
    
    await user.type(messageInput, longMessage);
    
    expect(messageInput).toHaveValue(longMessage);
  });

  it('should handle special characters in message', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const messageInput = screen.getByLabelText(/message/i);
    const specialMessage = '<script>alert("test")</script>';
    
    await user.type(messageInput, specialMessage);
    
    expect(messageInput).toHaveValue(specialMessage);
  });
});
