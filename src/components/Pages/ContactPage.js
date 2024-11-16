import React from 'react';
import { 
  User, 
  Globe, 
  Mail, 
  Instagram, 
  Github 
} from 'lucide-react';

const ContactPage = () => {
  const contacts = [
    { 
      name: 'Discord', 
      icon: <User size={18} />, 
      link: 'https://discordapp.com/users/259068087972790273', 
      color: 'hover:border-blue-500'
    },
    { 
      name: 'Website', 
      icon: <Globe size={18} />, 
      link: '#', 
      color: 'hover:border-cyan-500'
    },
    { 
      name: 'Bot Website', 
      icon: <Globe size={18} />, 
      link: 'https://xuko.xyz/', 
      color: 'hover:border-blue-400'
    },
    { 
      name: 'Email', 
      icon: <Mail size={18} />, 
      link: 'mailto:sxmemoe@gmail.com', 
      color: 'hover:border-red-500'
    },
    { 
      name: 'Instagram', 
      icon: <Instagram size={18} />, 
      link: 'https://www.instagram.com/_.xz0v/', 
      color: 'hover:border-purple-500'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 fade-slide-in">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">Get in Touch</h2>
      
      <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-blue-900 shadow-xl 
        hover:border-blue-600 transition-all duration-300 mb-8">
        <p className="text-gray-300 leading-relaxed">
          I'm always open to new projects and collaborations. Feel free to reach out through any of the platforms below,
          and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {contacts.map((platform) => (
          <a
            key={platform.name}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-gradient-to-br from-gray-900 to-black px-4 py-3 rounded-lg border border-gray-700 
              ${platform.color} hover:bg-gray-800 transition-all duration-300 transform hover:scale-105
              flex items-center space-x-3 text-gray-300 hover:text-white
              group backdrop-blur-sm`}
          >
            <div className="p-2 rounded-full bg-gray-800/50 group-hover:bg-gray-700/50 transition-all duration-300">
              {platform.icon}
            </div>
            <span className="text-sm font-medium">{platform.name}</span>
          </a>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-blue-900 shadow-xl">
        <h3 className="text-xl font-bold mb-4 text-blue-400">Working Hours</h3>
        <div className="space-y-2 text-gray-300">
          <p>Monday - Friday: 9 AM - 6 PM (PST)</p>
          <p>Saturday: Not Available</p>
          <p>Sunday: Available for urgent matters</p>
          <p className="mt-4 text-sm text-gray-400">
            * Response times may vary based on current project workload.
          </p>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-400/10 rounded-lg border border-blue-400/20">
        <p className="text-gray-300 text-sm text-center">
          Prefer email? Send me a message at{' '}
          <a 
            href="mailto:sxmemoe@gmail.com" 
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            sxmemoe@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;