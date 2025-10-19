import { Award, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Certifications = () => {
  const certifications = [
    {
      title: "Amazon AWS re/Start Program",
      description:
        "Completed the AWS re/Start program with hands-on labs in cloud computing, Linux, Networking and core AWS services. Gained the AWS Cloud Practitioner certification.",
      organization: "Training Partner: Tech Mahindra SMART Academy",
      icon: Award,
    },
    {
      title: "Oracle Cloud Infrastructure (OCI) Associate",
      description:
        "Demonstrated expertise in OCI core services like networking, storage, compute, and security. Skilled in designing scalable, secure, and cost-optimized cloud architectures.",
      organization: "Oracle",
      icon: Award,
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Training & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Industry-recognized certifications and comprehensive training programs that validate my cloud expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card
                key={index}
                className="hover-glow transition-all duration-300 bg-gradient-to-br from-card to-secondary/30 border-primary/20"
              >
                <CardHeader>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="p-3 rounded-lg bg-primary/10 mt-1">
                      <IconComponent className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{cert.title}</CardTitle>
                      <CardDescription className="text-xs font-semibold text-primary/80">
                        {cert.organization}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
