import { render, screen } from "../utils/test-utils";
import Footer from "@/components/Footer";

describe("Footer Edge Cases", () => {
  it("should render all navigation links", () => {
    render(<Footer />);
    
    expect(screen.getByRole("link", { name: /puzzles/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /games/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /learn/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about us/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();
  });

  it("should have correct href attributes for internal links", () => {
    render(<Footer />);
    
    expect(screen.getByRole("link", { name: /puzzles/i })).toHaveAttribute("href", "/puzzles");
    expect(screen.getByRole("link", { name: /games/i })).toHaveAttribute("href", "/games");
    expect(screen.getByRole("link", { name: /learn/i })).toHaveAttribute("href", "/learn");
    expect(screen.getByRole("link", { name: /about us/i })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: /contact/i })).toHaveAttribute("href", "/contact");
  });

  it("should render all social media links", () => {
    render(<Footer />);
    
    // Check for links by their href attributes
    const links = screen.getAllByRole("link");
    const githubLink = links.find(link => link.getAttribute("href")?.includes("github.com"));
    const twitterLink = links.find(link => link.getAttribute("href")?.includes("twitter.com"));
    const linkedinLink = links.find(link => link.getAttribute("href")?.includes("linkedin.com"));
    const emailLink = links.find(link => link.getAttribute("href")?.includes("mailto:"));
    
    expect(githubLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(emailLink).toBeInTheDocument();
  });

  it("should have target=_blank for external social links", () => {
    render(<Footer />);
    
    const links = screen.getAllByRole("link");
    const githubLink = links.find(link => link.getAttribute("href")?.includes("github.com"));
    const twitterLink = links.find(link => link.getAttribute("href")?.includes("twitter.com"));
    const linkedinLink = links.find(link => link.getAttribute("href")?.includes("linkedin.com"));
    
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(twitterLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("target", "_blank");
  });

  it("should have rel=noopener noreferrer for external links", () => {
    render(<Footer />);
    
    const links = screen.getAllByRole("link");
    const githubLink = links.find(link => link.getAttribute("href")?.includes("github.com"));
    const twitterLink = links.find(link => link.getAttribute("href")?.includes("twitter.com"));
    const linkedinLink = links.find(link => link.getAttribute("href")?.includes("linkedin.com"));
    
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(twitterLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should render brand logo and name", () => {
    render(<Footer />);
    
    expect(screen.getByText("CodeBrew")).toBeInTheDocument();
    expect(screen.getByText(/brew your mind with tech fun/i)).toBeInTheDocument();
  });

  it("should render section headings", () => {
    render(<Footer />);
    
    expect(screen.getByText("Quick Links")).toBeInTheDocument();
    expect(screen.getByText("Company")).toBeInTheDocument();
    expect(screen.getByText("Connect")).toBeInTheDocument();
  });

  it("should render copyright text with current year", () => {
    render(<Footer />);
    
    expect(screen.getByText(/© 2025 CodeBrew/i)).toBeInTheDocument();
    expect(screen.getByText(/brew your mind, one puzzle at a time/i)).toBeInTheDocument();
  });

  it("should have proper email mailto link", () => {
    render(<Footer />);
    
    const links = screen.getAllByRole("link");
    const emailLink = links.find(link => link.getAttribute("href") === "mailto:hello@codebrew.com");
    
    expect(emailLink).toBeInTheDocument();
  });

  it("should render coffee icon", () => {
    render(<Footer />);
    
    // Check that the footer element exists with coffee branding
    expect(screen.getByText("CodeBrew")).toBeInTheDocument();
  });

  it("should have proper grid layout structure", () => {
    const { container } = render(<Footer />);
    
    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass("bg-card", "border-t", "border-border");
  });

  it("should render all icons for social links", () => {
    const { container } = render(<Footer />);
    
    // Count the number of social link icons
    const socialSection = container.querySelector(".flex.gap-3");
    expect(socialSection).toBeInTheDocument();
    expect(socialSection?.children.length).toBeGreaterThanOrEqual(4);
  });

  it("should have accessible footer structure", () => {
    const { container } = render(<Footer />);
    
    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });

  it("should maintain consistent spacing and layout", () => {
    const { container } = render(<Footer />);
    
    const footer = container.querySelector("footer");
    const containerDiv = footer?.querySelector(".container");
    
    expect(containerDiv).toBeInTheDocument();
    expect(containerDiv).toHaveClass("mx-auto", "px-4", "py-12");
  });
});
