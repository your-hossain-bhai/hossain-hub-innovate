import { ExternalLink, Github, Shield, GraduationCap, ShoppingCart, Smartphone, Rocket, Zap } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "SafeShake",
      subtitle: "Women's Safety App",
      description: "Emergency shake detection app with live location sharing, built with Flutter and Kotlin integration for enhanced security features.",
      tech: ["Flutter", "Kotlin", "Firebase", "GPS"],
      icon: <Shield className="text-accent" size={24} />,
      image: "bg-gradient-to-br from-accent/20 to-accent/5",
      category: "Mobile App",
      status: "Live Project"
    },
    {
      title: "CRAMS",
      subtitle: "Course Registration System",
      description: "Full-stack course registration and advisor management system with real-time updates and automated scheduling.",
      tech: ["React", "Node.js", "MySQL", "REST API"],
      icon: <GraduationCap className="text-primary" size={24} />,
      image: "bg-gradient-to-br from-primary/20 to-primary/5",
      category: "Web Application",
      status: "Completed"
    },
    {
      title: "Sunnah Shop",
      subtitle: "E-commerce Platform",
      description: "Modern e-commerce webpage built with Tailwind CSS, featuring responsive design and optimized user experience.",
      tech: ["HTML", "Tailwind CSS", "JavaScript", "Responsive"],
      icon: <ShoppingCart className="text-secondary" size={24} />,
      image: "bg-gradient-to-br from-secondary/20 to-secondary/5",
      category: "Frontend",
      status: "Completed"
    },
    {
      title: "Online Tech Shop",
      subtitle: "E-commerce Prototype",
      description: "MySQL-driven e-commerce prototype with advanced product management, user authentication, and order processing.",
      tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
      icon: <Smartphone className="text-accent" size={24} />,
      image: "bg-gradient-to-br from-accent/20 to-accent/5",
      category: "Full-Stack",
      status: "Prototype"
    },
    {
      title: "NASA Space Apps Challenge",
      subtitle: "Team Stellar Blasters",
      description: "Innovative space-tech solution developed for NASA's global challenge, focusing on sustainable space exploration technologies.",
      tech: ["Research", "Innovation", "Prototyping", "Presentation"],
      icon: <Rocket className="text-primary" size={24} />,
      image: "bg-gradient-to-br from-primary/20 to-primary/5",
      category: "Innovation",
      status: "Challenge Entry"
    },
    {
      title: "Energy Innovation Challenge",
      subtitle: "Team Innotrix",
      description: "Sustainable energy prototype addressing renewable energy challenges with focus on environmental impact and efficiency.",
      tech: ["Sustainability", "Energy", "Innovation", "Prototyping"],
      icon: <Zap className="text-secondary" size={24} />,
      image: "bg-gradient-to-br from-secondary/20 to-secondary/5",
      category: "Innovation",
      status: "Challenge Entry"
    }
  ];

  const categories = ["All", "Mobile App", "Web Application", "Frontend", "Full-Stack", "Innovation"];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative projects spanning mobile development, web applications, 
            and groundbreaking solutions for real-world challenges.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                index === 0 
                  ? "bg-accent text-accent-foreground shadow-[var(--shadow-accent)]" 
                  : "bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card-gradient group hover:scale-105 transition-all duration-300 overflow-hidden h-full"
            >
              <div className="flex flex-col h-full">
                {/* Project Image/Icon Area */}
                <div className={`${project.image} h-48 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-transparent"></div>
                  <div className="relative z-10 p-4 bg-background/80 rounded-full backdrop-blur-sm">
                    {project.icon}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-sm text-accent-gradient font-medium mb-3">{project.subtitle}</p>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 group/btn">
                    <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">View</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-secondary/10 hover:bg-secondary hover:text-secondary-foreground rounded-lg transition-all duration-300 group/btn">
                    <Github size={16} className="group-hover/btn:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more projects or discuss a collaboration?
          </p>
          <a href="#contact" className="btn-hero">
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;