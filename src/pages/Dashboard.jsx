import Navbar from '../components/Navbar';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const scrollToSection = (e, id) => {
    if (location.pathname !== "/")
      return
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div id="home" className='relative border-b border-gray-50/20'>
      <div className="absolute -top-10 -right-10 h-80 w-80 bg-[#d4ff00]/20 rounded-full blur-[200px] pointer-events-none"></div>
      <div className="absolute top-0 h-screen w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none">
      </div>
      <main className="max-w-7xl mx-auto px-8 pt-20 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-gray-800 px-3 py-1 rounded-sm">
            <span className="w-2 h-2 bg-[#d4ff00] rounded-full animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
              Now Servicing • Baras, Rizal
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Secure your home with <br />
            <span className="text-[#d4ff00] drop-shadow-[0_0_15px_rgba(212,255,0,0.3)]">
              smart technology.
            </span>
          </h2>

          <p className="text-gray-400 max-w-md text-lg leading-relaxed">
            E-PROTECT installs CCTV, alarm systems, motion sensors and a lot more for Filipino homes 
            around here in Rizal. Book a site survey in under a minute.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#d4ff00] text-black px-8 py-4 rounded-sm font-bold flex items-center gap-2 hover:bg-[#b8de00] transition-all group cursor-pointer"
            onClick={() => navigate("/book")}>
              Request Service
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-gray-800 px-8 py-4 rounded-sm font-bold hover:bg-white/5 transition-colors cursor-pointer"
            onClick={(e) => scrollToSection(e, "services")}>
              Browse Services
            </button>
          </div>
        </div>

        {/* Right Column: Live Status Card */}
        <div className="lg:col-span-5 flex justify-end">
          <div className="bg-[#111111] border border-gray-800 p-8 rounded-sm w-full max-w-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-16 h-0.5 bg-[#d4ff00]" />
            
            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-4">Live Status</p>
                <div className="flex items-center gap-2">
                  <h3 className="text-3xl font-bold">Online</h3>
                  <span className="w-3 h-3 bg-[#d4ff00] rounded-full" />
                </div>
                <p className="text-gray-500 text-sm mt-1">Booking system accepting requests.</p>
              </div>

              <hr className="border-gray-800" />

              <div className="flex justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Hotline</p>
                  <p className="font-mono text-sm">0912-345-6789</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Open Hours</p>
                  <p className="font-mono text-sm text-gray-300">8am - 8pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          <div className="space-y-1">
            <p className="text-4xl font-bold">120+</p>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Installations</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl font-bold">24/7</p>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Monitoring</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl font-bold">5★</p>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Customer Rating</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl font-bold">100%</p>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Local Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;