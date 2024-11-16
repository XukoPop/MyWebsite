import React from 'react';
import { Code, Link as LinkIcon, Globe, Calendar, Users, UserPlus } from 'lucide-react';

const DiscordProfile = () => {
  return (
    <div className="fixed left-32 top-48 w-72 bg-[#0f0f0f] rounded-lg overflow-hidden hidden xl:block">
      {/* Starry Background Container */}
      <div className="absolute inset-0 stars-container overflow-hidden">
        <div className="discord-stars"></div>
        <div className="discord-stars2"></div>
        <div className="discord-stars3"></div>
      </div>

      {/* Banner - adjusted object-position to show more of bottom portion */}
      <div className="relative h-28 w-full bg-[#1e1f22]">
        <img 
          src="/banner.png" 
          alt="Discord Banner"
          className="w-full h-full object-cover object-[center_15%]"
        />
      </div>
      
      {/* Profile Picture & Status */}
      <div className="relative px-4">
        <div className="relative w-20 h-20 -mt-10">
          <img 
            src="/discordpfp.gif" 
            alt="Discord Profile"
            className="w-full h-full rounded-full border-[6px] border-[#0f0f0f] object-cover"
          />
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full 
            border-[4px] border-[#0f0f0f]" />
        </div>
      </div>

      {/* Profile Info */}
      <div className="relative p-4 pt-2">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="text-white font-semibold text-xl flex items-center gap-2">
              xuko
              <span className="text-xs text-gray-400">
              </span>
            </h2>
            <div className="text-gray-400 text-sm">2view • ISFP-T</div>
          </div>
          <a
            href="https://discordapp.com/users/259068087972790273"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 bg-[#2d2d31] hover:bg-[#35353a] 
              text-white text-sm rounded-md transition-colors"
          >
            <UserPlus className="w-4 h-4" />
            Add Friend
          </a>
        </div>

        <div className="text-gray-300 text-sm">
          5+ year coding exp<br/>
          Python, Html, Css, Js, SQL. & more
        </div>

        <div className="mt-4 flex items-center text-gray-400 text-sm">
          <Calendar className="w-4 h-4 mr-2" />
          Member since Dec 15, 2016
        </div>

        <div className="mt-3 space-y-2">
          {[
            { icon: Globe, text: "My Website", href: "https://2view.xyz" },
            { icon: LinkIcon, text: "Invite my bot", href: "https://xuko.xyz" },
            { icon: Users, text: "Guild website", href: "https://codemoon.xyz" }
          ].map((link, i) => (
            <a 
              key={i}
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-[#00a8fc] hover:underline text-sm"
            >
              <link.icon className="w-4 h-4 mr-2" />
              {link.text}
            </a>
          ))}
        </div>

        <div className="mt-4">
          <div className="text-gray-400 text-xs uppercase font-semibold mb-2">ROLES</div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#292b2f] text-[#00a8fc] text-xs px-2 py-1 rounded">
              Xuko
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <DiscordProfile />
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 fade-slide-in">
        <h1 className="text-4xl font-bold mb-6 text-blue-400 text-center">
          Welcome to My Website
        </h1>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-900 hover:border-blue-600 
            rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">About Me</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Welcome. I'm Xuko, an 18-year-old developer with a strong interest in coding and technology. 
              I've been coding for five years now, working with multiple languages and always looking to build something new. 
              I'm passionate about creating projects, from websites to custom programs, and I really enjoy making Discord bots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-900 hover:border-blue-600 
              rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Professional Experience</h2>
              <p className="text-gray-300 leading-relaxed">
                In the past, I worked as a digital seller, creating custom commission programs for clients. 
                I've also explored cheat development, which gave me unique skills and experience in coding.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-900 hover:border-blue-600 
              rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Beyond Coding</h2>
              <p className="text-gray-300 leading-relaxed">
                Outside of tech, I used to ride dirt bikes my favorites were a Yamaha TTR 125 and a YZ 250F. 
                These days, I'm focused on my coding skills and building even more projects.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-900 hover:border-blue-600 
            rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1">
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
                    cursor-pointer group"
                >
                  <span className="group-hover:text-blue-300 transition-colors">{skill.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-slide-in {
          animation: fadeSlideIn 0.6s ease forwards;
        }

        /* Discord Profile Stars */
        .stars-container {
          background: #0f0f0f;
          z-index: 0;
        }

        .discord-stars, .discord-stars2, .discord-stars3 {
          position: absolute;
          width: 200%;
          height: 200%;
          z-index: 1;
        }

        .discord-stars {
          background: radial-gradient(1px 1px at 10px 10px, #fff, rgba(0,0,0,0)),
                      radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)),
                      radial-gradient(1px 1px at 40px 40px, #fff, rgba(0,0,0,0)),
                      radial-gradient(1px 1px at 50px 60px, #fff, rgba(0,0,0,0)),
                      radial-gradient(1px 1px at 60px 20px, #fff, rgba(0,0,0,0));
          background-size: 100px 100px;
          animation: move 60s linear infinite;
        }

        .discord-stars2 {
          background: radial-gradient(1px 1px at 15px 15px, #fff, rgba(0,0,0,0)),
                      radial-gradient(1px 1px at 25px 35px, #fff, rgba(0,0,0,0)),
                      radial-gradient(1px 1px at 45px 45px, #fff, rgba(0,0,0,0)),
                      radial-gradient(1px 1px at 55px 65px, #fff, rgba(0,0,0,0)),
                      radial-gradient(1px 1px at 65px 25px, #fff, rgba(0,0,0,0));
          background-size: 120px 120px;
          animation: move 90s linear infinite;
        }

        .discord-stars3 {
          background: radial-gradient(1px 1px at 5px 5px, #fff, rgba(0,0,0,0)),
                      radial-gradient(1px 1px at 15px 25px, #fff, rgba(0,0,0,0)),
                      radial-gradient(1px 1px at 35px 35px, #fff, rgba(0,0,0,0)),
                      radial-gradient(1px 1px at 45px 55px, #fff, rgba(0,0,0,0)),
                      radial-gradient(1px 1px at 55px 15px, #fff, rgba(0,0,0,0));
          background-size: 80px 80px;
          animation: move 120s linear infinite;
        }

        @keyframes move {
          from {
            transform: translate(-50%, -50%);
          }
          to {
            transform: translate(0%, 0%);
          }
        }

        /* Add some twinkling effect */
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default HomePage;