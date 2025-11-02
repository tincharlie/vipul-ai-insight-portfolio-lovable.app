import { Bot, TrendingUp, Workflow, BarChart3 } from "lucide-react";
import { Card } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Model Development",
      description: "Building custom machine learning and deep learning models for predictive analytics and intelligent automation in industrial environments.",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics for Industrial Assets",
      description: "Leveraging time series analysis and ML models to predict asset failures, optimize maintenance schedules, and reduce downtime.",
    },
    {
      icon: Workflow,
      title: "Data Pipeline Design",
      description: "Creating robust ETL pipelines for real-time data ingestion from OSI Pi, PHD systems, and cloud platforms.",
    },
    {
      icon: BarChart3,
      title: "Dashboard Development",
      description: "Designing interactive dashboards for L1/L2 monitoring, sensor analytics, and asset performance tracking.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My {" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive data science solutions to transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-smooth glow-blue group"
              >
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:scale-110 transition-smooth">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
