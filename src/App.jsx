
      import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 min-h-screen text-gray-800 font-sans scroll-smooth">
      <head>
        <title>Kavya Dayal | Portfolio</title>
        <link rel="icon" href="https://via.placeholder.com/32" type="image/png" />
        <meta name="description" content="Full Stack Developer Portfolio of Kavya Dayal" />
      </head>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 shadow-lg bg-white bg-opacity-50 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 drop-shadow-lg">KAVYA DAYAL</h1>
        <div className="space-x-5 font-medium">
          <a href="#about" className="hover:text-purple-600">About</a>
          <a href="#skills" className="hover:text-purple-600">Skills</a>
          <a href="#projects" className="hover:text-purple-600">Projects</a>
          <a href="#contact" className="hover:text-purple-600">Contact</a>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-center h-[70vh] text-center px-5 gap-10" data-aos="fade-up">
        <div className="flex-shrink-0">
          <img 
            src="/pic.jpg"
            alt="Profile" 
            className="w-48 h-48 object-cover rounded-full border-4 border-purple-400 shadow-lg" 
          />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Hi! I'm a Full Stack Developer</h2>
          <p className="text-lg mb-6">Turning ideas into scalable and elegant digital experiences.</p>
          <a
            href="#projects"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:scale-105 transition-transform"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-10 py-20" data-aos="fade-up">
        <h3 className="text-3xl font-bold mb-5 text-center text-purple-700">About Me</h3>
        <p className="max-w-3xl mx-auto text-lg leading-8 text-center">
          I'm a passionate and dedicated Full Stack Developer who thrives at building robust and efficient web solutions. Skilled in both frontend and backend technologies, I enjoy turning complex problems into simple, beautiful interfaces. My expertise includes working with modern libraries like React.js for interactive UIs and Node.js/Express.js for backend APIs, along with databases like MongoDB and MySQL. I love continuous learning, exploring new frameworks, and collaborating on impactful projects that make a difference.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-10 py-20 bg-white bg-opacity-70 backdrop-blur-md rounded-lg mx-5 my-10 shadow-lg" data-aos="fade-up">
        <h3 className="text-3xl font-bold mb-10 text-center text-purple-700">Tech Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'FireBase', 'Python', 'Java', 'C++', 'TailwindCSS', 'Git & GitHub'].map(skill => (
            <div key={skill} className="bg-gradient-to-r from-purple-400 to-pink-400 py-4 rounded-xl shadow-md hover:scale-105 transition-transform">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-10 py-20" data-aos="fade-up">
        <h3 className="text-3xl font-bold mb-10 text-center text-purple-700">Projects</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { name: 'TripAdvisor Clone', desc: 'Travel website clone with search & hotel listings.', tech: 'HTML, CSS, Flexbox, Media Queries', live: 'https://kavya-05code.github.io/trip-advisor/', github: 'https://github.com/KAVYA-05code/trip-advisor' },
            { name: 'Task Management', desc: 'A task management app for our todo activites', tech: 'HTML,TAILWIND CSS,REACTJS', live:"https://task-tau-indol.vercel.app/" ,github: 'https://github.com/KAVYA-05code/task' },
            { name: 'Peer-Project-Hub', desc: 'A full stack web application of a coding platform', tech: 'HTML, CSS, NODEJS, MONGODB, FIREBASE', live: 'https://peer-project-hub.vercel.app/', github: 'https://github.com/KAVYA-05code/frontend-project' }
          ].map(project => (
            <div key={project.name} className="bg-white bg-opacity-80 p-5 rounded-xl shadow-lg hover:scale-105 transition-transform">
              <h4 className="text-xl font-semibold mb-2 text-purple-700">{project.name}</h4>
              <p className="mb-2">{project.desc}</p>
              <p className="mb-4 text-sm text-purple-500">Tech Used: {project.tech}</p>
              <div className="flex justify-around">
                <a href={project.github} target="_blank" className="underline hover:text-purple-600">GitHub</a>
                <a href={project.live} target="_blank" className="underline hover:text-purple-600">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-10 py-20 bg-white bg-opacity-70 backdrop-blur-md rounded-lg mx-5 my-10 shadow-lg" data-aos="fade-up">
        <h3 className="text-3xl font-bold mb-5 text-center text-purple-700">Contact Me</h3>
        <div className="flex justify-center space-x-10 text-4xl text-purple-600">
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvlHNTtBJMBdZpXNMQpWHckmxgqggNBWTrBrvXChBDHWpLlvWZfkGbsxGHkXVgSThvXrKg"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/kavya-dayal-53a58327a/"><FaLinkedin /></a>
          <a href="https://github.com/KAVYA-05code"><FaGithub /></a>
        </div>
        <p className="text-center mt-5 text-gray-700">Let’s build something great together!</p>
      </section>

      {/* Footer */}
      <footer className="text-center p-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        © 2025 KAVYA DAYAL. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;

    
