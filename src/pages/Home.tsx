import { Coffee, Brain, Gamepad2, Lightbulb, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Coffee className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Brew Your Mind with Tech Fun</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Refresh Your Mind
              <br />
              <span className="bg-brew-gradient bg-clip-text text-transparent">
                During Your Break
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interactive puzzles, mini games, and bite-sized learning designed for busy professionals.
              Take a meaningful break that sharpens your tech skills.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link to="/puzzles">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow">
                  <Brain className="w-5 h-5 mr-2" />
                  Start Puzzling
                </Button>
              </Link>
              <Link to="/games">
                <Button size="lg" variant="outline" className="border-2">
                  <Gamepad2 className="w-5 h-5 mr-2" />
                  Play Games
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Puzzle of the Day */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-8 shadow-card border-2 border-primary/20 animate-scale-in">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-brew-gradient flex items-center justify-center flex-shrink-0">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-2xl font-bold">Puzzle of the Day</h2>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  Medium
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                Debug this JavaScript function that should return the sum of all even numbers in an array:
              </p>
              <pre className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
                <code className="text-sm">
{`function sumEvens(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 = 0) {
      sum += arr[i];
    }
  }
  return sum;
}`}
                </code>
              </pre>
              <Link to="/puzzles">
                <Button className="bg-primary hover:bg-primary/90">
                  <Play className="w-4 h-4 mr-2" />
                  Solve Now
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </section>

      {/* Quote Section */}
      <section className="container mx-auto px-4 py-12">
        <Card className="p-8 bg-coffee-gradient text-white shadow-card">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Lightbulb className="w-12 h-12 mx-auto opacity-90" />
            <blockquote className="text-2xl font-medium italic">
              "The only way to learn a new programming language is by writing programs in it."
            </blockquote>
            <cite className="text-sm opacity-90">— Dennis Ritchie</cite>
          </div>
        </Card>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What's Brewing?</h2>
          <p className="text-muted-foreground">Choose your flavor of tech refreshment</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/puzzles" className="group">
            <Card className="p-6 h-full hover:shadow-card transition-all hover:scale-105 hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-brew-gradient transition-colors">
                <Brain className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-lg mb-2">Puzzles</h3>
              <p className="text-sm text-muted-foreground">
                Logic challenges and coding riddles to sharpen your problem-solving skills
              </p>
            </Card>
          </Link>

          <Link to="/games" className="group">
            <Card className="p-6 h-full hover:shadow-card transition-all hover:scale-105 hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                <Gamepad2 className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-lg mb-2">Tech Games</h3>
              <p className="text-sm text-muted-foreground">
                Quick, fun mini-games that make learning tech concepts entertaining
              </p>
            </Card>
          </Link>

          <Link to="/brainstorm" className="group">
            <Card className="p-6 h-full hover:shadow-card transition-all hover:scale-105 hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-coffee-gradient transition-colors">
                <Lightbulb className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-lg mb-2">Brainstorm</h3>
              <p className="text-sm text-muted-foreground">
                Creative "what if" scenarios to spark innovation and creative thinking
              </p>
            </Card>
          </Link>

          <Link to="/learn" className="group">
            <Card className="p-6 h-full hover:shadow-card transition-all hover:scale-105 hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-brew-gradient transition-colors">
                <Play className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-lg mb-2">Learn Concepts</h3>
              <p className="text-sm text-muted-foreground">
                Bite-sized videos explaining key tech topics in under 5 minutes
              </p>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
