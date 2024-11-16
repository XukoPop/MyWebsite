import React, { useState } from 'react';
import { 
  ChevronUp, 
  ChevronDown, 
  Code, 
  Terminal, 
  Globe
} from 'lucide-react';

const TimelinePage = () => {
  const [expandedYear, setExpandedYear] = useState(null);
  
  const timelineData = [
    {
      year: '2019',
      title: 'Started Programming Journey',
      skills: ['Python', 'Web Scraping', 'API Development', 'Discord.py'],
      description: 'Began my programming journey with Python, focusing on automation and bot development.',
      projects: [
        { 
          name: 'Discord Bot',
          description: 'Created my first Discord bot using Python',
          icon: <Code className="w-4 h-4" />
        },
        { 
          name: 'Web Scraping Tools',
          description: 'Developed various web scraping tools for data collection',
          icon: <Terminal className="w-4 h-4" />
        },
        { 
          name: 'API Projects',
          description: 'Built projects integrating with various APIs',
          icon: <Code className="w-4 h-4" />
        }
      ],
      achievements: ['Started Programming Journey', 'Built First Discord Bot', 'Learned API Integration']
    },
    {
      year: '2020',
      title: 'Web Development Focus',
      skills: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
      description: 'Expanded into web development, creating multiple personal websites.',
      projects: [
        { 
          name: 'Xuko.xyz Versions',
          description: 'Created three different versions of personal website',
          icon: <Globe className="w-4 h-4" />
        },
        { 
          name: 'Xz0v.xyz Versions',
          description: 'Developed two distinct versions of this domain',
          icon: <Globe className="w-4 h-4" />
        }
      ],
      achievements: [
        'Created Multiple Personal Websites',
        'Mastered Frontend Development',
        'Improved Web Design Skills'
      ]
    },
    {
      year: '2021',
      title: 'Learning & Development',
      skills: ['Advanced JavaScript', 'Backend Development', 'Database Management'],
      description: 'Focused on learning and enhancing development skills.',
      projects: [],
      achievements: [
        'Deepened Programming Knowledge',
        'Studied Advanced Technologies',
        'Built Strong Technical Foundation'
      ]
    },
    {
      year: '2022-24',
      title: 'Professional Development',
      skills: ['Full Stack Development', 'Discord.js', 'Data Analysis', 'Custom Solutions'],
      description: 'Started taking on client projects and commissions.',
      projects: [
        { 
          name: 'Custom Programs',
          description: 'Developed commissioned programs for clients',
          icon: <Code className="w-4 h-4" />
        },
        { 
          name: 'Discord Bots',
          description: 'Created custom Discord bots for communities',
          icon: <Terminal className="w-4 h-4" />
        },
        { 
          name: 'Client Websites',
          description: 'Built websites for various clients',
          icon: <Globe className="w-4 h-4" />
        },
        { 
          name: 'Data Analysis',
          description: 'Created tools for data processing and analysis',
          icon: <Code className="w-4 h-4" />
        }
      ],
      achievements: [
        'Completed Multiple Client Projects',
        'Built Professional Portfolio',
        'Mastered Full-Stack Development',
        'Expanded Technical Expertise'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 fade-slide-in">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">My Coding Timeline</h2>
      <p className="text-gray-300 mb-8 leading-relaxed">
        Explore my development journey from my first Python script to professional client projects.
      </p>
      
      <div className="space-y-6">
        {timelineData.map((item) => (
          <div key={item.year} 
            className="bg-gradient-to-br from-gray-900 to-black rounded-lg border border-blue-900 
              hover:border-blue-600 transition-all duration-300">
            <button
              onClick={() => setExpandedYear(expandedYear === item.year ? null : item.year)}
              className="w-full p-6 text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-full w-4 h-4" />
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">{item.year}</h3>
                    <p className="text-lg text-gray-300">{item.title}</p>
                  </div>
                </div>
                {expandedYear === item.year ? 
                  <ChevronUp className="text-blue-400" /> : 
                  <ChevronDown className="text-blue-400" />
                }
              </div>
            </button>
            
            {expandedYear === item.year && (
              <div className="px-6 pb-6 space-y-6">
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
                
                <div className="space-y-3">
                  <h4 className="text-blue-400 font-medium">Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span key={skill} 
                        className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-800 
                          hover:border-blue-500 transition-all duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {item.projects.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-blue-400 font-medium">Key Projects:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.projects.map((project) => (
                        <div
                          key={project.name}
                          className="bg-gray-800/50 rounded-lg p-4 border border-blue-900/50 
                            hover:border-blue-500/50 transition-all duration-300"
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            {project.icon}
                            <span className="text-blue-400 font-medium">{project.name}</span>
                          </div>
                          <p className="text-gray-400 text-sm">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <h4 className="text-blue-400 font-medium">Achievements:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-center space-x-2 text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;