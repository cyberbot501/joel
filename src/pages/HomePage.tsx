import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const HomePage = () => {
  return (
    <>
      <Navigation />

      <main className="relative z-10  items-center  max-w-[1500px] mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-slate-400">© 2025 Joel Frontend Developer Portfolio.</p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
