import { Camera, Bell, Key, CheckCircle2, ArrowUpRight, Smartphone, Activity, UnfoldVertical, BellRing } from 'lucide-react';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import serviceContext from '../context/serviceContext';

const ServicesSection = () => {
  const { serviceId, setServiceId, setFocusField, initInvetory } = useContext(serviceContext);

  useEffect(() => {
    setFocusField(false);
  }, [setFocusField])

  return (
    <section id="services" className="bg-black text-white py-24 px-8 border-b border-gray-50/20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[#d4ff00] font-mono text-[10px]">/ 01 — SERVICES</span>
            </div>
            <h2 className="text-5xl font-bold leading-tight max-w-xl">
              Three core services. One reliable team.
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-gray-500 text-xs leading-relaxed">
              Pricing is indicative. Final quote depends on site survey, number of units, and cabling distance.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-800">
          {initInvetory.map((service) => (
            <div key={service.id} className="border-r border-gray-800 last:border-r-0 p-8 flex flex-col group hover:bg-[#1c1c1f] transition-all ease-in-out">
              {/* Card Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="border border-gray-700 p-3 rounded-sm text-gray-400">
                  {service.icon}
                </div>
                <span className="text-[10px] font-mono text-gray-600">{service.id}</span>
              </div>

              {/* Image Placeholder */}
              <div className="relative aspect-video mb-8 overflow-hidden bg-gray-900">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover grayscale-0 md:grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 opacity-60"
                />
              </div>

              {/* Content */}
              <div className="grow space-y-4">
                <h3 className="text-xl font-bold">{service.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 pt-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 size={14} className="text-[#d4ff00]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div className="mt-12 pt-8 border-t border-gray-800 flex justify-between items-end">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">STOCKS: {service.stock}</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">PRICE:</p>
                  <p className="text-xl font-bold">₱ {service.price}</p>
                </div>
                <Link to="/book" className="bg-[#d4ff00] p-3 text-black rounded-sm hover:bg-[#b8de00] transition-all cursor-pointer hover:scale-110 ease-in-out active:scale-100"
                onClick={() => {
                  setFocusField(true);
                  setServiceId(service.id);
                }}>
                  <ArrowUpRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;