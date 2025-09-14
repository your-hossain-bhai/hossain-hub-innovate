import muhammadProfile from "@/assets/muhammad-profile.jpg";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{animationDelay: "2s"}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-secondary/20 rounded-full animate-float" style={{animationDelay: "4s"}}></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="mb-6">
              <h2 className="text-lg text-muted-foreground mb-2">Hello, I'm</h2>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-gradient">Muhammad Hossain</span>
              </h1>
              <div className="text-xl lg:text-2xl text-foreground/80 mb-6">
                <span className="text-accent-gradient font-medium">CSE Student</span> | 
                <span className="text-accent-gradient font-medium"> Flutter Developer</span> | 
                <span className="text-accent-gradient font-medium"> Innovator</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Building intelligent, user-friendly, and sustainable tech solutions. 
              Passionate about technology, environmental sustainability, and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#portfolio" className="btn-hero">
                View Portfolio
              </a>
              <a href="#contact" className="btn-primary">
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a 
                href="mailto:muhammadhossain.27.2001@gmail.com"
                className="p-3 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/muhammadhossain27"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/your-hossain-bhai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src={muhammadProfile} 
                alt="Muhammad Hossain"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-background shadow-[var(--shadow-accent)]"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-accent" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;