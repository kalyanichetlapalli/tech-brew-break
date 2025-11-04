import { Brain, Code, Bug, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Puzzles = () => {
  const puzzles = [
    {
      id: 1,
      title: "The Missing Semicolon",
      description: "Find and fix the syntax errors in this JavaScript function",
      difficulty: "Easy",
      category: "JavaScript",
      icon: Code,
      color: "text-green-500"
    },
    {
      id: 2,
      title: "Array Manipulation Mystery",
      description: "Debug this array sorting algorithm that's not working as expected",
      difficulty: "Medium",
      category: "Algorithms",
      icon: Brain,
      color: "text-yellow-500"
    },
    {
      id: 3,
      title: "Async Await Adventure",
      description: "Fix the promise chain and make this async code work properly",
      difficulty: "Medium",
      category: "JavaScript",
      icon: Bug,
      color: "text-yellow-500"
    },
    {
      id: 4,
      title: "Cryptographic Challenge",
      description: "Decode this encrypted message using the given cipher",
      difficulty: "Hard",
      category: "Security",
      icon: Lock,
      color: "text-red-500"
    },
    {
      id: 5,
      title: "Recursion Riddle",
      description: "Complete this recursive function to solve the tower of Hanoi",
      difficulty: "Hard",
      category: "Algorithms",
      icon: Brain,
      color: "text-red-500"
    },
    {
      id: 6,
      title: "CSS Layout Puzzle",
      description: "Fix the flexbox layout that's causing alignment issues",
      difficulty: "Easy",
      category: "CSS",
      icon: Code,
      color: "text-green-500"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-500/10 text-green-600 dark:text-green-400";
      case "Medium": return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400";
      case "Hard": return "bg-red-500/10 text-red-600 dark:text-red-400";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Challenge Your Mind</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Coding <span className="bg-brew-gradient bg-clip-text text-transparent">Puzzles</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharpen your problem-solving skills with these interactive coding challenges
          </p>
        </div>

        {/* Puzzles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {puzzles.map((puzzle, index) => {
            const Icon = puzzle.icon;
            return (
              <Card 
                key={puzzle.id} 
                className="p-6 hover:shadow-card transition-all hover:scale-105 cursor-pointer group border-2 hover:border-primary/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-brew-gradient transition-colors`}>
                    <Icon className={`w-6 h-6 ${puzzle.color} group-hover:text-white transition-colors`} />
                  </div>
                  <Badge className={getDifficultyColor(puzzle.difficulty)}>
                    {puzzle.difficulty}
                  </Badge>
                </div>
                
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {puzzle.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {puzzle.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {puzzle.category}
                  </Badge>
                  <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                    Solve →
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-muted/50 border-dashed border-2">
            <Brain className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">More Puzzles Coming Soon!</h3>
            <p className="text-muted-foreground">
              We're brewing up new challenges every week. Check back soon!
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Puzzles;
