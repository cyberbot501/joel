import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'DeFi Dashboard',
      description: 'A comprehensive Web3 dashboard for tracking cryptocurrency portfolios, DeFi protocols, and real-time market data with beautiful visualizations.',
      tags: ['React', 'Web3.js', 'TypeScript', 'TailwindCSS'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'NFT Marketplace',
      description: 'Modern NFT marketplace with minting capabilities, wallet integration, and smooth animations. Features include auction system and collection management.',
      tags: ['Next.js', 'Ethereum', 'IPFS', 'Smart Contracts'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'AI Content Generator',
      description: 'Advanced AI-powered content generation platform with real-time previews, multiple templates, and seamless user experience.',
      tags: ['React', 'OpenAI', 'TypeScript', 'Vite'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Social Analytics Platform',
      description: 'Comprehensive analytics dashboard for social media insights with interactive charts, real-time data processing, and custom reporting.',
      tags: ['React', 'D3.js', 'REST API', 'TailwindCSS'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-featured e-commerce solution with payment integration, inventory management, and stunning product showcases.',
      tags: ['Next.js', 'Stripe', 'PostgreSQL', 'TypeScript'],
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with drag-and-drop, real-time updates, team workspaces, and productivity analytics.',
      tags: ['React', 'Firebase', 'TypeScript', 'Framer Motion'],
      gradient: 'from-cyan-500 to-teal-500',
    },
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-xl mb-4 flex items-center justify-center`}>
                  <div className="text-6xl font-bold text-white/20">
                    {project.title.substring(0, 2)}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-blue-400/50 transition-all">
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
