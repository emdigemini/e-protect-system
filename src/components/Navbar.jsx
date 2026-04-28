import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import { useNavigate, useLocation, Link } from 'react-router-dom';
import logo from "../../public/eprotect.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    <nav className="sticky top-0 z-199 w-full bg-[#0a0a0a] md:backdrop-blur-xl md:bg-[#0a0a0a]/35 border-b border-gray-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="h-15 w-15">
              <img src={logo} alt="" />
            </div>
            <div>
              <h1 className="font-bold leading-none tracking-tight text-white">E-PROTECT</h1>
              <p className="text-[10px] text-white/50 tracking-[0.2em]">SECURITY • BARAS, RIZAL</p>
            </div>
          </div>

          {/* Desktop Menu (Visible on md and up) */}
          <div className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-400">
            <Link to="/" onClick={(e) => scrollToSection(e, "home")} className="hover:text-white transition-colors">Home</Link>
            <Link to="/" onClick={(e) => scrollToSection(e, "services")} className="hover:text-white transition-colors">Services</Link>
            <Link to="/" onClick={(e) => scrollToSection(e, "why_us")} className="hover:text-white transition-colors">Why Us</Link>
            <Link to="/" onClick={(e) => scrollToSection(e, "contact")} className="hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <button className="bg-[#d4ff00] text-black px-4 py-2 rounded-sm text-sm font-bold hover:bg-[#b8de00] transition-colors cursor-pointer"
              onClick={() => navigate("/book")}
            >
              Request Service
            </button>
          </div>

          {/* Mobile Menu Close Button */}
          <div className="fixed top-2 right-2 md:hidden z-99 flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`fixed top-16 left-0 w-full md:hidden bg-[#0a0a0a] border-b border-gray-800 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center gap-6 text-sm font-medium text-gray-400">
          <Link to="/" className="hover:text-white" onClick={(e) => scrollToSection(e, "home")}>Home</Link>
          <Link to="/" className="hover:text-white" onClick={(e) => scrollToSection(e, "services")}>Services</Link>
          <Link to="/" className="hover:text-white" onClick={(e) => scrollToSection(e, "why_us")}>Why Us</Link>
          <Link to="/" className="hover:text-white" onClick={(e) => scrollToSection(e, "contact")}>Contact</Link>
          <hr className="w-1/2 border-gray-800" />
          <button className="bg-[#d4ff00] text-black w-3/4 py-3 rounded-sm font-bold active:scale-95 transition-all"
          onClick={() => navigate("/book")}>
            Request Service
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;