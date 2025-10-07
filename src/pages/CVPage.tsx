import { Download, ArrowLeft, Briefcase, GraduationCap, Award, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

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
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  John Developer
                </h1>
                <p className="text-xl text-slate-300 mb-4">Senior Frontend Developer</p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>john.dev@example.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>portfolio.dev</span>
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
              <div className="relative pl-8 border-l-2 border-blue-400/30">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-400"></div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white">Senior Frontend Developer</h3>
                  <p className="text-blue-400">TechCorp Inc. • San Francisco, CA</p>
                  <p className="text-slate-500 text-sm">Jan 2022 - Present</p>
                </div>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Led development of enterprise-level React applications serving 100K+ users</li>
                  <li>Reduced page load time by 40% through performance optimization techniques</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                  <li>Implemented comprehensive testing strategy with 90% code coverage</li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-blue-400/30">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-400"></div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white">Frontend Developer</h3>
                  <p className="text-cyan-400">Digital Solutions • Remote</p>
                  <p className="text-slate-500 text-sm">Mar 2020 - Dec 2021</p>
                </div>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Built responsive web applications using React and TypeScript</li>
                  <li>Collaborated with UX designers to implement pixel-perfect designs</li>
                  <li>Integrated RESTful APIs and managed application state</li>
                  <li>Contributed to open-source projects and internal component library</li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-blue-400/30">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white">Junior Frontend Developer</h3>
                  <p className="text-blue-400">StartupXYZ • New York, NY</p>
                  <p className="text-slate-500 text-sm">Jun 2019 - Feb 2020</p>
                </div>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Developed and maintained web applications using JavaScript and React</li>
                  <li>Implemented responsive designs for mobile and desktop platforms</li>
                  <li>Participated in agile development processes and daily stand-ups</li>
                  <li>Fixed bugs and improved application performance</li>
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
                <p className="text-blue-400 mb-1">University of California, Berkeley</p>
                <p className="text-slate-500 text-sm">2015 - 2019 • GPA: 3.8/4.0</p>
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
                  {['Git', 'Vite', 'Webpack', 'Jest', 'Cypress', 'Figma', 'REST APIs', 'Web3'].map((skill) => (
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
                <p className="text-slate-300">AWS Certified Developer - Associate</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <p className="text-slate-300">React Advanced Certification - Meta</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <p className="text-slate-300">Contributed to 15+ open-source projects with 500+ GitHub stars</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <p className="text-slate-300">Speaker at ReactConf 2023 - "Building Performant Web Apps"</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CVPage;
