import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";
const AboutSection = () => {
  return <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I am a detail-oriented Data Analyst with hands-on experience in transforming raw data 
              into actionable insights using tools like Python, SQL, Excel, Power BI, and Tableau. 
              I specialize in data cleaning, transformation, and visualization to support data-driven decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/20 rounded-lg mr-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/30 pl-6 pb-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>2021 - 2025</span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      BE in Computer Science and Engineering
                    </h4>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Paavai Engineering College</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-accent/20 rounded-lg mr-4">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold">Intern Experience</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-accent/30 pl-6 pb-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>March 2025 - August 2025</span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Data Analyst Intern
                    </h4>
                    <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Besant Technologies</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Hands-on projects using SQL, Excel, Power BI, and Python</li>
                      <li>• Created interactive dashboards and performed full-cycle data analysis</li>
                      <li>• Collaborated with teams to deliver data-driven insights</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;