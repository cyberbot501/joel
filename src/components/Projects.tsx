import { ExternalLink,  } from 'lucide-react';
// import { Github  } from 'lucide-react';
import pg from '../assets/pg.webp';
import va from '../assets/var.png';
import cac from '../assets/cac.png';
import tech from '../assets/tech.png';
import dag from '../assets/gagseer.png';
import tareax from '../assets/tareax.png';

const Projects = () => {
  const projects = [
    {
      title: 'Picture Generator',
      image: pg,
      description: 'A picture Generator site built with NextJS and Unsplash API key.',
      tags: ['Nextjs', 'Javascript', 'API', 'TailwindCSS'],
      gradient: 'from-black to-black',
      code: 'https://github.com/yourusername/picture-generator',
      demo: 'https://picturegenrator.vercel.app/',
    },
    {
      title: 'VAR Market',
      image: va,
      description:
        'This project is a React.js-powered website that incorporates dynamic motion design and 3D elements using Three.js for an engaging visual experience.',
      tags: ['React.js', 'Vite', 'ThreeJS', 'TailwindCSS'],
      gradient: 'from-black to-black',
      code: 'https://github.com/yourusername/var-market',
      demo: 'https://tech-site-henna.vercel.app/',
    },
    {
      title: 'cac-chapel-lautech',
      image: cac,
      description:
        'A responsive church website developed for CAC Chapel, LAUTECH, built with Vite and React.js to provide a smooth and modern user experience.',
      tags: ['React', 'vite', 'scadcn/ui'],
      gradient: 'from-black to-black',
      code: 'https://github.com/yourusername/cac-chapel-lautech',
      demo: 'https://cac-chapel-lautech.vercel.app',
    },
    {
      title: 'Techlift',
      image: tech,
      description:
        'This is a web platform I developed to simplify project submissions. It allows participants to upload and manage their projects for hackathons, weekly challenges, or other tech events.',
      tags: ['React', 'vite', 'Supabase', 'TailwindCSS'],
      gradient: 'from-black to-black',
      code: 'https://github.com/yourusername/techlift',
      demo: 'https://techliftofficial.vercel.app',
    },
    {
      title: 'TereaX',
        image: tareax,
      description:
        'Tereax is an intelligent To-Do application integrated with AI to help users organize tasks efficiently. ',
      tags: ['React.js', 'Supabase', 'TypeScript'],
      gradient: 'from-indigo-500 to-blue-500',
      code: 'https://github.com/yourusername/ecommerce-platform',
      demo: 'https://tarea-x.vercel.app',
    },
     {
      title: 'DAGSeer',
      image: dag,
      description:
        'DAGSeer is a modern BlockDAG-based dApp platform for forecasting future events on-chain.',
      tags: ['Next.js', 'Web 3 integration', 'Tailwind', 'TypeScript'],
      gradient: 'from-indigo-500 to-blue-500',
      code: 'https://github.com/yourusername/ecommerce-platform',
      demo: 'https://dagseer.vercel.app',
    },
  ];

  return (
    <section id="projects" className="py-10 px-6">
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
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {project.image && (
                  <div
                    className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-xl mb-4 flex items-center justify-center overflow-hidden`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                )}

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
                  {/* {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-blue-400/50 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                  )} */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
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
