import { Brain, Code, Database, Cloud } from "lucide-react";
import { Card } from "./ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "Industrial Expertise",
      skills: ["APM Engineering", "OSI Pi Client", "PHD Systems", "Predictive Maintenance", "Anomaly Detection"],
    },
    {
      icon: Cloud,
      title: "Cloud & Data Engineering",
      skills: ["Azure", "AWS S3", "ETL Pipelines", "Pandas", "Real-time Analytics"],
    },
    {
      icon: Code,
      title: "Backend Development",
      skills: ["Python", "Django", "REST APIs", "SQL", "Automation"],
    },
    {
      icon: Database,
      title: "AI/ML & Analytics",
      skills: ["ML/DL", "NLP", "Time Series", "PowerBI", "EDA", "AWS Bedrock", "Terraform"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical {" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise across industrial data science, AI/ML, and cloud-based asset monitoring solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-smooth glow-blue group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-lg bg-primary/10 mb-4 group-hover:scale-110 transition-smooth">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
