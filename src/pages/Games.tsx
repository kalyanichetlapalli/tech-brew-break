import { Gamepad2, Target, Zap, Trophy, Puzzle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Games = () => {
  const games = [
    {
      id: 1,
      title: "Bug Crusher",
      description: "Race against time to squash bugs in the code before they multiply!",
      icon: Target,
      players: "1,234",
      duration: "5 min",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      title: "Code Match",
      description: "Match code snippets with their outputs in this memory-based game",
      icon: Puzzle,
      players: "892",
      duration: "3 min",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Logic Labyrinth",
      description: "Navigate through algorithmic mazes using boolean logic",
      icon: Zap,
      players: "2,145",
      duration: "7 min",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Syntax Sprint",
      description: "Type code snippets as fast as you can without errors",
      icon: Trophy,
      players: "3,421",
      duration: "2 min",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Gamepad2 className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Play & Learn</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="bg-brew-gradient bg-clip-text text-transparent">Games</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quick, fun mini-games that make learning tech concepts entertaining
          </p>
        </div>

        {/* Featured Game */}
        <Card className="mb-12 overflow-hidden border-2 border-accent/20 shadow-card animate-scale-in">
          <div className="relative h-48 bg-gradient-to-r from-accent/20 to-primary/20 flex items-center justify-center">
            <div className="absolute inset-0 bg-hero-gradient" />
            <div className="relative z-10 text-center">
              <Badge className="mb-4 bg-accent text-accent-foreground">Featured Game</Badge>
              <h2 className="text-3xl font-bold mb-2">Bug Crusher Arena</h2>
              <p className="text-muted-foreground mb-4">The ultimate debugging challenge</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Play Now
              </Button>
            </div>
          </div>
        </Card>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {games.map((game, index) => {
            const Icon = game.icon;
            return (
              <Card 
                key={game.id}
                className="p-6 hover:shadow-card transition-all hover:scale-105 cursor-pointer group border-2 hover:border-primary/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${game.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                      {game.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {game.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Trophy className="w-4 h-4" />
                        {game.players} players
                      </span>
                      <span className="flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        {game.duration}
                      </span>
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Play Now
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Leaderboard Preview */}
        <Card className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-bold">Top Players This Week</h2>
          </div>
          
          <div className="space-y-3">
            {[
              { name: "Sarah Chen", score: 12450, rank: 1 },
              { name: "Alex Kumar", score: 11280, rank: 2 },
              { name: "Jordan Lee", score: 10950, rank: 3 }
            ].map((player) => (
              <div key={player.rank} className="flex items-center justify-between p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    player.rank === 1 ? 'bg-accent text-accent-foreground' :
                    player.rank === 2 ? 'bg-secondary text-secondary-foreground' :
                    'bg-primary/10 text-primary'
                  }`}>
                    {player.rank}
                  </div>
                  <span className="font-medium">{player.name}</span>
                </div>
                <Badge variant="outline">{player.score.toLocaleString()} pts</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Games;
