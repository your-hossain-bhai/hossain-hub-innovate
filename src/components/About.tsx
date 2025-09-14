import { GraduationCap, Award, Users, Target } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "IIUC",
      year: "Expected 2026",
      icon: <GraduationCap className="text-primary" size={24} />
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Chattogram Biggan College",
      year: "2020",
      icon: <Award className="text-secondary" size={24} />
    },
    {
      degree: "Secondary School Certificate",
      institution: "Karnaphuli Paper Mills High School & College",
      year: "2018",
      icon: <Award className="text-accent" size={24} />
    }
  ];

  const softSkills = [
    { skill: "Problem-solving", icon: <Target className="text-primary" size={20} /> },
    { skill: "Leadership", icon: <Users className="text-secondary" size={20} /> },
    { skill: "Communication", icon: <Users className="text-accent" size={20} /> },
    { skill: "Teamwork", icon: <Users className="text-primary" size={20} /> }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate Computer Science student specializing in mobile and web development, 
            with a strong focus on creating innovative solutions for real-world problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="card-gradient">
              <h3 className="text-2xl font-semibold mb-4 text-accent-gradient">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                I'm Muhammad Hossain, a Computer Science & Engineering student at IIUC with a passion for 
                creating technology that makes a difference. My journey in tech started with a curiosity 
                about how applications work, which evolved into expertise in Flutter development and 
                full-stack web development.
              </p>
              <p className="text-muted-foreground mb-4">
                I specialize in building women's safety applications, smart city solutions, and have 
                participated in global innovation challenges including NASA Space Apps Challenge and 
                Energy Innovation Challenge.
              </p>
              <p className="text-muted-foreground">
                Beyond coding, I'm passionate about environmental sustainability and using technology 
                to create positive social impact. I believe in the power of innovation to solve 
                real-world problems and create a better future.
              </p>
            </div>

            {/* Soft Skills */}
            <div className="card-accent">
              <h3 className="text-xl font-semibold mb-4 text-accent-gradient">Core Strengths</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {item.icon}
                    <span className="font-medium">{item.skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-accent-gradient">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="card-gradient">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <span className="inline-block mt-2 px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;