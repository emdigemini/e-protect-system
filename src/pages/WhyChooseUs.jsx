import { Wrench, Clock, Headphones, ShieldCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Wrench size={16} className="text-[#d4ff00]" />,
      title: "Certified Technicians",
      description: "Trained installers with hands-on field experience in Rizal province."
    },
    {
      icon: <Clock size={16} className="text-[#d4ff00]" />,
      title: "Fast Response",
      description: "Site survey scheduled within 24 hours of booking confirmation."
    },
    {
      icon: <Headphones size={16} className="text-[#d4ff00]" />,
      title: "After-Sales Support",
      description: "Free consultation for 30 days post-installation. We pick up calls."
    },
    {
      icon: <ShieldCheck size={16} className="text-[#d4ff00]" />,
      title: "Honest Pricing",
      description: "Transparent quotes. No hidden fees. Receipt provided for every job."
    }
  ];

  return (
    <section id="why_us" className="scroll-mt-30 bg-[#0a0a0a] text-white py-24 px-8 border-b border-gray-50/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-[#d4ff00] font-mono text-[10px] tracking-widest">/ 02 — WHY E-PROTECT</span>
          </div>
          
          <h2 className="text-4xl font-bold leading-tight tracking-tight">
            Local team. <br />
            <span className="text-white/50">Real accountability.</span>
          </h2>
          
          <p className="text-white/50 max-w-sm text-xs leading-relaxed">
            We are based in Baras, Rizal. Every job is logged, every visit documented, 
            and every client knows their technician by name.
          </p>
        </div>

        {/* Right Column: Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-800">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`p-10 space-y-4 border-gray-800 
                ${index === 0 ? 'border-r border-b' : ''} 
                ${index === 1 ? 'border-b' : ''} 
                ${index === 2 ? 'border-r' : ''}
                hover:bg-white/2 transition-colors`}
            >
              <div className="mb-6">
                {benefit.icon}
              </div>
              <h3 className="font-bold tracking-tight text-md">
                {benefit.title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;