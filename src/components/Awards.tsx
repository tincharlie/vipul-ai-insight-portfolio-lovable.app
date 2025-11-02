import { Award, Code, Trophy, BookOpen } from "lucide-react";
import { Card } from "./ui/card";

const Awards = () => {
  const achievements = [
    {
      icon: Award,
      title: "Certified in Data Science & Analytics",
      description: "Professional certification in advanced data science methodologies",
    },
    {
      icon: Code,
      title: "Virtual Internship - JP Morgan Chase",
      description: "Completed technical program through Forage platform",
    },
    {
      icon: Trophy,
      title: "CI/CD & Real-time Monitoring Excellence",
      description: "Recognized for outstanding contributions in DevOps and monitoring systems",
    },
    {
      icon: BookOpen,
      title: "Technical Contributions",
      description: "Kaggle competitions, PyPI contributions, technical webinars, and 50+ LeetCode problems solved",
    },
  ];

  return (
    <section id="awards" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Honors & {" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Awards
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition for technical excellence and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-smooth glow-blue group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:scale-110 transition-smooth flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
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

export default Awards;
