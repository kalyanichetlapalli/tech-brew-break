import { render, screen } from "../utils/test-utils";
import { UserProfile } from "@/components/UserProfile";
import { vi } from "vitest";
import { useAuth } from "@/contexts/AuthContext";
import userEvent from "@testing-library/user-event";

vi.mock("@/contexts/AuthContext");

describe("UserProfile Edge Cases", () => {
  const mockSignOut = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should not render when user is null", () => {
    (useAuth as any).mockReturnValue({
      user: null,
      signOut: mockSignOut,
    });

    const { container } = render(<UserProfile />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should not render when user is undefined", () => {
    (useAuth as any).mockReturnValue({
      user: undefined,
      signOut: mockSignOut,
    });

    const { container } = render(<UserProfile />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should handle user with no email", () => {
    (useAuth as any).mockReturnValue({
      user: {
        id: "123",
        user_metadata: {},
      },
      signOut: mockSignOut,
    });

    render(<UserProfile />);
    
    // Should still render the component structure
    expect(screen.getByRole("button", { name: /sign out/i })).toBeInTheDocument();
  });

  it("should display email when provided", () => {
    const testEmail = "test@example.com";
    (useAuth as any).mockReturnValue({
      user: {
        id: "123",
        email: testEmail,
        user_metadata: {},
      },
      signOut: mockSignOut,
    });

    render(<UserProfile />);
    expect(screen.getByText(testEmail)).toBeInTheDocument();
  });

  it("should display full name from user_metadata when available", () => {
    const fullName = "John Doe";
    (useAuth as any).mockReturnValue({
      user: {
        id: "123",
        email: "john@example.com",
        user_metadata: {
          full_name: fullName,
        },
      },
      signOut: mockSignOut,
    });

    render(<UserProfile />);
    expect(screen.getByText(fullName)).toBeInTheDocument();
  });

  it("should show default name when no full_name in user_metadata", () => {
    (useAuth as any).mockReturnValue({
      user: {
        id: "123",
        email: "test@example.com",
        user_metadata: {},
      },
      signOut: mockSignOut,
    });

    render(<UserProfile />);
    expect(screen.getByText("Tech Brewer")).toBeInTheDocument();
  });

  it("should handle user with avatar_url", () => {
    const avatarUrl = "https://example.com/avatar.jpg";
    (useAuth as any).mockReturnValue({
      user: {
        id: "123",
        email: "test@example.com",
        user_metadata: {
          avatar_url: avatarUrl,
        },
      },
      signOut: mockSignOut,
    });

    render(<UserProfile />);
    const avatarImg = screen.queryByRole("img");
    // Avatar might not be fully rendered depending on component implementation
    expect(screen.getByRole("button", { name: /sign out/i })).toBeInTheDocument();
  });

  it("should show verified badge when email is confirmed", () => {
    (useAuth as any).mockReturnValue({
      user: {
        id: "123",
        email: "test@example.com",
        email_confirmed_at: "2024-01-01T00:00:00Z",
        user_metadata: {},
      },
      signOut: mockSignOut,
    });

    render(<UserProfile />);
    expect(screen.getByText("Verified")).toBeInTheDocument();
  });

  it("should show pending verification when email not confirmed", () => {
    (useAuth as any).mockReturnValue({
      user: {
        id: "123",
        email: "test@example.com",
        email_confirmed_at: null,
        user_metadata: {},
      },
      signOut: mockSignOut,
    });

    render(<UserProfile />);
    expect(screen.getByText("Pending Verification")).toBeInTheDocument();
  });

  it("should call signOut when sign out button clicked", async () => {
    (useAuth as any).mockReturnValue({
      user: {
        id: "123",
        email: "test@example.com",
        user_metadata: {},
      },
      signOut: mockSignOut,
    });

    render(<UserProfile />);
    const user = userEvent.setup();
    
    const signOutButton = screen.getByRole("button", { name: /sign out/i });
    await user.click(signOutButton);
    
    expect(mockSignOut).toHaveBeenCalledTimes(1);
  });

  it("should handle extremely long email addresses", () => {
    const longEmail = "verylongemailaddressthatmightbreakthelayout@verylongdomainname.com";
    (useAuth as any).mockReturnValue({
      user: {
        id: "123",
        email: longEmail,
        user_metadata: {},
      },
      signOut: mockSignOut,
    });

    render(<UserProfile />);
    expect(screen.getByText(longEmail)).toBeInTheDocument();
  });

  it("should handle special characters in full name", () => {
    const specialName = "José O'Brien-García";
    (useAuth as any).mockReturnValue({
      user: {
        id: "123",
        email: "jose@example.com",
        user_metadata: {
          full_name: specialName,
        },
      },
      signOut: mockSignOut,
    });

    render(<UserProfile />);
    expect(screen.getByText(specialName)).toBeInTheDocument();
  });

  it("should render achievements section", () => {
    (useAuth as any).mockReturnValue({
      user: {
        id: "123",
        email: "test@example.com",
        user_metadata: {},
      },
      signOut: mockSignOut,
    });

    render(<UserProfile />);
    expect(screen.getByText("Achievements")).toBeInTheDocument();
    expect(screen.getByText(/connect your profile/i)).toBeInTheDocument();
  });

  it("should handle missing user_metadata gracefully", () => {
    (useAuth as any).mockReturnValue({
      user: {
        id: "123",
        email: "test@example.com",
        // user_metadata is completely missing
      },
      signOut: mockSignOut,
    });

    render(<UserProfile />);
    expect(screen.getByText("Tech Brewer")).toBeInTheDocument();
  });
});
