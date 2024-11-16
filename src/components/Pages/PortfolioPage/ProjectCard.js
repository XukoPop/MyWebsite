import React from 'react';
import { Code, Shield, Music, Globe, Check } from 'lucide-react';

const ProjectCard = ({ project, isActive, onProjectClick, isAnimating, animationDelay }) => {
  if (!project) return null;

  return (
    <div 
      className="space-y-4 animate-fade-in-up" 
      style={{ animationDelay: `${animationDelay * 0.1}s` }}
    >
      <div 
        onClick={() => !project.inDevelopment && onProjectClick(project.id)}
        className={`bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-xl p-6 border relative
          ${project.inDevelopment ? 'border-blue-900' : isActive ? 'border-blue-400' : 'border-blue-900 hover:border-blue-600'}
          transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl
          ${!project.inDevelopment && 'cursor-pointer'}
          ${isAnimating ? 'pointer-events-none' : ''}`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`transform transition-all duration-500 ${isActive ? 'scale-110' : ''}`}>
              {project.icon}
            </div>
            <h3 className="text-xl font-bold text-blue-400 transition-colors duration-300">{project.title}</h3>
          </div>
          {!project.inDevelopment && (
            <Code 
              className={`text-blue-400 transform transition-all duration-500 ease-in-out
                ${isActive ? 'rotate-90 scale-110' : 'hover:scale-110'}`}
            />
          )}
        </div>

        <p className="text-gray-300 mb-4">{project.shortDesc}</p>

        {project.features && project.features.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-4">
            {project.features.map((feature, idx) => (
              <div 
                key={idx} 
                className="flex items-center text-gray-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="transform transition-all duration-300 hover:scale-110">
                  {feature.icon}
                </div>
                <span className="ml-1">{feature.text}</span>
              </div>
            ))}
          </div>
        )}

        {project.links && (
          <div className="flex flex-wrap gap-3">
            {project.links.map((link, idx) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 
                  text-white rounded-md hover:from-blue-700 hover:to-blue-900 
                  transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {link.icon}
                <span className="ml-2">{link.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>

      {isActive && !project.inDevelopment && (
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-xl p-6 border border-blue-900
          transition-all duration-500 animate-fade-in">
          {project.stats && (
            <div className="grid grid-cols-3 gap-4 mb-6">
              {project.stats.map((stat, idx) => (
                <div 
                  key={stat.label} 
                  className="bg-gray-800/50 rounded-lg p-4 text-center transform transition-all duration-500 hover:scale-105
                    animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {project.tech && (
            <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-lg font-medium text-blue-400 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span 
                    key={tech} 
                    className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-900
                      transform transition-all duration-300 hover:scale-105 hover:border-blue-400
                      animate-fade-in-up"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.features_detailed && (
            <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h4 className="text-lg font-medium text-blue-400 mb-3">Key Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features_detailed.map((feature, idx) => (
                  <div 
                    key={feature} 
                    className="flex items-center space-x-2 text-gray-300 transform transition-all duration-300
                      hover:translate-x-2 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <Code className="text-green-400 flex-shrink-0" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.caseStudy && (
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-lg font-medium text-blue-400">Case Study</h4>
              <div className="space-y-3">
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <h5 className="text-blue-300 font-medium mb-1">Challenge</h5>
                  <p className="text-gray-300">{project.caseStudy.challenge}</p>
                </div>
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <h5 className="text-blue-300 font-medium mb-1">Solution</h5>
                  <p className="text-gray-300">{project.caseStudy.solution}</p>
                </div>
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <h5 className="text-blue-300 font-medium mb-1">Outcome</h5>
                  <p className="text-gray-300">{project.caseStudy.outcome}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;