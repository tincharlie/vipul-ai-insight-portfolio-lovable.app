import { Building2, Calendar, Wrench } from "lucide-react";
import { Card } from "./ui/card";

const Portfolio = () => {
  const experiences = [
    {
      company: "Honeywell",
      period: "Mar 2023 - Present",
      position: "Data Scientist | APM Engineer",
      project: "L1 & L2 Monitoring System & Sensor Prediction",
      description: "Developed predictive models and real-time analytics dashboards for asset health monitoring. Built automation tools using Python for XML parsing, Excel report generation, and Streamlit applications for engineering teams.",
      technologies: ["TensorFlow", "PyTorch", "ML/DL", "OSI Pi Client", "Azure", "Docker", "Kubernetes", "Python", "Streamlit"],
      achievements: [
        "Built L1 & L2 monitoring dashboards delivering $200K+ value",
        "Real-time sensor analytics platform for predictive maintenance",
        "Anomaly detection models with 95% accuracy",
        "Python-based automation tools for XML parsing and reporting",
        "Complete ML-Ops deployment pipeline",
      ],
    },
    {
      company: "I-Clarity IT Services",
      period: "Apr 2022 - Mar 2023",
      position: "Data Analyst",
      project: "Material Consumption Forecasting",
      description: "Implemented time series forecasting models and predictive analytics for procurement optimization using logistic regression and advanced statistical modeling.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Time Series Analysis", "Logistic Regression"],
      achievements: [
        "Time series forecasting for inventory management",
        "Predictive modeling for procurement optimization",
        "Reduced material waste by 25%",
        "Automated forecasting dashboards",
      ],
    },
    {
      company: "HigherEdLab",
      period: "Feb 2022 - Dec 2022",
      position: "Data Scientist",
      project: "Sales Prediction & Customer Analytics",
      description: "Built predictive models for customer behavior, trend analysis, and data-driven marketing strategies to optimize sales performance and customer retention.",
      technologies: ["Python", "SQL", "Machine Learning", "Data Visualization", "Statistical Analysis"],
      achievements: [
        "Customer retention prediction models",
        "Trend analysis for marketing strategies",
        "Increased customer retention by 20%",
        "Data-driven sales optimization insights",
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional {" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering impactful data science solutions across diverse industries
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-smooth glow-blue"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-lg bg-primary/10">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-primary font-medium mb-3">{exp.position}</p>
                  
                  <div className="flex items-start gap-2 mb-4">
                    <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{exp.project}</p>
                      <p className="text-muted-foreground text-sm mt-1">{exp.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-foreground mb-2">Key Achievements:</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
