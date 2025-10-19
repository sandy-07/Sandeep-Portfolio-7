import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const About = () => {
  const education = [
    {
      institution: "JNTUH University College of Engineering, Jagtial",
      degree: "Bachelor of Technology in Information Technology",
      period: "2020-24",
      grade: "CGPA: 7.12",
    },
    {
      institution: "Dr. Bhim Rao Ramji Centenary Telangana Social Welfare Jr(B), Sanga Reddy",
      degree: "Intermediate - MPC Stream",
      period: "2018-20",
      grade: "Percentage: 93%",
    },
    {
      institution: "New Little Flowers School, Khammam",
      degree: "SSC",
      period: "2018",
      grade: "CGPA: 9.5",
    },
  ];

  const certifications = [
    {
      title: "Amazon AWS re/Start Program",
      description:
        "Completed the AWS re/Start program with hands-on labs in cloud computing, Linux, Networking and core AWS services. Gained the AWS Cloud Practitioner certification.",
      organization: "Training Partner: Tech Mahindra SMART Academy",
    },
    {
      title: "Oracle Cloud Infrastructure (OCI) Associate",
      description:
        "Demonstrated expertise in OCI core services like networking, storage, compute, and security. Skilled in designing scalable, secure, and cost-optimized cloud architectures.",
      organization: "Oracle",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate cloud and DevOps enthusiast with strong foundations in AWS and a drive to build scalable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="text-primary" size={32} />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="hover-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.institution}</CardTitle>
                    <CardDescription>{edu.degree}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{edu.period}</span>
                      <span className="text-primary font-semibold">{edu.grade}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="text-primary" size={32} />
              <h3 className="text-2xl font-bold">Training & Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription className="text-xs">{cert.organization}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Career Objective */}
        <Card className="bg-gradient-to-br from-card to-secondary/30 border-primary/20 hover-glow transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl">Career Objective</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              I am a certified AWS Cloud Practitioner seeking an entry level position to start my career in cloud and DevOps. 
              I am eager to contribute my skills and grow within a dynamic team and environment. Looking forward to being part 
              of the company's cloud journey and success.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
