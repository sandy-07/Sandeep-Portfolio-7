import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Sandeep Thummala. Built with{" "}
              <Heart className="inline-block text-primary" size={16} /> and passion for cloud technology.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/sandy-07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sandeep-thummala-a94862210/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sandeepthummala007@gmail.com"
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
