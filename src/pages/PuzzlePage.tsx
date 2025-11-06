import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Brain,
  Code,
  Bug,
  Lock,
  ArrowLeft,
  Play,
  CheckCircle,
  Clock,
  Trophy,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "@/contexts/AuthContext";
import { db } from "@/lib/supabase";

// Puzzle data - this could come from a database later
const puzzleData = {
  1: {
    id: 1,
    title: "The Missing Semicolon",
    description: "Find and fix the syntax errors in this JavaScript function",
    difficulty: "Easy",
    category: "JavaScript",
    icon: Code,
    color: "text-green-500",
    problem: `// This function should calculate the factorial of a number
function factorial(n) {
  if (n <= 1) {
    return 1
  }
  return n * factorial(n - 1)
}

// Test the function
console.log(factorial(5)) // Should output 120`,
    solution: `// This function should calculate the factorial of a number
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Test the function
console.log(factorial(5)); // Should output 120`,
    hints: [
      "Look for missing semicolons in JavaScript",
      "JavaScript statements should end with semicolons",
      "Check the return statement and function call",
    ],
    expectedOutput: "120",
  },
  2: {
    id: 2,
    title: "Array Manipulation Mystery",
    description:
      "Debug this array sorting algorithm that's not working as expected",
    difficulty: "Medium",
    category: "Algorithms",
    icon: Brain,
    color: "text-yellow-500",
    problem: `// This function should sort an array in ascending order
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));`,
    solution: `// This function should sort an array in ascending order
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));`,
    hints: [
      "Check the inner loop condition",
      "The inner loop should account for already sorted elements",
      "Consider the boundary condition for j",
    ],
    expectedOutput: "[11, 12, 22, 25, 34, 64, 90]",
  },
  3: {
    id: 3,
    title: "Async Await Adventure",
    description: "Fix the promise chain and make this async code work properly",
    difficulty: "Medium",
    category: "JavaScript",
    icon: Bug,
    color: "text-yellow-500",
    problem: `// This function should fetch user data and posts
async function getUserData(userId) {
  const user = fetch(\`/api/users/\${userId}\`);
  const posts = fetch(\`/api/users/\${userId}/posts\`);
  
  return {
    user: user,
    posts: posts
  };
}

getUserData(1).then(data => console.log(data));`,
    solution: `// This function should fetch user data and posts
async function getUserData(userId) {
  const user = await fetch(\`/api/users/\${userId}\`);
  const posts = await fetch(\`/api/users/\${userId}/posts\`);
  
  return {
    user: await user.json(),
    posts: await posts.json()
  };
}

getUserData(1).then(data => console.log(data));`,
    hints: [
      "Don't forget to await the fetch calls",
      "Fetch returns a Promise that needs to be resolved",
      "Consider using await for both the fetch and the json() conversion",
    ],
    expectedOutput: "{ user: {...}, posts: [...] }",
  },
  4: {
    id: 4,
    title: "Cryptographic Challenge",
    description: "Decode this encrypted message using the given cipher",
    difficulty: "Hard",
    category: "Security",
    icon: Lock,
    color: "text-red-500",
    problem: `// Decode this Caesar cipher with a shift of 3
function caesarDecode(text, shift) {
  return text.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      const code = char.charCodeAt(0);
      const base = code >= 65 && code <= 90 ? 65 : 97;
      return String.fromCharCode(((code - base + shift) % 26) + base);
    }
    return char;
  }).join('');
}

const encoded = "WKH TXLFN EURZQ IRA";
console.log(caesarDecode(encoded, 3));`,
    solution: `// Decode this Caesar cipher with a shift of 3
function caesarDecode(text, shift) {
  return text.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      const code = char.charCodeAt(0);
      const base = code >= 65 && code <= 90 ? 65 : 97;
      return String.fromCharCode(((code - base - shift + 26) % 26) + base);
    }
    return char;
  }).join('');
}

const encoded = "WKH TXLFN EURZQ IRA";
console.log(caesarDecode(encoded, 3));`,
    hints: [
      "For decoding, you need to subtract the shift, not add it",
      "Handle negative numbers with modulo operation",
      "Add 26 before taking modulo to handle negative results",
    ],
    expectedOutput: "THE QUICK BROWN FOX",
  },
  5: {
    id: 5,
    title: "Recursion Riddle",
    description: "Complete this recursive function to solve the tower of Hanoi",
    difficulty: "Hard",
    category: "Algorithms",
    icon: Brain,
    color: "text-red-500",
    problem: `// Solve Tower of Hanoi puzzle
function towerOfHanoi(n, source, destination, auxiliary) {
  if (n === 1) {
    console.log(\`Move disk 1 from \${source} to \${destination}\`);
    return;
  }
  
  // Move n-1 disks from source to auxiliary
  towerOfHanoi(n - 1, source, auxiliary, destination);
  
  // Move the largest disk from source to destination
  console.log(\`Move disk \${n} from \${source} to \${destination}\`);
  
  // TODO: Complete the third step
}

towerOfHanoi(3, 'A', 'C', 'B');`,
    solution: `// Solve Tower of Hanoi puzzle
function towerOfHanoi(n, source, destination, auxiliary) {
  if (n === 1) {
    console.log(\`Move disk 1 from \${source} to \${destination}\`);
    return;
  }
  
  // Move n-1 disks from source to auxiliary
  towerOfHanoi(n - 1, source, auxiliary, destination);
  
  // Move the largest disk from source to destination
  console.log(\`Move disk \${n} from \${source} to \${destination}\`);
  
  // Move n-1 disks from auxiliary to destination
  towerOfHanoi(n - 1, auxiliary, destination, source);
}

towerOfHanoi(3, 'A', 'C', 'B');`,
    hints: [
      "The third step involves moving disks from auxiliary to destination",
      "The roles of auxiliary and source are swapped in the final recursive call",
      "Think about the three-step process of Tower of Hanoi",
    ],
    expectedOutput: "Series of move instructions for 3 disks",
  },
  6: {
    id: 6,
    title: "CSS Layout Puzzle",
    description: "Fix the flexbox layout that's causing alignment issues",
    difficulty: "Easy",
    category: "CSS",
    icon: Code,
    color: "text-green-500",
    problem: `.container {
  display: flex;
  height: 100vh;
  flex-direction: column;
}

.header {
  height: 60px;
  background-color: #333;
}

.content {
  background-color: #f0f0f0;
  flex: 1;
}

.footer {
  height: 40px;
  background-color: #666;
}`,
    solution: `.container {
  display: flex;
  height: 100vh;
  flex-direction: column;
}

.header {
  height: 60px;
  background-color: #333;
  flex-shrink: 0;
}

.content {
  background-color: #f0f0f0;
  flex: 1;
  min-height: 0;
}

.footer {
  height: 40px;
  background-color: #666;
  flex-shrink: 0;
}`,
    hints: [
      "Add flex-shrink: 0 to fixed-height elements",
      "Use min-height: 0 on the flexible content area",
      "This prevents the header and footer from shrinking",
    ],
    expectedOutput:
      "Properly aligned flexbox layout with header, content, and footer",
  },
};

