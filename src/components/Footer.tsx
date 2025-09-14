import { Heart, Mail, Phone, Linkedin, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:muhammadhossain.27.2001@gmail.com",
      icon: <Mail size={20} />
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/muhammadhossain27",
      icon: <Linkedin size={20} />
    },
    {
      name: "GitHub",
      href: "https://github.com/your-hossain-bhai",
      icon: <Github size={20} />
    },
    {
      name: "Phone",
      href: "tel:+8801884810350",
      icon: <Phone size={20} />
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-muted/50 to-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gradient mb-2">Muhammad Hossain</h3>
              <p className="text-muted-foreground mb-4">
                CSE Student | Flutter Developer | Innovator
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building intelligent, user-friendly, and sustainable tech solutions. 
                Passionate about creating technology that makes a positive impact on the world.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="p-3 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-gradient">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-gradient">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">Email</p>
                <a 
                  href="mailto:muhammadhossain.27.2001@gmail.com"
                  className="text-accent hover:text-accent/80 transition-colors duration-300"
                >
                  muhammadhossain.27.2001@gmail.com
                </a>
              </div>
              <div>
                <p className="text-muted-foreground">Phone</p>
                <a 
                  href="tel:+8801884810350"
                  className="text-accent hover:text-accent/80 transition-colors duration-300"
                >
                  +880 1884 810350
                </a>
              </div>
              <div>
                <p className="text-muted-foreground">Location</p>
                <p className="text-foreground">Chittagong, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} Muhammad Hossain. Made with</span>
              <Heart className="text-accent" size={16} />
              <span>and lots of code.</span>
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-sm text-muted-foreground">
                Available for freelance projects
              </span>
              <button
                onClick={scrollToTop}
                className="p-2 bg-accent/10 hover:bg-accent hover:text-accent-foreground rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;