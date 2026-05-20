import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();
  const contactInfo = [
    {
      icon: <Phone size={16} className="text-[#d4ff00]" />,
      label: "PHONE",
      value: "0912-345-6789"
    },
    {
      icon: <Mail size={16} className="text-[#d4ff00]" />,
      label: "EMAIL",
      value: "eprotect.security@gmail.com"
    },
    {
      icon: <MapPin size={16} className="text-[#d4ff00]" />,
      label: "SERVICE AREA",
      value: "156 Salvador St. Baras, Rizal"  
    }
  ];

  return (
    <section id="contact" className="relative bg-black py-24 px-8 flex justify-center items-center">
      <div className="absolute top-0 h-screen w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none">
      </div>
      <div className="max-w-6xl w-full bg-[#101010] border border-white/20 p-12 md:p-20 rounded-sm grid grid-cols-1 lg:grid-cols-2 gap-16 relative overflow-hidden"> 
        
        {/* Left Column: Heading & Buttons */}
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <span className="text-[#d4ff00] font-mono text-[10px] tracking-[0.3em]">/ 03 — GET PROTECTED</span>
          </div>
          
          <h2 className="text-4xl font-bold leading-tight text-white tracking-tight">
            Ready to secure your space?
          </h2>
          
          <p className="text-gray-500 max-w-sm text-xs leading-relaxed">
            Submit a request and our team will reach out within 24 hours to schedule a free site survey.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#d4ff00] text-black px-8 py-4 rounded-sm font-bold flex items-center gap-3 hover:bg-[#b8de00] transition-all group cursor-pointer"
            onClick={() => navigate("/book")}>
              Request Service
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-gray-800 text-white px-8 py-4 rounded-sm font-bold flex items-center gap-3 hover:bg-white/5 transition-colors">
              <Phone size={18} />
              Call Us
            </button>
          </div>
        </div>

        {/* Right Column: Contact Details Cards */}
        <div className="flex flex-col gap-4 justify-center">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="bg-[#0a0a0a] border border-white/20 p-6 flex items-start gap-4 rounded-sm hover:border-white/30 transition-colors"
            >
              <div className="mt-1">{info.icon}</div>
              <div>
                <p className="text-[10px] font-mono text-gray-500 tracking-[0.2em] font-bold">
                  {info.label}
                </p>
                {info.value.includes("Baras")
                  ? <a 
                      href="https://maps.app.goo.gl/JHPXSVxey4D4j7of9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <span className="group-hover:text-gray-300 text-xs transition-colors underline">68 P Burgos St. Baras, Rizal</span>
                    </a>
                  : <p className="text-xs text-white font-medium">
                      {info.value}
                    </p>}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', size: '40px 40px' }} 
        /> 
      </div>
    </section>
  );
};

export default ContactUs;