import React from 'react';
import { ChevronDown, Check } from 'lucide-react';

const ServiceCard = ({ 
  service, 
  isActive, 
  onServiceClick, 
  selectedPlan, 
  onPlanSelect, 
  index 
}) => {
  return (
    <div 
      key={service.id}
      className="animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div 
        onClick={onServiceClick}
        className={`bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-xl p-6 border
          cursor-pointer transition-all duration-500 transform hover:-translate-y-1
          ${isActive ? 'border-blue-400' : 'border-blue-900 hover:border-blue-600'}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {service.icon}
            <div>
              <h3 className="text-xl font-bold text-blue-400">{service.title}</h3>
              <p className="text-gray-300 mt-1">{service.description}</p>
            </div>
          </div>
          <ChevronDown 
            className={`text-blue-400 transform transition-transform duration-300
              ${isActive ? 'rotate-180' : ''}`}
          />
        </div>

        {/* Features Preview */}
        <div className="mt-4 flex flex-wrap gap-2">
          {service.features.slice(0, 3).map((feature, idx) => (
            <span 
              key={idx}
              className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm"
            >
              {feature}
            </span>
          ))}
          {service.features.length > 3 && (
            <span className="text-gray-400 text-sm flex items-center">
              +{service.features.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Expanded Service Details */}
      <div
        className={`transition-all duration-500 transform origin-top
          ${isActive ? 'scale-100 opacity-100 mt-4' : 'scale-95 opacity-0 hidden'}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.plans.map((plan, planIndex) => (
            <div
              key={planIndex}
              className={`bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border
                transform transition-all duration-300 hover:-translate-y-2
                ${plan.highlight ? 'border-blue-400 scale-105' : 'border-blue-900'}`}
            >
              <h4 className="text-lg font-semibold text-blue-400">{plan.name}</h4>
              <p className="text-gray-400 mt-2">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-center space-x-2">
                    <Check className="text-blue-400 flex-shrink-0" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 w-full px-4 py-2 rounded-lg font-semibold text-blue-400 border
                  transition-all duration-300 
                  ${selectedPlan === plan.name 
                    ? 'border-blue-400 bg-blue-400/10' 
                    : 'border-blue-900 hover:border-blue-400 hover:bg-blue-400/10'}`}
                onClick={() => {
                  onPlanSelect(plan.name);
                  window.location.href = `mailto:sxmemoe@gmail.com?subject=${encodeURIComponent(service.title)} - ${encodeURIComponent(plan.name)}&body=I am interested in the ${encodeURIComponent(plan.name)} plan for ${encodeURIComponent(service.title)}.`;
                }}
              >
                {selectedPlan === plan.name ? 'Selected' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;