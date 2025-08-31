import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Python', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'C++', level: 80, color: 'from-purple-400 to-purple-600' },
        { name: 'C', level: 75, color: 'from-gray-400 to-gray-600' }
      ]
    },
    {
      category: 'Frontend Development',
      items: [
        { name: 'React.js', level: 90, color: 'from-cyan-400 to-cyan-600' },
        { name: 'Tailwind CSS', level: 95, color: 'from-teal-400 to-teal-600' },
        { name: 'HTML5', level: 95, color: 'from-orange-400 to-orange-600' },
        { name: 'CSS3', level: 90, color: 'from-blue-400 to-blue-600' }
      ]
    },
    {
      category: 'Backend Development',
      items: [
        { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
        { name: 'Express.js', level: 80, color: 'from-gray-400 to-gray-600' },
        { name: 'RESTful APIs', level: 85, color: 'from-indigo-400 to-indigo-600' }
      ]
    },
    {
      category: 'Database & Tools',
      items: [
        { name: 'MongoDB', level: 80, color: 'from-green-400 to-green-600' },
        { name: 'Git/GitHub', level: 85, color: 'from-gray-400 to-gray-600' },
        { name: 'VS Code', level: 90, color: 'from-blue-400 to-blue-600' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Expertise in modern web technologies and programming languages
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skills.map((category) => (
            <div key={category.category} className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg 
                                                   hover:shadow-xl transition-all duration-300 
                                                   border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 
                           border-b border-gray-200 dark:border-gray-700 pb-3">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.items.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-500 
                                     bg-clip-text text-transparent">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full 
                                   transform origin-left transition-all duration-1000 ease-out
                                   group-hover:scale-x-105 relative overflow-hidden`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'TypeScript', 'Redux', 'Material-UI', 'Bootstrap', 'Figma', 
              'Postman', 'Firebase', 'Vercel', 'Netlify', 'JWT', 'Webpack'
            ].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 
                                        border border-cyan-400/20 rounded-full text-sm font-medium 
                                        text-gray-700 dark:text-gray-300 hover:border-cyan-400/50 
                                        hover:bg-gradient-to-r hover:from-cyan-400/20 hover:to-blue-500/20
                                        transition-all duration-300 cursor-pointer">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;