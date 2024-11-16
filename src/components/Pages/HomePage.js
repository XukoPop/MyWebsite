import React from 'react';
import { Code } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 fade-slide-in">
      <h1 className="text-4xl font-bold mb-6 text-blue-400 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent" style={{ lineHeight: '1.2' }}>
        Welcome to My Website
      </h1>
      
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-blue-900 shadow-xl 
          hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Welcome. I'm Xuko, an 18-year-old developer with a strong interest in coding and technology. 
            I've been coding for five years now, working with multiple languages and always looking to build something new. 
            I'm passionate about creating projects, from websites to custom programs, and I really enjoy making Discord bots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-blue-900 shadow-xl 
            hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Professional Experience</h2>
            <p className="text-gray-300 leading-relaxed">
              In the past, I worked as a digital seller, creating custom commission programs for clients. 
              I've also explored cheat development, which gave me unique skills and experience in coding.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-blue-900 shadow-xl 
            hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Beyond Coding</h2>
            <p className="text-gray-300 leading-relaxed">
              Outside of tech, I used to ride dirt bikes my favorites were a Yamaha TTR 125 and a YZ 250F. 
              These days, I'm focused on my coding skills and building even more projects.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-blue-900 shadow-xl 
          hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Current Focus</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Python', link: 'https://www.python.org/' },
              { name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
              { name: 'Discord.js', link: 'https://discord.js.org/' },
              { name: 'Web Development', link: 'https://developer.mozilla.org/en-US/docs/Learn' },
              { name: 'Bot Development', link: 'https://discord.com/developers/docs' },
              { name: 'Custom Solutions', link: 'https://github.com' },
            ].map((skill) => (
              <a
                key={skill.name}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900/30 text-blue-400 px-4 py-2 rounded-full text-sm border border-blue-800 
                  hover:border-blue-400 hover:bg-blue-900/50 transition-all duration-300 transform hover:scale-105
                  cursor-pointer"
              >
                {skill.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;