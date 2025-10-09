import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import image from '../assets/profile copy.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Frontend Developer';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen mx-auto flex items-center justify-center px-20 pt-20">
      <div className="max-w-full w-full  text-center">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="space-y-6 animate-fadeIn">
    <div className='flex flex-col gap-10 md:gap-10 md:flex-row items-center md:justify-between mx-auto '>
           <div className='flex flex-col text-center md:text-left'>
           <div className="inline-block w-fit px-4 py-2 bg-blue-500/10 border    border-blue-500/30 rounded-full backdrop-blur-sm mb-4">
            <span className="text-blue-400 text-sm">Welcome to my portfolio</span>
          </div>

         
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Creative
            </span>
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-white h-16 md:h-20">
            {displayText}
            <span className={`inline-block w-0.5 h-8 md:h-12 bg-cyan-400 ml-1 ${isTypingComplete ? 'animate-blink' : ''}`} />
          </h2>

          <p className="text-slate-400 pt-10 md:pt-0 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            I'm Akinrinde Joel, a passionate frontend developer. <br />
            Crafting exceptional digital experiences with modern web technologies.
            Passionate about clean code, beautiful interfaces, and seamless user interactions.
          </p>

          <div className="flex items-center justify-start gap-4 pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg backdrop-blur-sm transition-all hover:scale-110 hover:border-blue-400/50"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg backdrop-blur-sm transition-all hover:scale-110 hover:border-blue-400/50"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:dev@example.com"
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg backdrop-blur-sm transition-all hover:scale-110 hover:border-blue-400/50"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
       </div>



           <div className="max-w-[400px] max-h-[400px] mx-auto  rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 animate-fadeIn">
            <img
              src={image}
              alt="Profile"
              className="w-full h-full rounded-full object-cover "
            />
          </div>
    </div>


          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
            >
              View My Works
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-white/5 border border-white/10 rounded-lg font-medium backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
