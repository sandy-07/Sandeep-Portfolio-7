import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Cloud,
  Code,
  Database,
  Terminal,
  GitBranch,
  Cog,
  Users,
  Brain,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & AWS Services",
      icon: Cloud,
      skills: [
        "EC2",
        "S3",
        "IAM",
        "VPC",
        "RDS",
        "Lambda",
        "CloudFront",
        "CloudFormation",
        "OCI (Oracle Cloud Infrastructure)",
      ],
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "SQL", "HTML", "CSS"],
    },
    {
      title: "Operating Systems",
      icon: Terminal,
      skills: ["Linux", "Windows"],
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub"],
    },
    {
      title: "DevOps & Automation",
      icon: Cog,
      skills: ["CI/CD", "Jenkins", "Docker", "Ansible", "Chef", "Maven", "Apache Tomcat"],
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      skills: ["YOLO", "Federated Learning", "Computer Vision", "Model Training", "Google Colab"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["SQL", "RDS", "Database Integration"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Problem-Solving", "Analytical Thinking", "Communication", "Team Collaboration"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive skill set spanning cloud infrastructure, development, DevOps, and AI/ML technologies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="hover-glow transition-all duration-300 bg-gradient-to-br from-card to-secondary/30 border-primary/20"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="text-primary" size={24} />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
