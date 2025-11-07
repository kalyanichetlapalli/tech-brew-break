import { render, screen, waitFor } from "../utils/test-utils";
import Navigation from "@/components/Navigation";
import { vi } from "vitest";
import { useAuth } from "@/contexts/AuthContext";
import userEvent from "@testing-library/user-event";

vi.mock("@/contexts/AuthContext");

describe("Navigation Edge Cases", () => {
  const mockSignOut = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    document.documentElement.classList.remove("dark");
  });

  describe("Unauthenticated State", () => {
    beforeEach(() => {
      (useAuth as any).mockReturnValue({
        user: null,
        signOut: mockSignOut,
      });
    });

    it("should show Sign In button when not authenticated", () => {
      render(<Navigation />);
      expect(screen.getByRole("link", { name: /sign in/i })).toBeInTheDocument();
    });

    it("should not show user menu when not authenticated", () => {
      render(<Navigation />);
      expect(screen.queryByRole("button", { name: /profile/i })).not.toBeInTheDocument();
    });

    it("should render all navigation items", () => {
      render(<Navigation />);
      
      expect(screen.getByText("Home")).toBeInTheDocument();
      expect(screen.getByText("Puzzles")).toBeInTheDocument();
      expect(screen.getByText("Games")).toBeInTheDocument();
      expect(screen.getByText("Brainstorm")).toBeInTheDocument();
      expect(screen.getByText("Learn")).toBeInTheDocument();
      expect(screen.getByText("About")).toBeInTheDocument();
      expect(screen.getByText("Contact")).toBeInTheDocument();
    });

    it("should have correct href for all nav links", () => {
      render(<Navigation />);
      
      const homeLinks = screen.getAllByRole("link", { name: /home/i });
      expect(homeLinks[0]).toHaveAttribute("href", "/");
      
      const puzzleLinks = screen.getAllByRole("link", { name: /puzzles/i });
      expect(puzzleLinks[0]).toHaveAttribute("href", "/puzzles");
    });
  });

  describe("Authenticated State", () => {
    beforeEach(() => {
      (useAuth as any).mockReturnValue({
        user: {
          id: "123",
          email: "test@example.com",
          email_confirmed_at: "2024-01-01T00:00:00Z",
        },
        signOut: mockSignOut,
      });
    });

    it("should show user avatar when authenticated", () => {
      render(<Navigation />);
      const avatarButton = screen.getByRole("button", { name: "" });
      expect(avatarButton).toBeInTheDocument();
    });

    it("should not show Sign In button when authenticated", () => {
      render(<Navigation />);
      expect(screen.queryByRole("link", { name: /sign in/i })).not.toBeInTheDocument();
    });

    it("should display user email in dropdown", async () => {
      render(<Navigation />);
      const user = userEvent.setup();
      
      const avatarButton = screen.getByRole("button", { name: "" });
      await user.click(avatarButton);
      
      await waitFor(() => {
        expect(screen.getByText("test@example.com")).toBeInTheDocument();
      });
    });

    it("should show verified status in dropdown for confirmed email", async () => {
      render(<Navigation />);
      const user = userEvent.setup();
      
      const avatarButton = screen.getByRole("button", { name: "" });
      await user.click(avatarButton);
      
      await waitFor(() => {
        expect(screen.getByText("Verified")).toBeInTheDocument();
      });
    });

    it("should show pending verification for unconfirmed email", async () => {
      (useAuth as any).mockReturnValue({
        user: {
          id: "123",
          email: "test@example.com",
          email_confirmed_at: null,
        },
        signOut: mockSignOut,
      });

      render(<Navigation />);
      const user = userEvent.setup();
      
      const avatarButton = screen.getByRole("button", { name: "" });
      await user.click(avatarButton);
      
      await waitFor(() => {
        expect(screen.getByText("Pending verification")).toBeInTheDocument();
      });
    });

    it("should call signOut when clicking sign out option", async () => {
      render(<Navigation />);
      const user = userEvent.setup();
      
      const avatarButton = screen.getByRole("button", { name: "" });
      await user.click(avatarButton);
      
      const signOutButton = await screen.findByRole("menuitem", { name: /sign out/i });
      await user.click(signOutButton);
      
      expect(mockSignOut).toHaveBeenCalledTimes(1);
    });

    it("should have profile link in dropdown", async () => {
      render(<Navigation />);
      const user = userEvent.setup();
      
      const avatarButton = screen.getByRole("button", { name: "" });
      await user.click(avatarButton);
      
      const profileLink = await screen.findByRole("menuitem", { name: /profile/i });
      expect(profileLink).toHaveAttribute("href", "/profile");
    });
  });

  describe("Theme Toggle", () => {
    it("should toggle theme when clicking theme button", async () => {
      (useAuth as any).mockReturnValue({
        user: null,
        signOut: mockSignOut,
      });

      render(<Navigation />);
      const user = userEvent.setup();
      
      const themeButton = screen.getByRole("button", { name: "" });
      await user.click(themeButton);
      
      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });

    it("should start with light mode by default", () => {
      (useAuth as any).mockReturnValue({
        user: null,
        signOut: mockSignOut,
      });

      render(<Navigation />);
      
      expect(document.documentElement.classList.contains("dark")).toBe(false);
    });

    it("should persist dark mode state", async () => {
      (useAuth as any).mockReturnValue({
        user: null,
        signOut: mockSignOut,
      });

      const { unmount } = render(<Navigation />);
      const user = userEvent.setup();
      
      const themeButton = screen.getByRole("button", { name: "" });
      await user.click(themeButton);
      
      expect(document.documentElement.classList.contains("dark")).toBe(true);
      
      unmount();
      
      render(<Navigation />);
      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });
  });

  describe("Mobile Navigation", () => {
    it("should render mobile navigation menu", () => {
      (useAuth as any).mockReturnValue({
        user: null,
        signOut: mockSignOut,
      });

      render(<Navigation />);
      
      // Mobile nav should have duplicate nav items
      const homeLinks = screen.getAllByText("Home");
      expect(homeLinks.length).toBeGreaterThan(1);
    });
  });

  describe("Active Route Highlighting", () => {
    it("should highlight active route", () => {
      (useAuth as any).mockReturnValue({
        user: null,
        signOut: mockSignOut,
      });

      render(<Navigation />);
      
      // Home should be active by default (at root path)
      const homeLinks = screen.getAllByText("Home");
      homeLinks.forEach(link => {
        expect(link).toHaveClass("bg-primary");
      });
    });
  });

  describe("Brand Logo", () => {
    it("should render CodeBrew logo", () => {
      (useAuth as any).mockReturnValue({
        user: null,
        signOut: mockSignOut,
      });

      render(<Navigation />);
      expect(screen.getByText("CodeBrew")).toBeInTheDocument();
    });

    it("should link logo to home page", () => {
      (useAuth as any).mockReturnValue({
        user: null,
        signOut: mockSignOut,
      });

      render(<Navigation />);
      const logo = screen.getByText("CodeBrew").closest("a");
      expect(logo).toHaveAttribute("href", "/");
    });
  });

  describe("Edge Cases", () => {
    it("should handle undefined user gracefully", () => {
      (useAuth as any).mockReturnValue({
        user: undefined,
        signOut: mockSignOut,
      });

      render(<Navigation />);
      expect(screen.getByRole("link", { name: /sign in/i })).toBeInTheDocument();
    });

    it("should handle user with very long email", async () => {
      const longEmail = "verylongemailaddress@verylongdomainname.com";
      (useAuth as any).mockReturnValue({
        user: {
          id: "123",
          email: longEmail,
          email_confirmed_at: null,
        },
        signOut: mockSignOut,
      });

      render(<Navigation />);
      const user = userEvent.setup();
      
      const avatarButton = screen.getByRole("button", { name: "" });
      await user.click(avatarButton);
      
      await waitFor(() => {
        expect(screen.getByText(longEmail)).toBeInTheDocument();
      });
    });
  });
});
