import { Lightbulb, Sparkles, Rocket, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Brainstorm = () => {
  const challenges = [
    {
      id: 1,
      title: "What if AI could dream?",
      description: "Imagine designing a system where AI experiences dreams. How would you approach storing, analyzing, and learning from these dreams?",
      category: "AI & ML",
      hints: 3,
      icon: Sparkles
    },
    {
      id: 2,
      title: "Zero-latency internet",
      description: "Design a theoretical architecture for instantaneous global communication with zero latency. What technologies would you need?",
      category: "Networks",
      hints: 4,
      icon: Zap
    },
    {
      id: 3,
      title: "Code that writes itself",
      description: "How would you design a system that learns from your coding patterns and automatically generates code for repetitive tasks?",
      category: "DevOps",
      hints: 3,
      icon: Rocket
    },
    {
      id: 4,
      title: "Quantum debugging",
      description: "Debugging quantum computers presents unique challenges. What tools and approaches would you create?",
      category: "Quantum",
      hints: 5,
      icon: Lightbulb
    },
    {
      id: 5,
      title: "Ethical AI decision-making",
      description: "Design a framework for AI systems to make ethical decisions in complex scenarios where there's no clear right answer.",
      category: "Ethics",
      hints: 4,
      icon: Sparkles
    },
    {
      id: 6,
      title: "Holographic interfaces",
      description: "Envision the next generation of user interfaces using holographic technology. How would interaction paradigms change?",
      category: "UX Design",
      hints: 3,
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6">
            <Lightbulb className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Think Outside the Box</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Brainstorming <span className="bg-coffee-gradient bg-clip-text text-transparent">Challenges</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Creative "what if" scenarios to spark innovation and push the boundaries of possibility
          </p>
        </div>

        {/* Featured Challenge */}
        <Card className="mb-12 p-8 bg-coffee-gradient text-white shadow-card animate-scale-in">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Challenge of the Day
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            What if programming languages could evolve?
          </h2>
          <p className="text-white/90 mb-6 text-lg">
            Imagine a programming language that learns from how developers use it and automatically evolves its syntax and features. 
            How would you design such a system? What safeguards would you implement?
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-white text-secondary hover:bg-white/90">
              Start Brainstorming
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              View Hints (5)
            </Button>
          </div>
        </Card>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <Card 
                key={challenge.id}
                className="p-6 hover:shadow-card transition-all hover:scale-105 cursor-pointer group border-2 hover:border-secondary/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-coffee-gradient transition-colors">
                    <Icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {challenge.category}
                  </Badge>
                </div>
                
                <h3 className="font-bold text-xl mb-3 group-hover:text-secondary transition-colors">
                  {challenge.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {challenge.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Lightbulb className="w-4 h-4" />
                    {challenge.hints} hints available
                  </span>
                  <span className="text-sm font-medium text-secondary group-hover:translate-x-1 transition-transform">
                    Explore →
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* How it Works */}
        <Card className="mt-12 p-8 bg-muted/50">
          <h2 className="text-2xl font-bold mb-6 text-center">How Brainstorming Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-brew-gradient text-white flex items-center justify-center mx-auto mb-3 font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Choose a Challenge</h3>
              <p className="text-sm text-muted-foreground">
                Pick a "what if" scenario that sparks your curiosity
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-brew-gradient text-white flex items-center justify-center mx-auto mb-3 font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Think Creatively</h3>
              <p className="text-sm text-muted-foreground">
                Use hints when stuck, but let your imagination run wild
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-brew-gradient text-white flex items-center justify-center mx-auto mb-3 font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Share & Discuss</h3>
              <p className="text-sm text-muted-foreground">
                Compare your ideas with others and learn new perspectives
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Brainstorm;
