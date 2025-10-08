const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
      ],
    },
    {
      category: 'Development',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'Git', level: 88 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'ThreeJS', level: 90 },
        { name: 'Figma', level: 80 },
        { name: 'ShadCN', level: 85 },
        { name: 'Postman', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-10 px-6 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-blue-500/50"
                        style={{
                          width: `${skill.level}%`,
                          animation: `slideIn 1s ease-out ${skillIndex * 0.1}s both`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            {['React', 'TypeScript', 'Tailwind', 'Next.js', 'Vite', 'Git', 'Figma', 'Postman'].map(
              (tech, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-blue-400/50 hover:scale-110 transition-all duration-300 cursor-default"
                >
                  <span className="text-slate-300 font-medium">{tech}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
