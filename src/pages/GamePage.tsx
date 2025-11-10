import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, Trophy, Clock, Users } from "lucide-react";

const gamesData = {
  "typing-race": {
    id: "typing-race",
    title: "Typing Race",
    description: "Test your typing speed with programming challenges. Race against time to type code snippets accurately and quickly.",
    difficulty: "Easy",
    category: "Speed",
    color: "from-blue-500 to-cyan-500",
    players: "1.2k",
    duration: "5 min",
    instructions: [
      "Type the code snippet as fast as you can",
      "Accuracy matters - mistakes will slow you down",
      "Complete within the time limit",
      "Beat your high score"
    ],
    gameContent: "Game implementation coming soon..."
  },
  "debug-detective": {
    id: "debug-detective",
    title: "Debug Detective",
    description: "Find and fix bugs in code snippets. Sharpen your debugging skills by identifying errors in various programming scenarios.",
    difficulty: "Medium",
    category: "Logic",
    color: "from-purple-500 to-pink-500",
    players: "850",
    duration: "10 min",
    instructions: [
      "Review the buggy code snippet",
      "Identify all the bugs",
      "Submit your fixes",
      "Learn from explanations"
    ],
    gameContent: "Game implementation coming soon..."
  },
  "code-golf": {
    id: "code-golf",
    title: "Code Golf",
    description: "Write the shortest code possible to solve challenges. Compete to create the most elegant and concise solutions.",
    difficulty: "Hard",
    category: "Optimization",
    color: "from-orange-500 to-red-500",
    players: "620",
    duration: "15 min",
    instructions: [
      "Solve the problem with minimal code",
      "Every character counts",
      "Compare with other solutions",
      "Learn optimization techniques"
    ],
    gameContent: "Game implementation coming soon..."
  },
  "algorithm-arena": {
    id: "algorithm-arena",
    title: "Algorithm Arena",
    description: "Battle other players in algorithm challenges. Compete in real-time to solve algorithmic problems faster and better.",
    difficulty: "Hard",
    category: "Competitive",
    color: "from-green-500 to-emerald-500",
    players: "1.5k",
    duration: "20 min",
    instructions: [
      "Join a match or practice solo",
      "Solve algorithm challenges",
      "Earn points for speed and accuracy",
      "Climb the leaderboard"
    ],
    gameContent: "Game implementation coming soon..."
  }
};

const GamePage = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const game = gameId ? gamesData[gameId as keyof typeof gamesData] : null;

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Game Not Found</CardTitle>
            <CardDescription>The game you're looking for doesn't exist.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate("/games")} className="w-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Games
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "medium":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "hard":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/games">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Games
            </Link>
          </Button>
          
          <div className={`bg-gradient-to-r ${game.color} p-8 rounded-lg text-white mb-6`}>
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">{game.title}</h1>
                <p className="text-white/90 text-lg mb-4">{game.description}</p>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary" className={getDifficultyColor(game.difficulty)}>
                    {game.difficulty}
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {game.category}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Game Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="flex items-center gap-3 p-4">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Players</p>
                  <p className="text-xl font-bold">{game.players}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-3 p-4">
                <Clock className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="text-xl font-bold">{game.duration}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-3 p-4">
                <Trophy className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Best Score</p>
                  <p className="text-xl font-bold">--</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>How to Play</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {game.instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-sm">{instruction}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Game Area */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Game Area</CardTitle>
              <CardDescription>Start playing to test your skills</CardDescription>
            </CardHeader>
            <CardContent className="min-h-[400px] flex flex-col items-center justify-center">
              <div className="text-center space-y-4">
                <Play className="w-16 h-16 mx-auto text-muted-foreground" />
                <p className="text-muted-foreground">{game.gameContent}</p>
                <Button size="lg" className="mt-4">
                  <Play className="w-4 h-4 mr-2" />
                  Start Game
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
