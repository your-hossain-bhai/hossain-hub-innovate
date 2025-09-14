import { Calendar, MapPin, Trophy, Users, Rocket, Zap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Team Lead & App Developer",
      company: "SafeShake",
      period: "2025 – Present",
      location: "IIUC, Bangladesh",
      type: "Leadership Role",
      description: "Leading the development of a women's safety app with emergency shake detection and live location sharing. Coordinating a cross-functional team and implementing innovative Flutter and Kotlin solutions.",
      achievements: [
        "Led team of 5 developers in creating life-saving technology",
        "Implemented advanced shake detection algorithms",
        "Integrated real-time location sharing features",
        "Designed intuitive emergency response UI/UX"
      ],
      icon: <Users className="text-accent" size={24} />,
      gradient: "from-accent/10 to-accent/5"
    },
    {
      title: "Co-Leader",
      company: "NASA Space Apps Challenge",
      period: "2025",
      location: "Global Challenge",
      type: "Innovation Challenge",
      description: "Co-led Team Stellar Blasters in developing innovative space-tech solutions for NASA's global challenge, focusing on sustainable space exploration technologies and environmental monitoring.",
      achievements: [
        "Developed space-tech innovation prototype",
        "Collaborated with international participants",
        "Presented solution to NASA evaluation panel",
        "Applied cutting-edge technology for space exploration"
      ],
      icon: <Rocket className="text-primary" size={24} />,
      gradient: "from-primary/10 to-primary/5"
    },
    {
      title: "Co-Founder",
      company: "Team Innotrix",
      period: "2025",
      location: "Energy Innovation Challenge",
      type: "Innovation Team",
      description: "Co-founded Team Innotrix for Energy Innovation Challenge, developing sustainable energy prototypes addressing renewable energy challenges with environmental impact focus.",
      achievements: [
        "Co-founded innovative energy solutions team",
        "Developed sustainable energy prototypes",
        "Focused on environmental impact reduction",
        "Created scalable renewable energy concepts"
      ],
      icon: <Zap className="text-secondary" size={24} />,
      gradient: "from-secondary/10 to-secondary/5"
    },
    {
      title: "Career Club Organizer",
      company: "IIUC",
      period: "2024 – Present",
      location: "IIUC Campus",
      type: "Student Leadership",
      description: "Organizing career development activities, workshops, and networking events for computer science students. Facilitating industry connections and professional skill development programs.",
      achievements: [
        "Organized 10+ career development workshops",
        "Connected students with industry professionals",
        "Facilitated skill development programs",
        "Built strong campus professional network"
      ],
      icon: <Trophy className="text-accent" size={24} />,
      gradient: "from-accent/10 to-accent/5"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of leadership, innovation, and technical excellence across diverse projects 
            and global challenges that shape the future of technology.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col lg:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 w-4 h-4 bg-gradient-to-r from-accent to-primary rounded-full border-4 border-background hidden lg:block transform -translate-x-1/2">
                </div>

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className={`card-gradient bg-gradient-to-br ${exp.gradient} h-full`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-background/50 rounded-xl">
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-accent-gradient font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-3 text-accent-gradient">Key Achievements</h4>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Want to Be Part of My Journey?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              I'm always looking for exciting opportunities to collaborate on innovative projects 
              and make a positive impact through technology.
            </p>
            <a href="#contact" className="btn-hero">
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;