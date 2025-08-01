import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, BookOpen, TrendingUp, Code } from "lucide-react";

const BlogSection = () => {
  const articles = [
    {
      title: "How I Built My First Library Management System",
      summary: "A detailed walkthrough of building a complete library management system using Python and SQL, including challenges faced and lessons learned.",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      category: "Development",
      icon: BookOpen,
      color: "text-blue-400"
    },
    {
      title: "Top 5 Tips for Clean Data Visualization in Power BI",
      summary: "Essential best practices for creating clear, impactful visualizations that tell compelling data stories and drive business decisions.",
      readTime: "6 min read",
      date: "Nov 28, 2024",
      category: "Data Viz",
      icon: TrendingUp,
      color: "text-green-400"
    },
    {
      title: "Python vs SQL: When to Use Which for Data Analysis",
      summary: "A comprehensive comparison of Python and SQL capabilities, with practical examples of when each tool excels in data analysis workflows.",
      readTime: "10 min read",
      date: "Nov 10, 2024",
      category: "Tutorial",
      icon: Code,
      color: "text-purple-400"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Articles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sharing insights, tutorials, and lessons learned from my journey in data analysis and software development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card 
                key={article.title}
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 group cursor-pointer"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-muted/50 rounded-lg">
                        <article.icon className={`h-5 w-5 ${article.color}`} />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors duration-300">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.summary}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group/btn p-0 h-auto py-2"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="glass" size="lg">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;