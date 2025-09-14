import { 
  Smartphone, 
  Globe, 
  Database, 
  Palette, 
  Code, 
  Users,
  BarChart3,
  Brain
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone className="text-primary" size={28} />,
      skills: ["Flutter", "Kotlin/Android", "UI/UX Design", "Firebase"],
      gradient: "from-primary/10 to-primary/5"
    },
    {
      title: "Web Development",
      icon: <Globe className="text-secondary" size={28} />,
      skills: ["HTML", "Tailwind CSS", "JavaScript", "MySQL", "APIs"],
      gradient: "from-secondary/10 to-secondary/5"
    },
    {
      title: "Data & AI",
      icon: <Brain className="text-accent" size={28} />,
      skills: ["Data Analysis", "ML Basics", "AI Tools", "Research"],
      gradient: "from-accent/10 to-accent/5"
    },
    {
      title: "Design",
      icon: <Palette className="text-primary" size={28} />,
      skills: ["Figma", "Canva", "Branding", "Digital Illustrations"],
      gradient: "from-primary/10 to-primary/5"
    },
    {
      title: "Tools & Workflow",
      icon: <Code className="text-secondary" size={28} />,
      skills: ["Git/GitHub", "VS Code", "Android Studio", "Firebase"],
      gradient: "from-secondary/10 to-secondary/5"
    },
    {
      title: "Leadership",
      icon: <Users className="text-accent" size={28} />,
      skills: ["Project Planning", "Team Coordination", "Innovation", "Management"],
      gradient: "from-accent/10 to-accent/5"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning mobile development, web technologies, 
            data analysis, and leadership capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`card-gradient bg-gradient-to-br ${category.gradient} group hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-background/50 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center justify-between p-3 bg-background/30 rounded-lg backdrop-blur-sm"
                  >
                    <span className="font-medium">{skill}</span>
                    <div className="w-2 h-2 bg-accent rounded-full opacity-75"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-4 justify-center">
            {["Flutter", "Full-Stack", "Data Analysis", "UI/UX", "Innovation", "Leadership"].map((highlight, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-accent to-primary text-background rounded-full font-medium shadow-[var(--shadow-accent)] hover:scale-105 transition-transform duration-300"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;