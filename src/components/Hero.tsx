import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,93,158,0.1),transparent_50%)]" />
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-2">
            <p className="text-muted-foreground text-lg">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              Sandeep <span className="gradient-text">Thummala</span>
            </h1>
          </div>
          
          <div className="space-y-4">
            <p className="text-xl text-primary font-semibold">AWS Certified Cloud Practitioner</p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Seeking an entry-level position to start my career in cloud and DevOps. 
              Eager to contribute my skills and grow within a dynamic team and environment.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="default"
              size="lg"
              onClick={() => scrollToSection("connect")}
              className="hover-glow"
            >
              <Mail className="mr-2" />
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
            <a href="/Sandeep_Thummala_Resume.pdf" download>
              <Button variant="accent" size="lg" className="hover-glow">
                <Download className="mr-2" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/sandy-07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-glow"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sandeep-thummala-a94862210/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-glow"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sandeepthummala007@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-glow"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gradient-to-br from-amber-100 to-amber-200 p-2 shadow-2xl border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
              <img
                src={profileImage}
                alt="Sandeep Thummala"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
