import { Phone, Mail, MapPin, Shield } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from "/eprotect.png";

const Footer = () => {

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const scrollToSection = (e, id) => {
    if (pathname !== "/") {
      navigate("/");
      return
    }
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
    <footer className="bg-[#000000] text-white pt-20 pb-10 px-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-20 w-20">
                <img src={logo} alt="" />
              </div>
              <h2 className="text-lg font-bold tracking-tight">E-PROTECT</h2>
            </div>
            <p className="text-white/50 text-xs leading-relaxed max-w-sm">
              Professional security system installation in Baras, Rizal. CCTV, alarm, 
              and a lot more built for Filipino homes and businesses.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#111111] border border-gray-800 px-4 py-2 rounded-sm">
              <span className="w-2 h-2 bg-[#d4ff00] rounded-full animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
                Servicing Rizal Province
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-[#d4ff00] transition-colors">Home</Link></li>
              <li><a onClick={() => navigate("/book")} className="hover:text-[#d4ff00] transition-colors cursor-pointer">Request Service</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 group">
                <Phone size={16} className="text-[#d4ff00]" />
                <span className="group-hover:text-gray-300 transition-colors">0912-345-6789</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={16} className="text-[#d4ff00]" />
                <span className="group-hover:text-gray-300 transition-colors">eprotect.security@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 group">
                <MapPin size={16} className="text-[#d4ff00]" />
                <span className="group-hover:text-gray-300 transition-colors">Baras, Rizal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium tracking-wider text-gray-600">
          <p>© 2026 E-PROTECT: INSTALLATION OF SECURITY SYSTEM</p>
          <div className="flex gap-4">
            <span>TECHNOPRENEURSHIP</span>
            <span>•</span>
            <span>SYSTEM PROJECT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;