import { Code2, Palette, Rocket, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful, intuitive interfaces with attention to detail.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and delivering lightning-fast user experiences.',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge technologies and creative solutions.',
    },
  ];

  return (
    <section id="about" className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A passionate developer dedicated to building exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-2xl backdrop-blur-sm">
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            With years of experience in frontend development, I specialize in creating responsive,
            accessible, and performant web applications. My expertise spans modern frameworks and
            libraries, with a strong focus on React and TypeScript.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            I believe in the power of collaboration and continuous learning. When I'm not coding,
            you'll find me exploring new technologies, contributing to open-source projects, and
            sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
