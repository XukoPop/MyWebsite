// ServicePage.jsx
import React, { useState } from 'react';
import { 
  Bot, 
  Globe,
  Star,
  MessageSquare, 
  ClipboardList, 
  Code, 
  CheckCircle, 
  Rocket, 
  HeartHandshake,
  ExternalLink,
  Mail,
  ChevronDown
} from 'lucide-react';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'discord-bots',
      title: 'Discord Bot Development',
      icon: <Bot className="text-blue-400" size={24} />,
      description: 'Custom Discord bots tailored to your server\'s needs with advanced features and functionality.',
      tiers: [
        {
          name: 'Basic',
          price: '$10',
          features: ['Up to 20 commands', 'Basic moderation', 'Welcome system', 'Fun commands'],
          buyMeACoffeeLink: 'https://buymeacoffee.com/zul1dlncph/e/332794'
        },
        {
          name: 'Pro',
          price: '$60',
          features: ['50+ commands', 'Advanced moderation', 'Music system', 'Custom dashboard'],
          buyMeACoffeeLink: 'https://buymeacoffee.com/zul1dlncph/e/332796',
          popular: true
        },
        {
          name: 'Custom',
          price: 'Contact',
          features: ['Unlimited commands', 'Full customization', 'Priority support', 'Api integration'],
          buyMeACoffeeLink: 'mailto:sxmemoe@gmail.com?subject=Custom Discord Bot Development'
        }
      ]
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      icon: <Globe className="text-blue-400" size={24} />,
      description: 'Modern, responsive websites built with the latest technologies and best practices.',
      tiers: [
        {
          name: 'Landing',
          price: '$50',
          features: ['3 pages', 'Responsive design', 'Mobile Implementation', 'Custom css'],
          buyMeACoffeeLink: 'https://buymeacoffee.com/zul1dlncph/e/332797',
        },
        {
          name: 'Business',
          price: '$299',
          features: ['5 pages', 'Performance optimization', 'Analytics', '3 months of support'],
          buyMeACoffeeLink: 'https://buymeacoffee.com/zul1dlncph/e/332798',
          popular: true
        },
        {
          name: 'Enterprise',
          price: 'Contact',
          features: ['Custom features', 'Full stack', 'API integration', 'And more'],
          buyMeACoffeeLink: 'mailto:sxmemoe@gmail.com?subject=Enterprise Web Development'
        }
      ]
    },
    {
      id: 'custom-dev',
      title: 'Custom Development',
      icon: <Star className="text-blue-400" size={24} />,
      description: 'Have a unique project in mind? Let\'s bring your ideas to life with custom solutions.',
      tiers: [
        {
          name: 'Consultation',
          price: 'Free',
          features: ['Project assessment', 'Technical advice', 'Cost estimation'],
          buyMeACoffeeLink: 'mailto:sxmemoe@gmail.com?subject=Development Consultation'
        },
        {
          name: 'Development',
          price: 'Custom',
          features: ['Full development', 'Regular updates', 'Documentation'],
          buyMeACoffeeLink: 'mailto:sxmemoe@gmail.com?subject=Custom Development Project',
          popular: true
        },
        {
          name: 'Maintenance',
          price: 'Varies',
          features: ['Ongoing support', 'Updates', 'Performance monitoring'],
          buyMeACoffeeLink: 'mailto:sxmemoe@gmail.com?subject=Development Maintenance'
        }
      ]
    }
  ];

  const workProcess = [
    {
      icon: <MessageSquare className="text-blue-400" size={24} />,
      title: 'Consultation',
      description: 'Discuss your needs and project requirements'
    },
    {
      icon: <ClipboardList className="text-blue-400" size={24} />,
      title: 'Planning',
      description: 'Detailed project scope and timeline'
    },
    {
      icon: <Code className="text-blue-400" size={24} />,
      title: 'Development',
      description: 'Building your solution with regular updates'
    },
    {
      icon: <Rocket className="text-blue-400" size={24} />,
      title: 'Launch',
      description: 'Deployment and final testing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-400 mb-4">
            Services & Pricing
          </h1>
        </div>

        {/* Services */}
        <div className="space-y-8">
          {services.map((service) => (
            <ServiceSection 
              key={service.id}
              service={service}
              isActive={activeService === service.id}
              onToggle={() => setActiveService(activeService === service.id ? null : service.id)}
            />
          ))}
        </div>

        {/* Work Process */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-400 text-center mb-8">
            How Xuko Work's
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workProcess.map((step, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-blue-900 hover:border-blue-600 
                  rounded-xl p-6 text-center transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ServiceSection Component
const ServiceSection = ({ service, isActive, onToggle }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-900 hover:border-blue-600 
      rounded-xl p-6 transition-all duration-300">
      <div 
        className="flex items-start justify-between cursor-pointer group"
        onClick={onToggle}
      >
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gray-800/50 rounded-xl">
            {service.icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              {service.title}
            </h2>
            <p className="text-gray-300 mt-1">
              {service.description}
            </p>
          </div>
        </div>
        <ChevronDown 
          className={`text-blue-400 transition-transform duration-300 group-hover:text-blue-300
            ${isActive ? 'rotate-180' : 'rotate-0'}`} 
          size={24} 
        />
      </div>

      <div className={`mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 ${isActive ? 'block' : 'hidden'}`}>
        {service.tiers.map((tier, index) => (
          <div 
            key={index}
            className={`relative bg-gradient-to-br from-gray-900 to-black border-2 rounded-xl p-6 
              transition-all duration-300 hover:-translate-y-1
              ${tier.popular 
                ? 'border-blue-400 shadow-lg shadow-blue-400/20' 
                : 'border-blue-900 hover:border-blue-600'}`}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-400 text-gray-900 text-sm px-3 py-1 rounded-full font-semibold">
                  Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                {tier.name}
              </h3>
              <p className="text-2xl font-bold text-white">
                {tier.price}
              </p>
            </div>

            <ul className="space-y-3 mb-6">
              {tier.features.map((feature, featureIndex) => (
                <li 
                  key={featureIndex}
                  className="flex items-center text-gray-300"
                >
                  <CheckCircle className="text-blue-400 mr-2 flex-shrink-0" size={16} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={tier.buyMeACoffeeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-400 hover:bg-blue-500 
                text-gray-900 font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              {tier.price === 'Contact' || tier.price === 'Free' || tier.price === 'Varies' || tier.price === 'Custom' ? (
                <span className="flex items-center justify-center">
                  Contact <Mail className="ml-2" size={16} />
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  Purchase <ExternalLink className="ml-2" size={16} />
                </span>
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;  