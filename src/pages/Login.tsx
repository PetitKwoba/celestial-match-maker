import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import celestialIcon from "@/assets/celestial-icon.png";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-heaven flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={celestialIcon} alt="Celestial Love" className="w-10 h-10" />
            <div>
              <CardTitle className="text-xl text-primary">Celestial Love</CardTitle>
              <p className="text-xs text-muted-foreground">Where gospel standard matters and upheld</p>
            </div>
          </div>
          <Heart className="w-12 h-12 mx-auto text-primary animate-celestial-glow" />
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" />
            </div>
          </div>
          <div className="space-y-4">
            <Button className="w-full" variant="celestial">
              Sign In
            </Button>
            <Button className="w-full" variant="ghost" asChild>
              <Link to="/signup">Create Account</Link>
            </Button>
          </div>
          <div className="text-center">
            <Button variant="link" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;