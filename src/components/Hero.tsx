import React from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import profileImage from '../assets/github profile pic.jpg'; // Correct image import


const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden
                 bg-gradient-to-br from-gray-50 to-gray-100 
                 dark:from-gray-900 dark:to-black"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 
             rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 
             rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-lg font-medium text-cyan-400 mb-2 animate-fade-in">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up ">
                Prince Kumar
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Singh
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6 animate-fade-in-up delay-200">
                Aspiring Full Stack Web Developer
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl animate-fade-in-up delay-300 font-{{|">
                Passionate about creating innovative web solutions with the MERN stack. 
                Building the future, one line of code at a time.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up delay-500">
              {/* Contact Button */}
              <button className="group relative px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 
                                 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl 
                                 transform hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Mail className="h-5 w-5" />
                  Get In Touch
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* CV Download */}
              <a
                href="https://drive.google.com/file/d/1KD9dTZgo__i1FDdiAe5uPaUT5s-zRnZo/view"
                download
                className="group px-8 py-3 border-2 border-cyan-400 text-cyan-400 
                           hover:bg-cyan-400 hover:text-white rounded-lg font-semibold 
                           transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download CV
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 justify-center lg:justify-start animate-fade-in-up delay-700">
              {[
                { icon: Github, href: 'https://github.com/PrinceSingh78', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/prince-kumar-singh-242a4522a/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:dipppu65@gmail.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400
                             hover:bg-cyan-400 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-white
                             transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full 
                            blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-400/50 
                            shadow-2xl hover:border-cyan-400 transition-all duration-300">
                <img
                  src={profileImage}
                  alt="Prince Kumar Singh"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToAbout}
        >
          <ChevronDown className="h-8 w-8 text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
