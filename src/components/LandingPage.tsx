import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Shield, Users, MessageCircle, Sparkles } from "lucide-react";
import celestialHero from "@/assets/celestial-hero.jpg";
import celestialIcon from "@/assets/celestial-icon.png";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-heaven">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 backdrop-blur-sm bg-white/50 border-b border-primary/10">
        <div className="flex items-center gap-3">
          <img src={celestialIcon} alt="Celestial Love" className="w-10 h-10" />
          <div>
            <h1 className="text-xl font-bold text-primary">Celestial Love</h1>
            <p className="text-xs text-muted-foreground">Where gospel standard matters and upheld</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="ghost">Sign In</Button>
          <Button variant="celestial">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src={celestialHero} 
            alt="Celestial background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="animate-float">
            <Heart className="w-16 h-16 mx-auto mb-6 text-primary animate-celestial-glow" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Celestial Love
          </h1>
          <p className="text-xl md:text-2xl text-primary/80 mb-4 font-medium">
            Where gospel standard matters and upheld
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Find your eternal companion through faith-based connections. 
            Built for Latter-day Saints who prioritize gospel values and meaningful relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="celestial" className="shadow-celestial">
              <Star className="w-5 h-5" />
              Start Your Journey
            </Button>
            <Button size="xl" variant="heaven">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Gospel-Centered Features</h2>
            <p className="text-xl text-muted-foreground">Designed with LDS values at the heart</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2 border-primary/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-celestial rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-celestial transition-all duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Safe & Moderated</h3>
                <p className="text-muted-foreground">
                  Every profile is manually reviewed to ensure gospel standards are upheld and maintained.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2 border-primary/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-gold transition-all duration-300">
                  <Heart className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Faith-Based Matching</h3>
                <p className="text-muted-foreground">
                  Connect with fellow Latter-day Saints who share your values and testimony.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2 border-primary/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-celestial rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-celestial transition-all duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Celestial Notes</h3>
                <p className="text-muted-foreground">
                  Send thoughtful messages before matching to start meaningful conversations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Premium Features Preview */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-gold px-6 py-3 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-accent-foreground" />
            <span className="font-semibold text-accent-foreground">Celestial+ Premium</span>
          </div>
          <h2 className="text-4xl font-bold text-primary mb-6">Enhance Your Experience</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Unlock premium features to find your eternal companion faster
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="flex items-center gap-4 p-6 bg-white/70 rounded-xl border border-primary/10">
              <Users className="w-8 h-8 text-primary" />
              <div className="text-left">
                <h4 className="font-semibold text-primary">Ward Hopping</h4>
                <p className="text-sm text-muted-foreground">Browse beyond your local area</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white/70 rounded-xl border border-primary/10">
              <Star className="w-8 h-8 text-primary" />
              <div className="text-left">
                <h4 className="font-semibold text-primary">See Who Likes You</h4>
                <p className="text-sm text-muted-foreground">No more guessing games</p>
              </div>
            </div>
          </div>
          
          <Button size="xl" variant="gold" className="shadow-gold">
            <Sparkles className="w-5 h-5" />
            Upgrade to Celestial+
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/5 px-6 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src={celestialIcon} alt="Celestial Love" className="w-8 h-8" />
            <span className="text-xl font-bold text-primary">Celestial Love</span>
          </div>
          <p className="text-muted-foreground mb-4">
            "Where gospel standard matters and upheld"
          </p>
          <p className="text-sm text-muted-foreground">
            Built with love for the Latter-day Saint community
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;