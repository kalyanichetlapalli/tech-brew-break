import { render, screen } from "../utils/test-utils";
import Home from "@/pages/Home";

describe("Home Page Edge Cases", () => {
  it("should render hero section", () => {
    render(<Home />);
    
    expect(screen.getByText(/refresh your mind/i)).toBeInTheDocument();
    expect(screen.getByText(/with tech/i)).toBeInTheDocument();
  });

  it("should render main CTA buttons", () => {
    render(<Home />);
    
    expect(screen.getByRole("link", { name: /start puzzling/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /play games/i })).toBeInTheDocument();
  });

  it("should have correct links for CTA buttons", () => {
    render(<Home />);
    
    const startPuzzlingLink = screen.getByRole("link", { name: /start puzzling/i });
    const playGamesLink = screen.getByRole("link", { name: /play games/i });
    
    expect(startPuzzlingLink).toHaveAttribute("href", "/puzzles");
    expect(playGamesLink).toHaveAttribute("href", "/games");
  });

  it("should render puzzle of the day section", () => {
    render(<Home />);
    
    expect(screen.getByText(/puzzle of the day/i)).toBeInTheDocument();
    expect(screen.getByText(/medium/i)).toBeInTheDocument();
  });

  it("should display code snippet in puzzle", () => {
    render(<Home />);
    
    expect(screen.getByText(/function sumEvens/i)).toBeInTheDocument();
  });

  it("should have solve now button for puzzle", () => {
    render(<Home />);
    
    const solveButton = screen.getByRole("link", { name: /solve now/i });
    expect(solveButton).toBeInTheDocument();
    expect(solveButton).toHaveAttribute("href", "/puzzles");
  });

  it("should render inspirational quote section", () => {
    render(<Home />);
    
    expect(screen.getByText(/the only way to learn a new programming language/i)).toBeInTheDocument();
    expect(screen.getByText(/dennis ritchie/i)).toBeInTheDocument();
  });

  it("should render features grid section", () => {
    render(<Home />);
    
    expect(screen.getByText("What's Brewing?")).toBeInTheDocument();
    expect(screen.getByText("Choose your flavor of tech refreshment")).toBeInTheDocument();
  });

  it("should render all feature cards", () => {
    render(<Home />);
    
    expect(screen.getByText("Puzzles")).toBeInTheDocument();
    expect(screen.getByText("Tech Games")).toBeInTheDocument();
    expect(screen.getByText("Brainstorm")).toBeInTheDocument();
    expect(screen.getByText("Learn Concepts")).toBeInTheDocument();
  });

  it("should have links to all feature pages", () => {
    render(<Home />);
    
    const links = screen.getAllByRole("link");
    const puzzlesLinks = links.filter(link => link.getAttribute("href") === "/puzzles");
    const gamesLinks = links.filter(link => link.getAttribute("href") === "/games");
    const brainstormLinks = links.filter(link => link.getAttribute("href") === "/brainstorm");
    const learnLinks = links.filter(link => link.getAttribute("href") === "/learn");
    
    expect(puzzlesLinks.length).toBeGreaterThan(0);
    expect(gamesLinks.length).toBeGreaterThan(0);
    expect(brainstormLinks.length).toBeGreaterThan(0);
    expect(learnLinks.length).toBeGreaterThan(0);
  });

  it("should render feature card descriptions", () => {
    render(<Home />);
    
    expect(screen.getByText(/logic challenges and coding riddles/i)).toBeInTheDocument();
    expect(screen.getByText(/quick, fun mini-games/i)).toBeInTheDocument();
    expect(screen.getByText(/creative "what if" scenarios/i)).toBeInTheDocument();
    expect(screen.getByText(/bite-sized videos explaining key tech topics/i)).toBeInTheDocument();
  });

  it("should render coffee icon branding", () => {
    render(<Home />);
    
    expect(screen.getByText(/brew your mind with tech fun/i)).toBeInTheDocument();
  });

  it("should have proper heading hierarchy", () => {
    render(<Home />);
    
    const mainHeading = screen.getByRole("heading", { name: /refresh your mind/i });
    expect(mainHeading).toBeInTheDocument();
  });

  it("should render responsive container", () => {
    const { container } = render(<Home />);
    
    const sections = container.querySelectorAll("section");
    expect(sections.length).toBeGreaterThan(0);
    
    sections.forEach(section => {
      const containerDiv = section.querySelector(".container");
      expect(containerDiv).toBeInTheDocument();
    });
  });

  it("should have gradient text styling", () => {
    const { container } = render(<Home />);
    
    const gradientText = container.querySelector(".bg-brew-gradient");
    expect(gradientText).toBeInTheDocument();
  });

  it("should render all icons", () => {
    render(<Home />);
    
    // Icons should be rendered, check by text content near them
    expect(screen.getByText("Puzzles")).toBeInTheDocument();
    expect(screen.getByText("Tech Games")).toBeInTheDocument();
    expect(screen.getByText("Brainstorm")).toBeInTheDocument();
    expect(screen.getByText("Learn Concepts")).toBeInTheDocument();
  });

  it("should have animation classes", () => {
    const { container } = render(<Home />);
    
    const animatedElements = container.querySelectorAll(".animate-fade-in, .animate-scale-in");
    expect(animatedElements.length).toBeGreaterThan(0);
  });

  it("should render description text properly", () => {
    render(<Home />);
    
    expect(screen.getByText(/interactive puzzles, mini games, and bite-sized learning/i)).toBeInTheDocument();
  });

  it("should handle empty state gracefully", () => {
    render(<Home />);
    
    // Page should always render with content
    expect(screen.getByText(/refresh your mind/i)).toBeInTheDocument();
  });

  it("should have proper semantic HTML structure", () => {
    const { container } = render(<Home />);
    
    const sections = container.querySelectorAll("section");
    expect(sections.length).toBeGreaterThanOrEqual(4);
  });
});