const PuzzlePage = () => {
  const { puzzleId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [userCode, setUserCode] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [startTime] = useState(Date.now());

  const puzzle =
    puzzleData[parseInt(puzzleId || "1") as keyof typeof puzzleData];

  useEffect(() => {
    if (puzzle) {
      setUserCode(puzzle.problem);
    }
  }, [puzzle]);

  if (!puzzle) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Puzzle Not Found</h1>
        <Button onClick={() => navigate("/puzzles")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Puzzles
        </Button>
      </div>
    );
  }

  const Icon = puzzle.icon;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500/10 text-green-600 dark:text-green-400";
      case "Medium":
        return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400";
      case "Hard":
        return "bg-red-500/10 text-red-600 dark:text-red-400";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const handleSubmit = async () => {
    // Simple solution checking (in a real app, this would be more sophisticated)
    const isCorrect =
      userCode.trim().replace(/\s+/g, " ") ===
      puzzle.solution.trim().replace(/\s+/g, " ");

    if (isCorrect) {
      setIsCompleted(true);
      setFeedback("🎉 Congratulations! You solved the puzzle correctly!");

      // Save score if user is logged in
      if (user) {
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        const score = Math.max(100 - timeSpent, 10); // Score based on time
        await db.saveGameScore(user.id, `puzzle-${puzzle.id}`, score);
      }
    } else {
      setFeedback("Not quite right. Check your solution and try again!");
    }
  };

  const showNextHint = () => {
    if (currentHint < puzzle.hints.length - 1) {
      setCurrentHint(currentHint + 1);
    }
    setShowHint(true);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" onClick={() => navigate("/puzzles")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Puzzles
          </Button>
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center`}
            >
              <Icon className={`w-5 h-5 ${puzzle.color}`} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{puzzle.title}</h1>
              <div className="flex items-center gap-2">
                <Badge className={getDifficultyColor(puzzle.difficulty)}>
                  {puzzle.difficulty}
                </Badge>
                <Badge variant="outline">{puzzle.category}</Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Problem Description */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Problem Description
              </h2>
              <p className="text-muted-foreground">{puzzle.description}</p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm">
                  <strong>Expected Output:</strong> {puzzle.expectedOutput}
                </p>
              </div>
            </Card>

            {/* Hints */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Hints</h3>
                <Button variant="outline" size="sm" onClick={showNextHint}>
                  Show Hint ({currentHint + 1}/{puzzle.hints.length})
                </Button>
              </div>
              {showHint && (
                <Alert>
                  <AlertDescription>
                    💡 {puzzle.hints[currentHint]}
                  </AlertDescription>
                </Alert>
              )}
            </Card>

            {/* Feedback */}
            {feedback && (
              <Alert
                className={
                  isCompleted
                    ? "border-green-500 bg-green-50"
                    : "border-yellow-500 bg-yellow-50"
                }
              >
                <AlertDescription
                  className={isCompleted ? "text-green-700" : "text-yellow-700"}
                >
                  {feedback}
                </AlertDescription>
              </Alert>
            )}
          </div>

          {/* Code Editor */}
          <div className="space-y-4">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Your Solution
                </h2>
                {isCompleted && (
                  <Badge className="bg-green-500 text-white">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Completed
                  </Badge>
                )}
              </div>

              <Textarea
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                className="font-mono text-sm min-h-[400px] resize-none"
                placeholder="Write your solution here..."
              />

              <div className="flex gap-2 mt-4">
                <Button onClick={handleSubmit} disabled={isCompleted}>
                  <Play className="w-4 h-4 mr-2" />
                  Submit Solution
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setUserCode(puzzle.problem)}
                >
                  Reset Code
                </Button>
              </div>
            </Card>

            {/* Progress Stats */}
            {user && (
              <Card className="p-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>
                      Time: {Math.floor((Date.now() - startTime) / 1000)}s
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4" />
                    <span>Hints used: {showHint ? currentHint + 1 : 0}</span>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuzzlePage;
