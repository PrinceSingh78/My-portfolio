import React from 'react';
import { Award, BookOpen, Users, Trophy } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Full Stack Web Development',
      organization: 'FreeCodeCamp',
      date: '2024',
      description: 'Comprehensive certification covering frontend and backend development',
      type: 'certification'
    },
    {
      icon: BookOpen,
      title: 'React.js Development',
      organization: 'Coursera',
      date: '2024',
      description: 'Advanced React concepts, hooks, and state management',
      type: 'certification'
    },
    {
      icon: Users,
      title: 'Software Development Intern',
      organization: 'Tech Solutions Pvt. Ltd.',
      date: '2024',
      description: 'Contributed to web application development using MERN stack',
      type: 'internship'
    },
    {
      icon: Trophy,
      title: 'Best Project Award',
      organization: 'College Tech Fest',
      date: '2024',
      description: 'Recognized for CropConnect project innovation and implementation',
      type: 'award'
    },
    {
      icon: BookOpen,
      title: 'Python Programming',
      organization: 'HackerRank',
      date: '2023',
      description: 'Certified in Python programming fundamentals and advanced concepts',
      type: 'certification'
    },
    {
      icon: Users,
      title: 'Frontend Developer Intern',
      organization: 'Digital Agency',
      date: '2023',
      description: 'Developed responsive web interfaces and improved user experience',
      type: 'internship'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'certification':
        return 'from-blue-400 to-blue-600';
      case 'internship':
        return 'from-green-400 to-green-600';
      case 'award':
        return 'from-yellow-400 to-yellow-600';
      default:
        return 'from-cyan-400 to-cyan-600';
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'certification':
        return 'Certification';
      case 'internship':
        return 'Internship';
      case 'award':
        return 'Award';
      default:
        return type;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Certifications, internships, and recognitions that showcase my journey and growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg 
                                        hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 
                                        border border-gray-200 dark:border-gray-700 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getTypeColor(achievement.type)} 
                               opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Type Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
                                  bg-gradient-to-r ${getTypeColor(achievement.type)} text-white`}>
                    {getTypeBadge(achievement.type)}
                  </span>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {achievement.date}
                  </span>
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full 
                               bg-gradient-to-r ${getTypeColor(achievement.type)} text-white mb-4 
                               group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 
                             group-hover:text-cyan-400 transition-colors duration-200">
                  {achievement.title}
                </h3>
                
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                  {achievement.organization}
                </p>
                
                <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r 
                              from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 
                              transition-transform duration-300 origin-left"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '6+', label: 'Certifications' },
            { number: '2+', label: 'Internships' },
            { number: '1', label: 'Award Won' },
            { number: '100+', label: 'Skills Learned' }
          ].map(({ number, label }) => (
            <div key={label} className="text-center group">
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
    </section>
  );
};

export default Achievements;