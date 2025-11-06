import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { LogOut, User, Trophy } from "lucide-react";

export const UserProfile = () => {
  const { user, signOut } = useAuth();

  if (!user) return null;

  const initials = user.email?.slice(0, 2).toUpperCase() || "U";

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={user.user_metadata?.avatar_url} />
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">
                {user.user_metadata?.full_name || "Tech Brewer"}
              </CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={signOut}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Account Status</h4>
            <Badge variant={user.email_confirmed_at ? "default" : "secondary"}>
              {user.email_confirmed_at ? "Verified" : "Pending Verification"}
            </Badge>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2 flex items-center">
              <Trophy className="h-4 w-4 mr-1" />
              Achievements
            </h4>
            <p className="text-sm text-muted-foreground">
              Connect your profile to start tracking your progress!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
