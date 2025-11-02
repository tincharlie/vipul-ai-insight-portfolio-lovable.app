import { Mail, Github, Linkedin, Trophy } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Contact = () => {
  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com",
      handle: "@vipulshukla",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com",
      handle: "Vipul Shukla",
    },
    {
      icon: Trophy,
      name: "Kaggle",
      url: "https://kaggle.com",
      handle: "vipulshukla",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In {" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on your next data science project
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card border-border glow-blue text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Ready to Start a Project?</h3>
              <p className="text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground hover:opacity-90 glow-blue"
                onClick={() => window.location.href = "mailto:vipulshukla999@gmail.com"}
              >
                <Mail className="mr-2 h-5 w-5" />
                vipulshukla999@gmail.com
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:border-primary"
                onClick={() => window.location.href = "tel:+918827737370"}
              >
                <Mail className="mr-2 h-5 w-5" />
                +91 8827737370
              </Button>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-6">Connect with me on:</p>
              <div className="grid md:grid-cols-3 gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Card className="p-4 bg-background border-border hover:border-primary/50 transition-smooth">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:scale-110 transition-smooth">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="text-left">
                            <p className="font-medium text-sm">{link.name}</p>
                            <p className="text-xs text-muted-foreground">{link.handle}</p>
                          </div>
                        </div>
                      </Card>
                    </a>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>© 2024 Vipul Shukla. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
