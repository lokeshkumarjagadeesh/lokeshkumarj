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
      {/* Multi-layered dynamic background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-70"></div>
      
      {/* Aurora effect */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-aurora animate-aurora"></div>
      </div>
      
      {/* Enhanced particle system with multiple layers */}
      <div className="absolute inset-0 opacity-50">
        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/25 rounded-full blur-3xl animate-pulse-glow shadow-aurora"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-drift shadow-glow"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/30 rounded-full blur-2xl animate-gradient-shift"></div>
        
        {/* Medium floating elements */}
        <div className="absolute top-3/4 left-1/6 w-48 h-48 bg-accent/35 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/6 right-1/6 w-56 h-56 bg-primary/25 rounded-full blur-2xl animate-pulse-glow delay-2000"></div>
        <div className="absolute bottom-1/6 left-1/2 w-40 h-40 bg-accent/30 rounded-full blur-3xl animate-drift delay-3000"></div>
        
        {/* Small sparkle particles */}
        <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-primary rounded-full animate-sparkle delay-500"></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-sparkle delay-1500"></div>
        <div className="absolute bottom-1/3 left-2/3 w-5 h-5 bg-primary/80 rounded-full animate-sparkle delay-2500"></div>
        <div className="absolute top-1/5 right-1/5 w-2 h-2 bg-accent rounded-full animate-sparkle delay-3500"></div>
      </div>
      
      {/* Geometric elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Orbiting elements */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-orbit"></div>
        </div>
        <div className="absolute top-1/3 left-1/4 w-1 h-1">
          <div className="w-1 h-1 bg-accent rounded-full animate-orbit delay-1000" style={{animationDuration: '20s'}}></div>
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-1/3 w-20 h-20 border border-primary/30 rotate-45 animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border border-accent/30 animate-gradient-shift"></div>
      </div>
      
      {/* Enhanced grid overlay */}
      <div className="absolute inset-0 opacity-15">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      
      {/* Radial light beams */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
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