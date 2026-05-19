import { useContext, useEffect, useState } from "react";
import serviceContext from "../context/serviceContext";
import { FiPhone, FiMapPin, FiPower } from 'react-icons/fi';

const AdminDashboard = () => {
  const { setSystemOnlineStatus, isSystemOnline, requests } = useContext(serviceContext);
  useEffect(() => console.log(requests), [requests])

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <p className="text-xs text-[#DFFF00] font-mono tracking-widest uppercase mb-1">Overview</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">System Dashboard</h2>
        </div>

        {/* Status Box - Malawak sa mobile, compact sa desktop */}
        <div className="bg-[#121212]/80 border border-neutral-800/60 p-4 rounded-xl flex items-center justify-between gap-6 backdrop-blur-md w-full md:w-auto md:min-w-70">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">Client Page Status</p>
            <div className="flex items-center gap-2 mt-1">
              <span className={`w-2 h-2 rounded-full ${isSystemOnline ? 'bg-[#31fc1b] animate-pulse' : 'bg-red-500'}`}></span>
              <span className="text-sm font-bold tracking-wide">{isSystemOnline ? 'Online' : 'Offline'}</span>
            </div>
          </div>
          <button
            onClick={() => setSystemOnlineStatus()}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all cursor-pointer whitespace-nowrap ${
              isSystemOnline
                ? 'bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20'
                : 'bg-[#31fc1b]/10 border-[#31fc1b]/30 text-[#31fc1b] hover:bg-[#31fc1b]/20'
            }`}
          >
            <FiPower /> {isSystemOnline ? 'Go Offline' : 'Go Online'}
          </button>
        </div>
      </header>

      {/* Stat Cards - Isang column sa mobile, lumalawak pataas */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
        <div className="bg-[#121212]/40 border border-neutral-800/60 rounded-xl p-6 relative overflow-hidden group hover:border-neutral-700 transition-all">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#DFFF00]"></div>
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">Total Installations</p>
          <h3 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white group-hover:text-[#DFFF00] transition-colors">120+</h3>
        </div>
        <div className="bg-[#121212]/40 border border-neutral-800/60 rounded-xl p-6 relative overflow-hidden group hover:border-neutral-700 transition-all">
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">Pending Surveys</p>
          <h3 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white group-hover:text-blue-400 transition-colors">04</h3>
        </div>
        <div className="bg-[#121212]/40 border border-neutral-800/60 rounded-xl p-6 relative overflow-hidden group hover:border-neutral-700 transition-all sm:col-span-2 lg:col-span-1">
          <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">Active Monitoring</p>
          <h3 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white group-hover:text-emerald-400 transition-colors">24/7</h3>
        </div>
      </section>

      {/* Bookings Table */}
      <section className="bg-[#121212]/40 border border-neutral-800/60 rounded-2xl overflow-hidden backdrop-blur-sm mb-10">
        <div className="p-6 border-b border-neutral-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-lg font-bold tracking-tight">Recent Site Survey Bookings</h3>
          <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 self-start sm:self-auto">
            {requests.length} total entries
          </span>
        </div>
        
        {/* Ang container na ito ang nagpapasalo sa scroll ng table sa mobile */}
        <div className="overflow-x-auto w-full patch-scroll">
          <table className="w-full text-left border-collapse min-w-200">
            <thead>
              <tr className="border-b border-neutral-800/40 bg-neutral-900/30 text-neutral-400 text-xs font-mono uppercase tracking-wider">
                <th className="p-4 pl-6">Client Info</th>
                <th className="p-4">Requested Service</th>
                <th className="p-4">Location</th>
                <th className="p-4">Date Booked</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6 text-right">Actions</th>
              </tr>
            </thead>
            <RequestList requests={requests} />
          </table>
        </div>
      </section>
    </div>
  )
}

const RequestList = ({ requests }) => {
  return (
    <tbody className="divide-y divide-neutral-800/30 text-sm">
      {requests.map((req) => (
        <tr key={req.id} className="hover:bg-neutral-900/20 transition-colors group">
          <td className="p-4 pl-6">
            <div className="font-semibold text-white group-hover:text-[#DFFF00] transition-colors whitespace-nowrap">{req.name}</div>
            <div className="text-xs text-neutral-500 flex items-center gap-1 mt-1 font-mono">
              <FiPhone className="text-[10px]" /> {req.phone}
            </div>
          </td>
          <td className="p-4 text-neutral-300 font-medium whitespace-nowrap">{req.service}</td>
          <td className="p-4 text-neutral-400">
            <div className="flex items-center gap-1 text-xs whitespace-nowrap">
              <FiMapPin className="text-[#DFFF00]" /> {req.location}
            </div>
          </td>
          <td className="p-4 text-xs font-mono text-neutral-500 whitespace-nowrap">{req.date}</td>
          <td className="p-4">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium font-mono whitespace-nowrap ${
              req.status === 'Completed'   ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
              req.status === 'In Progress' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                                             'bg-amber-500/10 text-amber-400 border border-amber-500/20'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${
                req.status === 'Completed'   ? 'bg-emerald-400' :
                req.status === 'In Progress' ? 'bg-blue-400' :
                                               'bg-amber-400'
              }`}></span>
              {req.status}
            </span>
          </td>
          <td className="p-4 pr-6 text-right">
            <div className="flex items-center justify-end gap-2">
              <button className="p-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg text-xs font-medium transition-all text-neutral-300 cursor-pointer whitespace-nowrap">
                View Notes
              </button>
              <button className="p-2 bg-[#DFFF00] hover:bg-[#cbe600] text-black rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap">
                Approve
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default AdminDashboard;