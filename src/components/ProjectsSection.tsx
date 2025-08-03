import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye, Utensils, BookOpen, BarChart3 } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Variety of Food Recipes With Image Processing",
      description: "AI-powered tool that recognizes food items from images and returns detailed cooking recipes. Built with computer vision and machine learning techniques.",
      technologies: ["Python", "Flask", "HTML/CSS", "OpenCV", "TensorFlow"],
      icon: Utensils,
      githubUrl: "#",
      demoUrl: "#",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Library Management System",
      description: "Comprehensive system for managing book records, transactions, and user accounts with an intuitive command-line interface.",
      technologies: ["Python", "SQL", "SQLite", "CLI"],
      icon: BookOpen,
      githubUrl: "https://github.com/lokeshkumarjagadeesh/Library-Management-System/blob/main/Library.py",
      demoUrl: "https://github.com/lokeshkumarjagadeesh/Library-Management-System",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Project Management Tracker",
      description: "End-to-end dashboarding solution for tracking project performance with interactive visualizations and real-time analytics.",
      technologies: ["Power BI", "Tableau", "Excel", "Python", "SQL"],
      icon: BarChart3,
      githubUrl: "#",
      demoUrl: "#",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my data analysis and development projects, demonstrating proficiency in 
              various technologies and problem-solving approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary" 
                        className="text-xs bg-muted/50 hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button 
                      variant="hero" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="glass" size="lg">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;