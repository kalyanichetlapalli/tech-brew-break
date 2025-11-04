import { Coffee, Target, Users, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Coffee className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About CodeBrew</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Brewing Better <span className="bg-brew-gradient bg-clip-text text-transparent">Tech Breaks</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            CodeBrew was born from a simple idea: work breaks shouldn't just be about scrolling social media. 
            They should refresh your mind while keeping you connected to what you love—technology.
          </p>
        </div>

        {/* Mission Card */}
        <Card className="p-8 md:p-12 mb-12 shadow-card border-2 border-primary/20 animate-scale-in">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-20 h-20 rounded-2xl bg-brew-gradient flex items-center justify-center flex-shrink-0">
              <Target className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe that working professionals deserve meaningful breaks that sharpen their skills while providing 
                genuine relaxation. CodeBrew offers a unique blend of interactive puzzles, engaging games, creative challenges, 
                and bite-sized learning—all designed to fit perfectly into your 5-10 minute coffee break.
              </p>
            </div>
          </div>
        </Card>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 hover:shadow-card transition-all hover:scale-105 animate-scale-in">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Coffee className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-2">Refreshing</h3>
            <p className="text-muted-foreground">
              We make learning feel like a break, not more work. Every experience is designed to energize, not drain.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-card transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-bold text-xl mb-2">Accessible</h3>
            <p className="text-muted-foreground">
              Whether you're a beginner or expert, our content adapts to your level and fits your schedule.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-card transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-bold text-xl mb-2">Engaging</h3>
            <p className="text-muted-foreground">
              Fun shouldn't sacrifice substance. We create experiences that are both enjoyable and educational.
            </p>
          </Card>
        </div>

        {/* Story Section */}
        <Card className="p-8 md:p-12 bg-coffee-gradient text-white shadow-card">
          <h2 className="text-3xl font-bold mb-6">The Story Behind CodeBrew</h2>
          <div className="space-y-4 text-white/90 text-lg leading-relaxed">
            <p>
              CodeBrew started when our founder noticed a pattern: developers taking "breaks" that left them either 
              mentally drained from mindless scrolling or guilty about not being productive. There had to be a better way.
            </p>
            <p>
              We asked ourselves: What if breaks could be both relaxing AND enriching? What if you could have fun while 
              staying connected to your passion for technology? What if 10 minutes could leave you energized rather than depleted?
            </p>
            <p>
              That's when CodeBrew was born—a platform where professionals can truly recharge. Where puzzles challenge your 
              mind without overwhelming it. Where games make you smile while teaching you something new. Where learning feels 
              like play, and breaks feel like... well, actual breaks.
            </p>
          </div>
        </Card>

        {/* Team Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Built by Developers, for Developers</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Our team understands the challenges of staying sharp in a demanding tech environment. We're developers, 
            designers, and educators who believe in the power of intentional breaks.
          </p>
          <Card className="p-8 bg-muted/50 border-dashed border-2 inline-block">
            <Coffee className="w-12 h-12 mx-auto mb-4 text-primary animate-float" />
            <p className="text-muted-foreground">
              Want to join our mission? We're always looking for contributors and partners.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
