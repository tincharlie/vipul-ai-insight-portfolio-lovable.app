import { GraduationCap, Briefcase } from "lucide-react";
import { Card } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Turning complex data into actionable insights and intelligent solutions
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Professional Summary */}
          <Card className="p-8 bg-card border border-border hover:border-primary/50 transition-all glow-blue">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Professional Summary</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Data Scientist and APM Engineer with 3.5+ years of experience building AI/ML solutions
                  for industrial environments. Skilled in predictive modeling, time series analysis, and
                  Python-based automation. Expertise in OSI Pi Client, PHD systems, and Azure cloud solutions
                  for real-time analytics and asset performance monitoring.
                </p>
                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-1">Languages:</p>
                  <p className="text-sm text-muted-foreground">Hindi, English, German, Marathi</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Education */}
          <Card className="p-8 bg-card border border-border hover:border-primary/50 transition-all glow-blue">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">B.Tech in Mechanical & Automation Engineering</p>
                    <p className="text-sm text-muted-foreground">Amity University, Gwalior, MP</p>
                    <p className="text-xs text-muted-foreground">Aug 2016 - Oct 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;