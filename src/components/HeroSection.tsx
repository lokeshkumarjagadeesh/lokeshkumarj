import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Eye } from "lucide-react";
import profileImage from "@/assets/lokesh.jpg";
const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1pAeCi-nDnJbXfPGISZBb4816z4u5GgAb/view?usp=drivesdk', '_blank');
  };
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-professional overflow-hidden">
      {/* Professional subtle overlay */}
      <div className="absolute inset-0 bg-gradient-overlay opacity-30"></div>
      
      {/* Clean geometric grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 0.5px, transparent 0.5px), linear-gradient(90deg, hsl(var(--primary)) 0.5px, transparent 0.5px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Subtle accent elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-accent/8 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image Frame */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-gradient-subtle border-2 border-primary/20 shadow-elegant overflow-hidden">
                <img src={profileImage} alt="Lokeshkumar J" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Lokeshkumar J</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Data Analyst
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed px-0 mx-[82px]">Skilled in transforming raw data into actionable insights using Analytical Tools. Focused on delivering clean, meaningful analytics that support smart business decisions.</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button variant="hero" size="lg" onClick={scrollToProjects} className="group">
              <Eye className="mr-2 h-5 w-5" />
              View My Work
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg" onClick={downloadResume}>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;