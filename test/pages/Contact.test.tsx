import { render, screen, waitFor } from "../utils/test-utils";
import Contact from "@/pages/Contact";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Contact Page Edge Cases", () => {
  it("should render contact form", () => {
    render(<Contact />);
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("should require all form fields", () => {
    render(<Contact />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    
    expect(nameInput).toBeRequired();
    expect(emailInput).toBeRequired();
    expect(messageInput).toBeRequired();
  });

  it("should validate email format", () => {
    render(<Contact />);
    
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveAttribute("type", "email");
  });

  it("should handle form submission with valid data", async () => {
    render(<Contact />);
    const user = userEvent.setup();
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole("button", { name: /send message/i });
    
    await user.type(nameInput, "John Doe");
    await user.type(emailInput, "john@example.com");
    await user.type(messageInput, "This is a test message");
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/message sent!/i)).toBeInTheDocument();
    });
  });

  it("should show loading state during submission", async () => {
    render(<Contact />);
    const user = userEvent.setup();
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole("button", { name: /send message/i });
    
    await user.type(nameInput, "John Doe");
    await user.type(emailInput, "john@example.com");
    await user.type(messageInput, "This is a test message");
    await user.click(submitButton);
    
    expect(submitButton).toBeDisabled();
    expect(screen.getByText(/sending/i)).toBeInTheDocument();
    
    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
  });

  it("should reset form after successful submission", async () => {
    render(<Contact />);
    const user = userEvent.setup();
    
    const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    const messageInput = screen.getByLabelText(/message/i) as HTMLTextAreaElement;
    const submitButton = screen.getByRole("button", { name: /send message/i });
    
    await user.type(nameInput, "John Doe");
    await user.type(emailInput, "john@example.com");
    await user.type(messageInput, "This is a test message");
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(nameInput.value).toBe("");
      expect(emailInput.value).toBe("");
      expect(messageInput.value).toBe("");
    });
  });

  it("should handle very long message text", async () => {
    render(<Contact />);
    const user = userEvent.setup();
    
    const longMessage = "A".repeat(5000);
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole("button", { name: /send message/i });
    
    await user.type(nameInput, "John Doe");
    await user.type(emailInput, "john@example.com");
    await user.paste(messageInput, longMessage);
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/message sent!/i)).toBeInTheDocument();
    });
  });

  it("should handle special characters in name", async () => {
    render(<Contact />);
    const user = userEvent.setup();
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole("button", { name: /send message/i });
    
    await user.type(nameInput, "José O'Brien-García");
    await user.type(emailInput, "jose@example.com");
    await user.type(messageInput, "Test message");
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/message sent!/i)).toBeInTheDocument();
    });
  });

  it("should render contact information cards", () => {
    render(<Contact />);
    
    expect(screen.getByText(/email us/i)).toBeInTheDocument();
    expect(screen.getByText(/feedback/i)).toBeInTheDocument();
    expect(screen.getByText(/quick response time/i)).toBeInTheDocument();
  });

  it("should have working email links", () => {
    render(<Contact />);
    
    const emailLinks = screen.getAllByRole("link");
    const helloLink = emailLinks.find(link => link.getAttribute("href") === "mailto:hello@codebrew.com");
    const feedbackLink = emailLinks.find(link => link.getAttribute("href") === "mailto:feedback@codebrew.com");
    
    expect(helloLink).toBeInTheDocument();
    expect(feedbackLink).toBeInTheDocument();
  });

  it("should render FAQ section", () => {
    render(<Contact />);
    
    expect(screen.getByText(/common questions/i)).toBeInTheDocument();
    expect(screen.getByText(/how often do you add new content/i)).toBeInTheDocument();
    expect(screen.getByText(/is codebrew free to use/i)).toBeInTheDocument();
    expect(screen.getByText(/can i suggest puzzle ideas/i)).toBeInTheDocument();
  });

  it("should prevent submission with empty fields", async () => {
    render(<Contact />);
    const user = userEvent.setup();
    
    const submitButton = screen.getByRole("button", { name: /send message/i });
    await user.click(submitButton);
    
    // Form should not submit due to HTML5 validation
    expect(screen.queryByText(/message sent!/i)).not.toBeInTheDocument();
  });

  it("should handle rapid form submissions", async () => {
    render(<Contact />);
    const user = userEvent.setup();
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole("button", { name: /send message/i });
    
    await user.type(nameInput, "John Doe");
    await user.type(emailInput, "john@example.com");
    await user.type(messageInput, "Test message");
    
    // Try to submit multiple times rapidly
    await user.click(submitButton);
    await user.click(submitButton);
    await user.click(submitButton);
    
    // Should only process once (button is disabled during submission)
    await waitFor(() => {
      expect(screen.getByText(/message sent!/i)).toBeInTheDocument();
    });
  });

  it("should display response time indicator", () => {
    render(<Contact />);
    
    expect(screen.getByText(/usually responds in under 24 hours/i)).toBeInTheDocument();
  });

  it("should render with proper page structure", () => {
    const { container } = render(<Contact />);
    
    expect(container.querySelector(".container")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /contact/i })).toBeInTheDocument();
  });
});
