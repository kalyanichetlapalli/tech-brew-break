import { Mail, MessageSquare, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. We'll get back to you soon!",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get in Touch</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="bg-brew-gradient bg-clip-text text-transparent">Us</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions, suggestions, or just want to say hi? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 shadow-card animate-scale-in">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  required 
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com" 
                  required 
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us what's on your mind..." 
                  required 
                  className="min-h-[150px] bg-background resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-8 shadow-card animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-2">
                    For general inquiries and support
                  </p>
                  <a 
                    href="mailto:hello@codebrew.com" 
                    className="text-primary hover:underline font-medium"
                  >
                    hello@codebrew.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-card animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Feedback</h3>
                  <p className="text-muted-foreground mb-2">
                    We love hearing your ideas for new puzzles, games, or features
                  </p>
                  <a 
                    href="mailto:feedback@codebrew.com" 
                    className="text-accent hover:underline font-medium"
                  >
                    feedback@codebrew.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-brew-gradient text-white shadow-card animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="font-bold text-xl mb-3">Quick Response Time</h3>
              <p className="text-white/90 mb-4">
                We typically respond within 24 hours during business days. Your feedback helps us brew better experiences!
              </p>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Usually responds in under 24 hours
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Preview */}
        <Card className="mt-12 p-8 bg-muted/50 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Common Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">How often do you add new content?</h3>
              <p className="text-muted-foreground">
                We add new puzzles and games weekly, and new learning videos are curated every month.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Is CodeBrew free to use?</h3>
              <p className="text-muted-foreground">
                Yes! CodeBrew is completely free. We're passionate about making tech learning accessible to everyone.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I suggest puzzle ideas?</h3>
              <p className="text-muted-foreground">
                Absolutely! We love community contributions. Send your ideas to feedback@codebrew.com.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
