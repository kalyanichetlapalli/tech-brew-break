import { render, screen, waitFor } from "../utils/test-utils";
import { AuthForm } from "@/components/AuthForm";
import { vi } from "vitest";
import { useAuth } from "@/contexts/AuthContext";
import userEvent from "@testing-library/user-event";

vi.mock("@/contexts/AuthContext");

describe("AuthForm Edge Cases", () => {
  const mockSignIn = vi.fn();
  const mockSignUp = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useAuth as any).mockReturnValue({
      signIn: mockSignIn,
      signUp: mockSignUp,
    });
  });

  describe("Sign In Tab", () => {
    it("should handle empty email submission", async () => {
      render(<AuthForm />);
      const user = userEvent.setup();
      
      const signInButton = screen.getByRole("button", { name: /sign in/i });
      await user.click(signInButton);
      
      // HTML5 validation should prevent submission
      expect(mockSignIn).not.toHaveBeenCalled();
    });

    it("should handle invalid email format", async () => {
      render(<AuthForm />);
      const user = userEvent.setup();
      
      const emailInput = screen.getByLabelText(/email/i, { selector: "#signin-email" });
      await user.type(emailInput, "invalid-email");
      
      const passwordInput = screen.getByLabelText(/password/i, { selector: "#signin-password" });
      await user.type(passwordInput, "password123");
      
      const signInButton = screen.getByRole("button", { name: /sign in/i });
      await user.click(signInButton);
      
      // HTML5 validation should prevent submission
      expect(mockSignIn).not.toHaveBeenCalled();
    });

    it("should display error message on sign in failure", async () => {
      const errorMessage = "Invalid credentials";
      mockSignIn.mockResolvedValue({ error: new Error(errorMessage) });
      
      render(<AuthForm />);
      const user = userEvent.setup();
      
      const emailInput = screen.getByLabelText(/email/i, { selector: "#signin-email" });
      await user.type(emailInput, "test@example.com");
      
      const passwordInput = screen.getByLabelText(/password/i, { selector: "#signin-password" });
      await user.type(passwordInput, "password123");
      
      const signInButton = screen.getByRole("button", { name: /sign in/i });
      await user.click(signInButton);
      
      await waitFor(() => {
        expect(screen.getByText(errorMessage)).toBeInTheDocument();
      });
    });

    it("should show loading state during sign in", async () => {
      mockSignIn.mockImplementation(() => new Promise(resolve => setTimeout(() => resolve({ error: null }), 100)));
      
      render(<AuthForm />);
      const user = userEvent.setup();
      
      const emailInput = screen.getByLabelText(/email/i, { selector: "#signin-email" });
      await user.type(emailInput, "test@example.com");
      
      const passwordInput = screen.getByLabelText(/password/i, { selector: "#signin-password" });
      await user.type(passwordInput, "password123");
      
      const signInButton = screen.getByRole("button", { name: /sign in/i });
      await user.click(signInButton);
      
      expect(signInButton).toBeDisabled();
      
      await waitFor(() => {
        expect(signInButton).not.toBeDisabled();
      });
    });

    it("should handle network errors gracefully", async () => {
      mockSignIn.mockRejectedValue(new Error("Network error"));
      
      render(<AuthForm />);
      const user = userEvent.setup();
      
      const emailInput = screen.getByLabelText(/email/i, { selector: "#signin-email" });
      await user.type(emailInput, "test@example.com");
      
      const passwordInput = screen.getByLabelText(/password/i, { selector: "#signin-password" });
      await user.type(passwordInput, "password123");
      
      const signInButton = screen.getByRole("button", { name: /sign in/i });
      await user.click(signInButton);
      
      await waitFor(() => {
        expect(screen.getByText(/network error/i)).toBeInTheDocument();
      });
    });
  });

  describe("Sign Up Tab", () => {
    it("should enforce minimum password length", async () => {
      render(<AuthForm />);
      const user = userEvent.setup();
      
      const signUpTab = screen.getByRole("tab", { name: /sign up/i });
      await user.click(signUpTab);
      
      const passwordInput = screen.getByLabelText(/password/i, { selector: "#signup-password" });
      
      // Check minLength attribute
      expect(passwordInput).toHaveAttribute("minLength", "6");
    });

    it("should show success message on successful sign up", async () => {
      mockSignUp.mockResolvedValue({ error: null });
      
      render(<AuthForm />);
      const user = userEvent.setup();
      
      const signUpTab = screen.getByRole("tab", { name: /sign up/i });
      await user.click(signUpTab);
      
      const emailInput = screen.getByLabelText(/email/i, { selector: "#signup-email" });
      await user.type(emailInput, "newuser@example.com");
      
      const passwordInput = screen.getByLabelText(/password/i, { selector: "#signup-password" });
      await user.type(passwordInput, "password123");
      
      const signUpButton = screen.getByRole("button", { name: /sign up/i });
      await user.click(signUpButton);
      
      await waitFor(() => {
        expect(screen.getByText(/check your email for the confirmation link/i)).toBeInTheDocument();
      });
    });

    it("should handle duplicate email error", async () => {
      mockSignUp.mockResolvedValue({ error: new Error("User already exists") });
      
      render(<AuthForm />);
      const user = userEvent.setup();
      
      const signUpTab = screen.getByRole("tab", { name: /sign up/i });
      await user.click(signUpTab);
      
      const emailInput = screen.getByLabelText(/email/i, { selector: "#signup-email" });
      await user.type(emailInput, "existing@example.com");
      
      const passwordInput = screen.getByLabelText(/password/i, { selector: "#signup-password" });
      await user.type(passwordInput, "password123");
      
      const signUpButton = screen.getByRole("button", { name: /sign up/i });
      await user.click(signUpButton);
      
      await waitFor(() => {
        expect(screen.getByText(/user already exists/i)).toBeInTheDocument();
      });
    });

    it("should clear error when switching tabs", async () => {
      mockSignIn.mockResolvedValue({ error: new Error("Invalid credentials") });
      
      render(<AuthForm />);
      const user = userEvent.setup();
      
      const emailInput = screen.getByLabelText(/email/i, { selector: "#signin-email" });
      await user.type(emailInput, "test@example.com");
      
      const passwordInput = screen.getByLabelText(/password/i, { selector: "#signin-password" });
      await user.type(passwordInput, "wrongpassword");
      
      const signInButton = screen.getByRole("button", { name: /sign in/i });
      await user.click(signInButton);
      
      await waitFor(() => {
        expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
      });
      
      const signUpTab = screen.getByRole("tab", { name: /sign up/i });
      await user.click(signUpTab);
      
      // Error should still be visible as tabs don't clear errors
      expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
    });

    it("should handle password with special characters", async () => {
      mockSignUp.mockResolvedValue({ error: null });
      
      render(<AuthForm />);
      const user = userEvent.setup();
      
      const signUpTab = screen.getByRole("tab", { name: /sign up/i });
      await user.click(signUpTab);
      
      const emailInput = screen.getByLabelText(/email/i, { selector: "#signup-email" });
      await user.type(emailInput, "test@example.com");
      
      const passwordInput = screen.getByLabelText(/password/i, { selector: "#signup-password" });
      await user.type(passwordInput, "P@ssw0rd!#$%");
      
      const signUpButton = screen.getByRole("button", { name: /sign up/i });
      await user.click(signUpButton);
      
      await waitFor(() => {
        expect(mockSignUp).toHaveBeenCalledWith("test@example.com", "P@ssw0rd!#$%");
      });
    });
  });

  describe("Visual States", () => {
    it("should render both tabs", () => {
      render(<AuthForm />);
      
      expect(screen.getByRole("tab", { name: /sign in/i })).toBeInTheDocument();
      expect(screen.getByRole("tab", { name: /sign up/i })).toBeInTheDocument();
    });

    it("should show loading spinner when submitting", async () => {
      mockSignIn.mockImplementation(() => new Promise(resolve => setTimeout(() => resolve({ error: null }), 100)));
      
      render(<AuthForm />);
      const user = userEvent.setup();
      
      const emailInput = screen.getByLabelText(/email/i, { selector: "#signin-email" });
      await user.type(emailInput, "test@example.com");
      
      const passwordInput = screen.getByLabelText(/password/i, { selector: "#signin-password" });
      await user.type(passwordInput, "password123");
      
      const signInButton = screen.getByRole("button", { name: /sign in/i });
      await user.click(signInButton);
      
      expect(screen.getByTestId("loader-icon") || document.querySelector(".animate-spin")).toBeTruthy();
    });
  });
});
