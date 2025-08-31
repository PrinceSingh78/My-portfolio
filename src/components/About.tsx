import React from 'react';
import { Code, Heart, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer crafting digital experiences with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                    👋 Hi, I’m **Prince Kumar Singh**  
💻 Aspiring **Full Stack Web Developer**  
🚀 Passionate about creating **innovative** & **user-friendly** web applications  
📚 Currently pursuing my journey in **software development**  
🛠️ Specializing in the **MERN stack**  
🌐 Experienced in building **scalable, modern web solutions**  

              </p>
              
              <p className="text-lg leading-relaxed">
                🖥️ My expertise spans across:  
🎨 Frontend → React.js, Tailwind CSS  
⚙️ Backend → Node.js, Express.js  
🗄️ Database → MongoDB  

💡 I’m also proficient in:  
🔹 C  
🔹 C++  
🔹 Python  

              </p>

              <p className="text-lg leading-relaxed">
                📖 I believe in **continuous learning** and staying updated with the latest technologies.  
🌟 My goal is to contribute to **meaningful projects** that make a positive impact  
👨‍💻 while growing as a **professional developer**.  

              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: Code,
                  title: 'Clean Code',
                  description: 'Writing maintainable, scalable solutions'
                },
                {
                  icon: Lightbulb,
                  title: 'Innovation',
                  description: 'Always exploring new technologies'
                },
                {
                  icon: Heart,
                  title: 'Passion',
                  description: 'Love for creating amazing experiences'
                }
              ].map(({ icon: Icon, title, description }) => (
                <div key={title} className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 
                                          hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 
                                          dark:hover:from-gray-700 dark:hover:to-gray-600 
                                          transition-all duration-300 group">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full 
                                bg-gradient-to-r from-cyan-400 to-blue-500 text-white 
                                group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '10+', label: 'Projects Completed' },
              { number: '3+', label: 'Technologies Mastered' },
              { number: '500+', label: 'Hours of Coding' },
              { number: '2+', label: 'Years Learning' }
            ].map(({ number, label }) => (
              <div key={label} className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 
                                        dark:from-gray-800 dark:to-gray-700 hover:shadow-lg 
                                        transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 
                              bg-clip-text text-transparent mb-2 group-hover:scale-110 
                              transition-transform duration-300">
                  {number}
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;