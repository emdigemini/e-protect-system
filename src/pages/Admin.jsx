import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { FiSliders, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { MdInventory } from "react-icons/md";
import serviceContext from '../context/serviceContext';

function Admin() {
  const { pathname } = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Kusa nitong isasara ang mobile menu tuwing magpapalit ng ruta/page
  // useEffect(() => {
  //   setIsSidebarOpen(false);
  // }, [pathname]);

  return (
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
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 lg:hidden"
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

          <div className="pt-4 border-t border-neutral-800/60 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
              <FiUser className="text-neutral-400" />
            </div>
            <div>
              <p className="text-sm font-medium">Admin Panel</p>
              <p className="text-xs text-neutral-500">Baras, Rizal</p>
            </div>
          </div>
        </aside>

        {/* ── MAIN CONTENT WRAPPER ── */}
        <div className="flex-1 flex flex-col min-w-0 lg:h-screen">
          
          {/* Mobile Top Header - Lalabas lang kapag mobile/tablet screens */}
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

          {/* Dynamic Inner Dashboard or Inventory Pages */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-12">
            <Outlet />
          </main>
        </div>

      </div>
    </div>
  );
}

export default Admin;