import { Button } from "./ui/button";
import { ArrowRight, Download } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/90" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-primary text-sm font-medium">Data Science Professional</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hello, I'm <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Vipul Shukla
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4">
              Data Scientist | APM Engineer
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Turning Industrial Data into Intelligent Solutions
            </p>

            <p className="text-base text-muted-foreground mb-8 max-w-lg">
              Data Scientist and APM Engineer with 3.5+ years of experience building AI/ML solutions 
              for industrial environments. Skilled in predictive modeling, time series analysis, and 
              Python-based automation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="gradient-primary text-primary-foreground hover:opacity-90 glow-blue"
              >
                View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
              >
                Contact Me <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-full blur-3xl opacity-30 animate-float" />
              <img
                src={profileImg}
                alt="Vipul Shukla"
                className="relative rounded-full w-80 h-80 object-cover border-4 border-primary/30 glow-blue"
              />
              
              <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-lg border border-border glow-blue">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">3.5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
