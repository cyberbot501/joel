import { Download, ArrowLeft, Briefcase, GraduationCap, Award, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import profiles from '../assets/profile.jpg';

const CVPage = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="relative z-10 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10 print:hidden">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
          >
            <Download className="w-5 h-5" />
            <span>Download PDF</span>
          </button>
        </div>
      </nav>

      {/* CV Content */}
      <div className="max-w-5xl mx-auto px-6 py-24 print:py-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-8 md:p-12 print:border-0 print:bg-transparent">

          {/* Header */}
          <div className="mb-12 pb-8 border-b border-white/10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-5xl font-bold flex-shrink-0">
                <img
                  src={profiles}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Akinrinde Joel
                </h1>
                <p className="text-xl text-slate-300 mb-4">Frontend Developer</p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>softwareengineerjoycy@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+234 808-2850-053</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Oyo state, Nigeria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>Joel.dev</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Professional Summary
              </span>
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Passionate Frontend Developer with 5+ years of experience building responsive, accessible, and performant web applications.
              Specialized in React, TypeScript, and modern web technologies. Proven track record of delivering high-quality products
              that enhance user experience and drive business growth. Strong advocate for clean code, best practices, and continuous learning.
            </p>
          </section>

          {/* Work Experience */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>

          <div className="space-y-8">
  {/* Product Square */}
  <div className="relative pl-8 border-l-2 border-blue-400/30">
    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-400"></div>
    <div className="mb-4">
      <h3 className="text-xl font-semibold text-white">Frontend Developer & Intern Supervisor</h3>
      <p className="text-blue-400">Product Square • Remote</p>
      <p className="text-slate-500 text-sm">Nov 2023 - Oct 2024</p>
    </div>
    <ul className="list-disc list-inside text-slate-300 space-y-2">
      <li>Developed and maintained responsive React-based web applications for clients.</li>
      <li>Collaborated with cross-functional teams to design and build seamless digital products.</li>
      <li>Supervised and guided interns in frontend development, ensuring best practices and clean code.</li>
      <li>Optimized performance and implemented reusable UI components for scalability.</li>
    </ul>
  </div>

  {/* TechLift */}
  <div className="relative pl-8 border-l-2 border-blue-400/30">
    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-400"></div>
    <div className="mb-4">
      <h3 className="text-xl font-semibold text-white">Frontend Developer (Volunteer)</h3>
      <p className="text-cyan-400">TechLift Community • Remote</p>
      <p className="text-slate-500 text-sm">May 2024 - Present</p>
    </div>
    <ul className="list-disc list-inside text-slate-300 space-y-2">
      <li>Volunteering as a frontend developer to build and maintain the TechLift community website.</li>
      <li>Collaborating with the team to design engaging, user-friendly interfaces that improve community interaction.</li>
      <li>Implementing responsive layouts and animations using modern frontend frameworks.</li>
      <li>Contributing to the technical direction of the community’s digital presence.</li>
    </ul>
  </div>

  {/* XanoTech */}
  <div className="relative pl-8 border-l-2 border-blue-400/30">
    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
    <div className="mb-4">
      <h3 className="text-xl font-semibold text-white">Frontend Developer</h3>
      <p className="text-blue-400">XanoTech • Remote</p>
      <p className="text-slate-500 text-sm">Jan 2025 - Present</p>
    </div>
    <ul className="list-disc list-inside text-slate-300 space-y-2">
      <li>Building and optimizing user interfaces for web applications using Next.js, Typerscript and Tailwind CSS.</li>
      <li>Collaborating with backend developers to integrate APIs and enhance application functionality.</li>
      <li>Implementing motion designs and interactive elements for better user engagement.</li>
      <li>Contributing ideas and solutions to improve product design and frontend workflow efficiency.</li>
    </ul>
  </div>
</div>

          </section>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Science in Computer Science</h3>
                <p className="text-blue-400 mb-1">Ladoke Akintola University Of Technology, Nigeria</p>
                {/* <p className="text-slate-500 text-sm">2015 - 2019 • GPA: 3.8/4.0</p> */}
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'JavaScript', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux'].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-3">Tools & Others</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Vite', 'Webpack', 'Figma', 'REST APIs', 'Postman'].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm bg-cyan-500/10 border border-cyan-400/30 rounded-full text-cyan-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Certifications & Achievements
              </span>
            </h2>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <p className="text-slate-300">Postman Certificate - Postman</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <p className="text-slate-300">Acoms Chairman - Assiociation</p>
              </div>
             
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CVPage;
