import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Duality AI - Smart Object Detection for Space Station Safety",
      description:
        "Built an AI-based object detection system using YOLO for space station safety at the Hack with Hyderabad hackathon. Trained on Google Colab (mAP50 ≈ 0.75) and deployed a Gradio demo for real-time detection.",
      technologies: ["Python", "YOLO", "Google Colab", "Gradio", "Computer Vision"],
      github: "https://github.com/sandy-07/Duality-ai-space-station-safety-object-detection-2",
      demo: "https://www.linkedin.com/feed/update/urn:li:activity:7375808350829289472/",
      highlights: [
        "Real-time object detection for space safety",
        "mAP50 accuracy of ~0.75",
        "Gradio-based interactive demo",
      ],
    },
    {
      title: "Breast Cancer Classification using Federated Learning",
      description:
        "Developed an automated breast cancer detection system using a federated learning framework to enhance accuracy and data privacy. Achieved high-performance results through Python and database integration.",
      technologies: ["Python", "Federated Learning", "Machine Learning", "Healthcare AI"],
      github: "https://github.com/sandy-07/Breast-cancer-detection-using-histopathological-images",
      demo: "https://www.linkedin.com/feed/update/urn:li:activity:7305462547543990273/",
      highlights: [
        "Privacy-preserving federated learning approach",
        "High accuracy in cancer classification",
        "Histopathological image analysis",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Personal <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions leveraging AI, machine learning, and cloud technologies to solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-card to-secondary/30 border-primary/20 hover-glow transition-all duration-300 flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Key Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full">
                      <Github className="mr-2" size={18} />
                      Code
                    </Button>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="default" className="w-full hover-glow">
                      <ExternalLink className="mr-2" size={18} />
                      Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
