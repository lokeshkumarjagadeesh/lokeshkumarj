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
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Enhanced animated background mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/25 rounded-full blur-3xl animate-drift"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/20 rounded-full blur-2xl animate-gradient-shift"></div>
        <div className="absolute top-3/4 left-1/6 w-48 h-48 bg-accent/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/6 right-1/6 w-56 h-56 bg-primary/25 rounded-full blur-2xl animate-pulse-glow delay-2000"></div>
      </div>
      
      {/* Grid overlay for tech aesthetic */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image Frame */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-gradient-card border-4 border-primary/30 shadow-glow overflow-hidden">
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