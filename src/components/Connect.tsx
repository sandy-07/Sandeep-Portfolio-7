import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

const Connect = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sandeepthummala007@gmail.com",
      link: "mailto:sandeepthummala007@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9704925356",
      link: "tel:+919704925356",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "sandy-07",
      link: "https://github.com/sandy-07",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Sandeep Thummala",
      link: "https://www.linkedin.com/in/sandeep-thummala-a94862210/",
    },
  ];

  return (
    <section id="connect" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about cloud and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <a
                key={index}
                href={contact.link}
                target={contact.link.startsWith("http") ? "_blank" : undefined}
                rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <Card className="hover-glow transition-all duration-300 bg-gradient-to-br from-card to-secondary/30 border-primary/20 h-full cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="text-primary" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{contact.label}</CardTitle>
                        <CardDescription className="text-sm mt-1">{contact.value}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </a>
            );
          })}
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Whether you want to discuss a project, need cloud consulting, or just want to say hello, 
              feel free to reach out through any of the channels above.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:sandeepthummala007@gmail.com">
                <Button variant="default" size="lg" className="hover-glow">
                  <Mail className="mr-2" />
                  Send Email
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/sandeep-thummala-a94862210/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <Linkedin className="mr-2" />
                  LinkedIn Profile
                </Button>
              </a>
              <a href="https://github.com/sandy-07" target="_blank" rel="noopener noreferrer">
                <Button variant="accent" size="lg" className="hover-glow">
                  <Github className="mr-2" />
                  GitHub Profile
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Connect;
