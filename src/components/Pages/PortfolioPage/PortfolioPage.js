import React, { useState } from 'react';
import { 
  Code,
  Globe,
  BookOpen,
  Bot,
  Search,
  Download,
  ExternalLink,
  Github,
  Shield,
  Users,
  Terminal,
  Presentation,
} from 'lucide-react';

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState('codemoon');

  const projects = [
    {
      id: 'codemoon',
      title: 'Code Moon Website',
      shortDesc: 'A modern, dynamic website for the Code Moon Discord community.',
      icon: <Globe className="text-blue-400" size={24} />,
      features: [
        { icon: <Code className="text-blue-400" size={16} />, text: 'Modern Design' },
        { icon: <Users className="text-blue-400" size={16} />, text: 'Community Features' },
      ],
      status: 'Active',
      link: 'https://codemoon.xyz/',
      tech: ['React.js', 'Tailwind CSS', 'Node.js'],
      features_detailed: [
        'Sleek, responsive design optimized for all devices',
        'Community showcase and features',
        'Server information',
        'Message Activity Showcase'
      ],
    },
    {
      id: 'flashstudy',
      title: 'FlashStudy',
      shortDesc: 'A free alternative to Quizlet, built with React.js for seamless studying experience.',
      icon: <BookOpen className="text-green-400" size={24} />,
      features: [
        { icon: <Code className="text-green-400" size={16} />, text: 'Custom Flashcards' },
        { icon: <Terminal className="text-green-400" size={16} />, text: 'Study Tools' },
        { icon: <Users className="text-green-400" size={16} />, text: 'Free Access' }
      ],
      status: 'Active',
      link: 'https://xz0v.xyz/',
      tech: ['React.js', 'Tailwind CSS', 'LocalStorage', 'PWA'],
      features_detailed: [
        'Create and manage custom flashcard sets',
        'Multiple study modes',
        'Progress tracking',
        'Mobile-friendly design',
        'Offline capability',
        'No account required',
        'Export/Import functionality'
      ],
      caseStudy: {
        challenge: 'Provide a free, accessible alternative to paid flashcard platforms.',
        solution: 'Built a web-based flashcard application with focus on simplicity and functionality.',
        outcome: 'Created a user-friendly study tool that helps students learn effectively without cost barriers.'
      }
    },
    {
      id: 'xukopop',
      title: 'XukoPop Discord Bot',
      shortDesc: 'A feature-rich Discord bot with music, moderation, and utility features.',
      icon: <Bot className="text-purple-400" size={24} />,
      features: [
        { icon: <Shield className="text-purple-400" size={16} />, text: 'Moderation' },
        { icon: <Terminal className="text-purple-400" size={16} />, text: 'Custom Commands' },
        { icon: <Users className="text-purple-400" size={16} />, text: 'Server Management' }
      ],
      status: 'Active',
      link: 'https://xuko.xyz/',
      tech: ['Discord.js', 'Node.js', 'MongoDB', 'Express'],
      features_detailed: [
        'Advanced music playback system',
        'Server moderation tools',
        'Custom welcome messages',
        'Role management',
        'Server statistics',
        'Utility commands',
        'Auto-moderation features'
      ],
      caseStudy: {
        challenge: 'Create a versatile Discord bot that combines multiple functionalities.',
        solution: 'Developed a multi-purpose bot with focus on user experience and reliability.',
        outcome: 'Successfully deployed bot serving multiple servers with high uptime and user satisfaction.'
      }
    },
    {
      id: 'discord-lookup',
      title: 'Discord Lookup (Archived)',
      shortDesc: 'A tool for searching and viewing Discord user and server information.',
      icon: <Search className="text-gray-400" size={24} />,
      status: 'Archived',
      tech: ['React.js', 'Discord API', 'Node.js'],
      features_detailed: [
        'User profile lookup',
        'Server information search',
        'Discord ID conversion',
        'Avatar and banner viewing',
        'User statistics display'
      ],
      caseStudy: {
        challenge: 'Build a user-friendly tool for Discord information lookup.',
        solution: 'Created a web interface for accessing Discord API data.',
        outcome: 'Provided useful tool for Discord users before being archived.'
      }
    },
    {
      id: 'video-downloader',
      title: 'Video Downloader (Archived)',
      shortDesc: 'A simple web-based video downloader for various platforms.',
      icon: <Download className="text-gray-400" size={24} />,
      status: 'Archived',
      tech: ['Python', 'Flask', 'yt-dlp', 'React'],
      features_detailed: [
        'Multi-platform support',
        'Quality selection',
        'Format options',
        'Progress tracking',
        'Direct downloads'
      ],
      caseStudy: {
        challenge: 'Create an easy-to-use video downloading solution.',
        solution: 'Developed a web interface with backend processing capabilities.',
        outcome: 'Successfully served users before being archived due to API changes.'
      }
    }
  ];

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-blue-400">My Projects</h2>
        <div className="flex items-center space-x-2 text-gray-400">
          <Code size={20} />
          <span>{projects.length} Projects</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className={`p-4 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-102
                ${selectedProject === project.id 
                  ? 'bg-blue-400/10 border border-blue-400/50' 
                  : 'bg-gray-800/50 border border-gray-700/50 hover:border-blue-400/30'}`}
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  selectedProject === project.id ? 'bg-gray-800/50' : 'bg-gray-900/50'
                }`}>
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-blue-400">{project.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full
                      ${project.status === 'Active' 
                        ? 'bg-green-400/10 text-green-400 border border-green-400/20' 
                        : 'bg-gray-400/10 text-gray-400 border border-gray-400/20'}`}>
                      {project.status}
                    </span>
                    {project.link && project.status === 'Active' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs px-2 py-0.5 rounded-full bg-blue-400/10 text-blue-400 
                          border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 
                          flex items-center"
                      >
                        <Globe size={12} className="mr-1" />
                        Visit Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:w-2/3">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg border border-blue-900/50 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gray-800/50">
                    {selectedProjectData.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-blue-400">{selectedProjectData.title}</h2>
                    <p className="text-gray-300 mt-1">{selectedProjectData.shortDesc}</p>
                  </div>
                </div>
                {selectedProjectData.link && selectedProjectData.status === 'Active' && (
                  <a
                    href={selectedProjectData.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-500/10 text-blue-400 
                      rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <Globe size={18} />
                    <span>Visit Website</span>
                  </a>
                )}
              </div>

              <div className="mb-8">
                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectData.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800/50 text-blue-400 rounded-full text-sm 
                        border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-3">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProjectData.features_detailed.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center space-x-2 text-gray-300"
                    >
                      <Code className="text-blue-400" size={16} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;