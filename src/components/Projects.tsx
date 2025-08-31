import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'CropConnect',
      description: 'A comprehensive platform connecting farmers with buyers, featuring real-time crop pricing, marketplace functionality, and agricultural resources. Built with the MERN stack.',
      image: 'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
      liveUrl: 'https://crop-connect-xi.vercel.app/',
      githubUrl: '#',
      date: '2024'
    },
    {
      title: 'memories.social',
      description: 'A social media platform for sharing and preserving memories. Features include photo uploads, story sharing, friend connections, and interactive timelines.',
      image: 'https://media.licdn.com/dms/image/v2/D4D22AQFLvuaQqrh1bQ/feedshare-shrink_800/feedshare-shrink_800/0/1689533948264?e=1758758400&v=beta&t=yW3GrVkSm58MQApCCiule7exAAOuMZkIepUBrTujmCI',
      technologies: ['React.js', 'Firebase', 'Material-UI', 'JavaScript'],
      liveUrl: 'https://thememoriessocial.netlify.app/',
      githubUrl: '#',
      date: '2020'
    },
    {
      title: 'News Website',
      description: 'A modern news aggregation website with category filtering, search functionality, and responsive design. Integrated with news APIs for real-time updates.',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg',
      technologies: ['React.js', 'News API', 'Bootstrap', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2023'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing my latest work and technical expertise through real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden 
                                               shadow-lg hover:shadow-2xl transition-all duration-500 
                                               hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project Actions */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 
                              transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white/90 dark:bg-gray-900/90 rounded-full text-gray-700 
                             dark:text-gray-300 hover:bg-cyan-400 hover:text-white transition-colors duration-200"
                    aria-label="View live project"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/90 dark:bg-gray-900/90 rounded-full text-gray-700 
                             dark:text-gray-300 hover:bg-cyan-400 hover:text-white transition-colors duration-200"
                    aria-label="View source code"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center px-2 py-1 bg-cyan-400/90 text-white 
                                 text-xs font-medium rounded-full">
                    <Calendar className="h-3 w-3 mr-1" />
                    {project.date}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 
                             group-hover:text-cyan-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="inline-flex items-center px-2 py-1 bg-gradient-to-r 
                                               from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 
                                               rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                      <Tag className="h-3 w-3 mr-1" />
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex-1 text-center py-2 px-4 bg-gradient-to-r from-cyan-400 to-blue-500 
                             text-white text-sm font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 
                             transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                  
                  <a
                    href={project.githubUrl}
                    className="flex-1 text-center py-2 px-4 border border-cyan-400 text-cyan-400 
                             text-sm font-medium rounded-lg hover:bg-cyan-400 hover:text-white 
                             transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 
                     text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 
                     transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View More Projects
            <ExternalLink className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;