import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  BarChart3, 
  FileSpreadsheet, 
  Presentation, 
  Zap,
  FileCode,
  TrendingUp
} from "lucide-react";

const SkillsSection = () => {
  const skills = [
    { name: "Python", icon: Code, level: 90, category: "Programming" },
    { name: "SQL", icon: Database, level: 95, category: "Database" },
    { name: "Power BI", icon: BarChart3, level: 85, category: "Visualization" },
    { name: "Tableau", icon: Presentation, level: 80, category: "Visualization" },
    { name: "Excel", icon: FileSpreadsheet, level: 90, category: "Analysis" },
    { name: "Pandas", icon: Code, level: 85, category: "Programming" },
    { name: "NumPy", icon: FileCode, level: 80, category: "Programming" },
    { name: "Data Visualization", icon: TrendingUp, level: 88, category: "Analysis" }
  ];

  const getSkillColor = (category: string) => {
    switch (category) {
      case "Programming": return "text-primary";
      case "Database": return "text-accent";
      case "Visualization": return "text-emerald-400";
      case "Analysis": return "text-yellow-400";
      default: return "text-primary";
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proficient in modern data analysis tools and technologies for extracting meaningful insights from complex datasets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-6 text-center">
                  <div className={`p-4 rounded-full ${getSkillColor(skill.category)} bg-current/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className={`h-8 w-8 ${getSkillColor(skill.category)}`} />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{skill.category}</p>
                  
                  {/* Skill Level Bar */}
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-1000 delay-${index * 100}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-muted-foreground">{skill.level}%</span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills Cloud */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-6">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["HTML/CSS", "Flask", "Git", "Jupyter", "Data Cleaning", "ETL", "Statistical Analysis", "Business Intelligence"].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-card/50 border border-border/50 rounded-full text-sm font-medium hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;