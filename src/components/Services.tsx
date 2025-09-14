import { 
  Smartphone, 
  Globe, 
  BarChart3, 
  Palette, 
  Settings,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Flutter App Development",
      description: "Cross-platform mobile applications with native performance, custom UI/UX, and seamless user experiences.",
      icon: <Smartphone className="text-primary" size={32} />,
      features: ["Cross-platform development", "Native performance", "Custom UI/UX", "Firebase integration"],
      gradient: "from-primary/10 to-primary/5",
      accent: "primary"
    },
    {
      title: "Full-Stack Web Development",
      description: "Modern web applications with responsive design, database integration, and scalable architecture.",
      icon: <Globe className="text-secondary" size={32} />,
      features: ["Responsive design", "Database integration", "API development", "Modern frameworks"],
      gradient: "from-secondary/10 to-secondary/5",
      accent: "secondary"
    },
    {
      title: "Data Analysis & AI Solutions",
      description: "Data-driven insights, machine learning integration, and intelligent automation for business growth.",
      icon: <BarChart3 className="text-accent" size={32} />,
      features: ["Data visualization", "ML integration", "Predictive analytics", "Automation"],
      gradient: "from-accent/10 to-accent/5",
      accent: "accent"
    },
    {
      title: "UI/UX & Graphic Design",
      description: "User-centered design solutions, brand identity, and visual communications that engage and convert.",
      icon: <Palette className="text-primary" size={32} />,
      features: ["User research", "Prototyping", "Brand identity", "Visual design"],
      gradient: "from-primary/10 to-primary/5",
      accent: "primary"
    },
    {
      title: "Project Consultation",
      description: "Strategic technology consultation, project planning, and technical guidance for successful implementation.",
      icon: <Settings className="text-secondary" size={32} />,
      features: ["Technology strategy", "Project planning", "Technical guidance", "Innovation consulting"],
      gradient: "from-secondary/10 to-secondary/5",
      accent: "secondary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions from concept to deployment, 
            specializing in mobile apps, web development, and innovative digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`card-gradient bg-gradient-to-br ${service.gradient} group hover:scale-105 transition-all duration-300 h-full`}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-background/50 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold leading-tight">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <button className={`w-full flex items-center justify-center gap-2 py-3 px-4 bg-${service.accent}/10 hover:bg-${service.accent} hover:text-${service.accent}-foreground rounded-lg transition-all duration-300 group/btn`}>
                    <span className="font-medium">Learn More</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl border border-accent/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Let's discuss how I can help bring your ideas to life with innovative technology solutions.
            </p>
            <a href="#contact" className="btn-hero">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;