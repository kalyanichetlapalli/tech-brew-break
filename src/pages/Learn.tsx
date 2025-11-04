import { Play, Clock, BookOpen, Code, Cloud, Cpu, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Learn = () => {
  const categories = [
    { id: "all", label: "All", icon: BookOpen },
    { id: "webdev", label: "Web Dev", icon: Code },
    { id: "ai", label: "AI & ML", icon: Cpu },
    { id: "cloud", label: "Cloud", icon: Cloud },
    { id: "other", label: "Other", icon: Globe }
  ];

  const videos = [
    {
      id: 1,
      title: "React Hooks in 5 Minutes",
      description: "Quick overview of useState, useEffect, and custom hooks",
      duration: "4:32",
      category: "webdev",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
      views: "12.5K"
    },
    {
      id: 2,
      title: "Understanding Neural Networks",
      description: "Basic concepts of how neural networks learn and process data",
      duration: "4:58",
      category: "ai",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
      views: "8.2K"
    },
    {
      id: 3,
      title: "Docker Containers Explained",
      description: "What are containers and why they're essential for modern development",
      duration: "3:45",
      category: "cloud",
      thumbnail: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400",
      views: "15.1K"
    },
    {
      id: 4,
      title: "CSS Grid vs Flexbox",
      description: "When to use Grid and when to use Flexbox for layouts",
      duration: "4:12",
      category: "webdev",
      thumbnail: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400",
      views: "9.8K"
    },
    {
      id: 5,
      title: "API Design Best Practices",
      description: "RESTful principles and modern API design patterns",
      duration: "4:50",
      category: "webdev",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400",
      views: "11.3K"
    },
    {
      id: 6,
      title: "Machine Learning Basics",
      description: "Supervised vs unsupervised learning explained simply",
      duration: "4:20",
      category: "ai",
      thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400",
      views: "13.7K"
    }
  ];

  const filterVideos = (category: string) => {
    if (category === "all") return videos;
    return videos.filter(v => v.category === category);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Bite-Sized Learning</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Learn <span className="bg-brew-gradient bg-clip-text text-transparent">Tech Concepts</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master key tech topics in under 5 minutes with our curated video library
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto mb-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <TabsTrigger key={cat.id} value={cat.id} className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{cat.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterVideos(cat.id).map((video, index) => (
                  <Card 
                    key={video.id}
                    className="overflow-hidden hover:shadow-card transition-all hover:scale-105 cursor-pointer group border-2 hover:border-primary/50 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative">
                      <img 
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-primary ml-1" fill="currentColor" />
                        </div>
                      </div>
                      <Badge className="absolute top-3 right-3 bg-black/70 text-white">
                        <Clock className="w-3 h-3 mr-1" />
                        {video.duration}
                      </Badge>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        {video.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {video.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{video.views} views</span>
                        <Badge variant="outline" className="text-xs">
                          {cat.id === "all" ? video.category : cat.label}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Featured Playlist */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-xl bg-brew-gradient flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <Badge className="mb-3 bg-primary text-primary-foreground">Featured Playlist</Badge>
              <h2 className="text-2xl font-bold mb-2">Web Development Fundamentals</h2>
              <p className="text-muted-foreground mb-4">
                A curated collection of essential web development concepts every developer should know. 
                From HTML and CSS basics to advanced JavaScript patterns.
              </p>
              <div className="flex items-center gap-4">
                <Button className="bg-primary hover:bg-primary/90">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Playlist
                </Button>
                <span className="text-sm text-muted-foreground">12 videos • 48 minutes</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Learn;
