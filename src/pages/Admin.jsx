import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { FiSliders, FiUser, FiMenu, FiX, FiLock } from 'react-icons/fi';
import { MdInventory } from "react-icons/md";
import serviceContext from '../context/serviceContext';

const accessKey = "123456";

function Admin() {
  const { pathname } = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [adminKey, setAdminKey] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const savedAccess = localStorage.getItem("e_protect_admin_access");
    if (savedAccess === "true") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHasAccess(true);
    }
  }, []);

  const handleVerifyKey = (e) => {
    e.preventDefault();
    if (adminKey === accessKey) {
      setHasAccess(true);
      setError("");
      localStorage.setItem("e_protect_admin_access", "true");
    } else {
      setError("Invalid Access Key! Try again.");
      setAdminKey("");
    }
  };

  const handleLockPortal = () => {
    setHasAccess(false);
    localStorage.removeItem("e_protect_admin_access");
  };

  return (
    <>
      {/* ── ACCESS KEY OVERLAY MODAL ── */}
      {!hasAccess && (
        <div className="fixed inset-0 bg-[#0A0A0A] z-9999 flex items-center justify-center p-4 antialiased selection:bg-[#DFFF00] selection:text-black">
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          
          <div className="w-full max-w-md bg-[#121212] border border-neutral-800/80 p-8 rounded-2xl shadow-2xl relative backdrop-blur-md">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#DFFF00]/10 border border-[#DFFF00]/30 flex items-center justify-center text-[#DFFF00] mb-4">
                <FiLock size={22} />
              </div>
              <h2 className="text-xl font-bold tracking-tight text-white">Admin Restricted Access</h2>
              <p className="text-xs text-neutral-500 mt-1 font-sans">Please enter the 6-digit access key to unlock the portal.</p>
            </div>

            <form onSubmit={handleVerifyKey} className="space-y-4">
              <div>
                <input 
                  type="password" 
                  maxLength={6}
                  placeholder="• • • • • •"
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  className="w-full bg-[#1A1A1A] border border-neutral-800 focus:border-[#DFFF00] rounded-xl py-3 px-4 text-center font-mono tracking-[0.5em] text-lg text-white placeholder-neutral-700 outline-none transition-all"
                  autoFocus
                />
              </div>

              {error && (
                <p className="text-xs text-red-400 font-medium text-center bg-red-500/10 py-2 rounded-lg border border-red-500/20">
                  {error}
                </p>
              )}

              <button 
                type="submit"
                className="w-full bg-[#DFFF00] hover:bg-[#cbe600] text-black font-bold py-3 px-4 rounded-xl text-sm tracking-wide transition-all cursor-pointer"
              >
                Verify & Grant Access
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ── PORTAL MAIN CONTENT ── */}
      <div
        className="min-h-screen bg-[#0A0A0A] text-white font-sans antialiased selection:bg-[#DFFF00] selection:text-black relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      >
        <div className="flex min-h-screen lg:h-screen lg:overflow-hidden">

          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* ── SIDEBAR ── */}
          <aside className={`
            fixed inset-y-0 left-0 z-50 w-64 bg-[#121212]/95 border-r border-neutral-800/60 backdrop-blur-md p-6 flex flex-col justify-between
            transform transition-transform duration-300 ease-in-out
            lg:translate-x-0 lg:static lg:h-screen lg:shrink-0
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}>
            <div>
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-[#DFFF00] flex items-center justify-center text-[#DFFF00] font-bold text-sm">EP</div>
                  <div>
                    <h1 className="text-sm font-bold tracking-wider uppercase">E-PROTECT</h1>
                    <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Admin Portal</p>
                  </div>
                </div>
                {/* Close Button para sa Mobile View */}
                <button 
                  className="lg:hidden text-neutral-400 hover:text-white cursor-pointer" 
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <FiX size={20} />
                </button>
              </div>

              <nav className="space-y-1">
                <NavLink to="/admin-portal"
                  onClick={() => setIsSidebarOpen(false)} 
                  className={`flex items-center gap-3 px-4 py-3 font-semibold rounded-lg text-sm transition-all
                  ${pathname === "/admin-portal"
                      ? "bg-[#DFFF00] text-black" 
                      : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                  }`}
                >
                  <FiSliders className="text-lg" /> Dashboard
                </NavLink>
                <NavLink to="/admin-portal/inventory"
                  onClick={() => setIsSidebarOpen(false)} 
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all
                  ${pathname === "/admin-portal/inventory"
                      ? "bg-[#DFFF00] text-black" 
                      : "text-neutral-400 hover:bg-neutral-900 hover:text-white "
                  }`}
                >
                  <MdInventory className="text-lg" /> Inventory
                </NavLink>
              </nav>
            </div>
            <div className='flex flex-col gap-4'>
              <a href="/" className="text-[#cfff04] no-underline bg-transparent border-none p-0 hover:text-white">
                  Customer Portal
                </a>
              <div 
                onClick={handleLockPortal}
                className="pt-4 border-t border-neutral-800/60 flex items-center justify-between group cursor-pointer"
                title="Click to lock portal"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-red-500/10 transition-colors">
                    <FiUser className="text-neutral-400 group-hover:text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium group-hover:text-red-400 transition-colors">Admin Panel</p>
                    <p className="text-xs text-neutral-500">Baras, Rizal</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* ── MAIN CONTENT WRAPPER ── */}
          <div className="flex-1 flex flex-col min-w-0 lg:h-screen">
            
            {/* Mobile Top Header */}
            <div className="flex lg:hidden items-center justify-between p-4 bg-[#121212]/70 border-b border-neutral-800/60 backdrop-blur-md sticky top-0 z-30">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 text-white hover:bg-neutral-800 rounded-lg transition-all cursor-pointer"
              >
                <FiMenu size={24} />
              </button>
              <div className="text-xs font-mono font-bold tracking-wider text-[#DFFF00]">E-PROTECT ADMIN</div>
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs text-neutral-400 font-bold">
                EP
              </div>
            </div>

            {/* MAIN CONTENT */}
            <main className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-12">
              <Outlet />
            </main>
          </div>

        </div>
      </div>
    </>
  );
}

export default Admin;