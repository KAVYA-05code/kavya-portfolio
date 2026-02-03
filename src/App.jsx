import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "certifications", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Intro Popup Animation */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
              className="relative"
            >
              <motion.img
                src="/me profile.jpeg"
                alt="Kavya Dayal"
                className="w-64 h-64 rounded-full border-8 border-pink-400 shadow-2xl object-cover"
                initial={{ boxShadow: "0 0 0px rgba(236, 72, 153, 0)" }}
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(236, 72, 153, 0.8)",
                    "0 0 80px rgba(236, 72, 153, 0.6)",
                    "0 0 40px rgba(236, 72, 153, 0.8)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
              >
                <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">
                  Hello! I'm{" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Kavya Dayal
                  </motion.span>
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="text-2xl text-pink-300 text-center"
                >
                  Let's create something amazing ✨
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              onClick={() => setShowIntro(false)}
              className="absolute top-8 right-8 text-white hover:text-pink-400 transition-colors"
            >
              <FaTimes size={32} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 min-h-screen text-white font-['Space_Grotesk'] scroll-smooth overflow-x-hidden">
        <head>
          <title>Kavya Dayal | Creative Developer</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        </head>

        {/* Floating Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              rotate: [0, 360],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 left-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
              rotate: [360, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"
          />
        </div>

        {/* Navbar */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-50 flex justify-between items-center px-12 py-6 backdrop-blur-md bg-white/5 border-b border-white/10 sticky top-0"
        >
          <motion.h1
            className="text-4xl font-['Syne'] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
            whileHover={{ scale: 1.05 }}
          >
            KAVYA DAYAL
          </motion.h1>
          <div className="flex space-x-8 font-medium text-lg">
            {["About", "Skills", "Projects", "Certifications", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative transition-colors duration-300 ${
                  currentSection === item.toLowerCase() ? "text-pink-400" : "text-gray-300 hover:text-white"
                }`}
                whileHover={{ y: -2 }}
              >
                {item}
                {currentSection === item.toLowerCase() && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400"
                  />
                )}
              </motion.a>
            ))}
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section id="home" className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-12 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse" />
              <img
                src="/me profile.jpeg"
                alt="Kavya Dayal"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-pink-400 shadow-2xl"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-7xl md:text-8xl font-['Syne'] font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                  Creative
                </span>
                <br />
                <span className="text-white">Developer</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-2xl mb-8 text-gray-300 leading-relaxed"
            >
              Full Stack Developer • AR/VR Enthusiast • Game Designer • UI/UX Creator
              <br />
              <span className="text-pink-400">Building immersive digital experiences</span> that merge
              technology with creativity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-6"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-pink-500/50 transition-shadow"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-pink-400 text-pink-400 px-10 py-4 rounded-full font-semibold text-lg hover:bg-pink-400/10 transition-colors"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="relative z-10 px-12 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-6xl font-['Syne'] font-bold mb-12 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                About Me
              </span>
            </h3>
            <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10">
              <p className="text-xl leading-relaxed text-gray-300">
                I'm a passionate{" "}
                <span className="text-pink-400 font-semibold">Full Stack Developer</span> who thrives on
                creating seamless, scalable, and visually stunning web applications. Beyond traditional web
                development, I specialize in crafting{" "}
                <span className="text-purple-400 font-semibold">immersive AR/VR experiences</span>, designing
                engaging games with{" "}
                <span className="text-indigo-400 font-semibold">Unity</span>, and bringing ideas to life
                through <span className="text-pink-400 font-semibold">UI/UX design in Figma</span>.
                <br />
                <br />
                My mission is to blend functionality with creativity, delivering digital experiences that not
                only work flawlessly but also captivate and inspire users. Whether it's building interactive
                web apps, developing virtual worlds, or designing intuitive interfaces, I'm always pushing
                the boundaries of what's possible.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative z-10 px-12 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-6xl font-['Syne'] font-bold mb-16 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Tech Arsenal
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {[
                { name: "HTML5", color: "from-orange-500 to-red-500" },
                { name: "CSS3", color: "from-blue-500 to-indigo-500" },
                { name: "JavaScript", color: "from-yellow-500 to-orange-500" },
                { name: "React.js", color: "from-cyan-500 to-blue-500" },
                { name: "Node.js", color: "from-green-500 to-emerald-500" },
                { name: "Express.js", color: "from-gray-500 to-slate-500" },
                { name: "MongoDB", color: "from-green-600 to-emerald-600" },
                { name: "MySQL", color: "from-blue-600 to-indigo-600" },
                { name: "Unity", color: "from-purple-500 to-pink-500" },
                { name: "AR/VR", color: "from-pink-500 to-rose-500" },
                { name: "Figma", color: "from-purple-600 to-pink-600" },
                { name: "TailwindCSS", color: "from-cyan-400 to-blue-400" },
                { name: "Python", color: "from-blue-500 to-yellow-500" },
                { name: "Firebase", color: "from-yellow-500 to-orange-500" },
                { name: "Git & GitHub", color: "from-gray-700 to-gray-900" },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`relative group bg-gradient-to-br ${skill.color} p-6 rounded-2xl shadow-lg cursor-pointer overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="relative z-10 text-white font-semibold text-center text-lg">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative z-10 px-12 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-6xl font-['Syne'] font-bold mb-16 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Featured Work
              </span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
               
                {
                  name: "Task Management Pro",
                  desc: "A sleek productivity app with real-time collaboration, drag-and-drop task organization, and beautiful animations.",
                  tech: ["React.js", "TailwindCSS", "Firebase"],
                  gradient: "from-blue-600 to-cyan-600",
                  live: "https://task-tau-indol.vercel.app/",
                  github: "https://github.com/KAVYA-05code/task",
                },
                {
                  name: "Peer Project Hub",
                  desc: "A collaborative platform where developers share projects, get feedback, and build together. Full-stack MERN application.",
                  tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
                  gradient: "from-pink-600 to-rose-600",
                  live: "https://peer-project-hub.vercel.app/",
                  github: "https://github.com/KAVYA-05code/frontend-project",
                },
                {
                  name: "TripAdvisor Clone",
                  desc: "Responsive travel website featuring hotel listings, search functionality, and stunning UI with modern CSS techniques.",
                  tech: ["HTML5", "CSS3", "Flexbox", "Media Queries"],
                  gradient: "from-emerald-600 to-teal-600",
                  live: "https://kavya-05code.github.io/trip-advisor/",
                  github: "https://github.com/KAVYA-05code/trip-advisor",
                },
                
              ].map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-pink-400/50 transition-all"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                  <div className="relative p-8">
                    <h4 className="text-2xl font-['Syne'] font-bold mb-4 text-white group-hover:text-pink-400 transition-colors">
                      {project.name}
                    </h4>
                    <p className="mb-6 text-gray-400 leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-pink-300 border border-pink-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg text-center transition-colors border border-white/20"
                      >
                        GitHub
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 bg-gradient-to-r ${project.gradient} text-white py-2 rounded-lg text-center transition-all`}
                      >
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="relative z-10 px-12 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-6xl font-['Syne'] font-bold mb-16 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Certifications
              </span>
            </h3>
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {[
                { title: "Full Stack Web Development", img: "/full stack.png", color: "from-blue-500 to-purple-500" },
                { title: "Web Developer Internship", img: "/intern.png", color: "from-pink-500 to-rose-500" },
                { title: "Data Visualisation - TATA [FORAGE]", img: "/tata.png", color: "from-emerald-500 to-cyan-500" },
              ].map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="group relative bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-pink-400/50 transition-all"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative p-6">
                    <div className="w-full h-64 bg-white rounded-2xl overflow-hidden shadow-xl mb-6">
                      <motion.img
                        src={cert.img}
                        alt={cert.title}
                        className="w-full h-full object-contain p-4"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <h4 className="text-xl font-['Syne'] font-semibold text-center text-white group-hover:text-pink-400 transition-colors">
                      {cert.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative z-10 px-12 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-6xl font-['Syne'] font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Let's Connect
              </span>
            </h3>
            <p className="text-2xl text-gray-300 mb-12">
              Have a project in mind? Let's create something extraordinary together!
            </p>
            <div className="flex justify-center gap-8 mb-12">
              {[
                { Icon: FaEnvelope, href: "mailto:kavyadayal@gmail.com", color: "from-pink-500 to-rose-500" },
                { Icon: FaLinkedin, href: "https://www.linkedin.com/in/kavya-dayal-53a58327a/", color: "from-blue-500 to-indigo-500" },
                { Icon: FaGithub, href: "https://github.com/KAVYA-05code", color: "from-purple-500 to-pink-500" },
              ].map(({ Icon, href, color }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className={`bg-gradient-to-br ${color} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow`}
                >
                  <Icon size={40} className="text-white" />
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10"
            >
              <p className="text-gray-300 text-lg">
                Whether you need a stunning web application, an immersive AR/VR experience, or a beautifully
                designed interface, I'm here to bring your vision to life. Let's innovate together!
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 text-center py-8 border-t border-white/10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            © 2026 Kavya Dayal. Crafted with 💖 and lots of ☕
          </motion.p>
        </footer>
      </div>
    </>
  );
};

export default App;
