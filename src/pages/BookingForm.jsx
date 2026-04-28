import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Calendar, Clock, ShieldCheck } from 'lucide-react';
import TimePicker from 'react-time-picker';
import { useRef, useState } from 'react';

const BookingForm = () => {
  const navigate = useNavigate();
  const dateRef = useRef(null);
  const [name, setName] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("");

  return (
    <div className="relative min-h-screen bg-black text-white font-sans py-16 px-8">
      <div className="absolute top-0 h-[23vh] w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none">
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <button className="flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 group cursor-pointer"
        onClick={() => navigate("/")}>
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back</span>
        </button>

        <div className="mb-12">
          <span className="text-[#d4ff00] font-mono text-xs tracking-[0.3em]">/ SERVICE REQUEST</span>
          <h1 className="text-4xl font-bold mt-4 mb-4">Book your installation</h1>
          <p className="text-white/50 text-sm max-w-xl leading-relaxed">
            Fill out the form below. We'll confirm availability and send a free site-survey schedule within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 bg-[#111111] border border-gray-800 p-8 md:p-12 rounded-sm">
            <form className="space-y-8">
              
              {/* Row 1: Name and Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-mono text-white/50 tracking-widest uppercase font-bold">Full Name *</label>
                  <input 
                    value={name}
                    type="text" 
                    placeholder="Juan Dela Cruz"
                    className="w-full bg-[#0a0a0a] text-xs border border-gray-800 p-3 rounded-sm focus:outline-none focus:border-[#d4ff00] transition-colors placeholder:text-gray-700"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-mono text-white/50 tracking-widest uppercase font-bold">Contact Number *</label>
                  <input 
                    value={phNumber}
                    type="number" 
                    placeholder="09123456789"
                    className="w-full bg-[#0a0a0a] text-xs border border-gray-800 p-3 rounded-sm focus:outline-none focus:border-[#d4ff00] transition-colors placeholder:text-gray-700"
                    onChange={(e) => setPhNumber(e.target.value)}
                  />
                </div>
              </div>

              {/* Row 2: Address */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono text-white/50 tracking-widest uppercase font-bold">Installation Address *</label>
                <input 
                  value={address}
                  type="text" 
                  placeholder="Block 4 Lot 7, Brgy. San Juan, Baras, Rizal"
                  className="w-full bg-[#0a0a0a] text-xs border border-gray-800 p-3 rounded-sm focus:outline-none focus:border-[#d4ff00] transition-colors placeholder:text-gray-700"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              {/* Row 3: Service Type */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono text-white/50 tracking-widest uppercase font-bold">Service Type *</label>
                <div className="relative">
                  <select className="w-full bg-[#0a0a0a] text-xs border border-gray-800 p-3 rounded-sm appearance-none focus:outline-none focus:border-[#d4ff00] transition-colors text-gray-400" value={service}
                  onChange={(e) => setService(e.target.value)}>
                    <option>Choose a service</option>
                    <option>CCTV Installation</option>
                    <option>Alarm Systems</option>
                    <option>Access Control</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" size={18} />
                </div>
              </div>

              {/* Row 4: Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor='preferred-date ' className="block text-[10px] font-mono text-white/50 tracking-widest uppercase font-bold">
                    Preferred Date *
                  </label>
                  <div className="relative group cursor-pointer">
                    <input id="preferred-date" type="date" 
                      className="w-full bg-[#0a0a0a] text-white text-xs border border-gray-800 p-3 rounded-sm cursor-pointer" 
                    />
                    <Calendar 
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none" 
                      size={18} 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="preferred-time" className="block text-[10px] font-mono text-white/50 tracking-widest uppercase font-bold">
                    Preferred Time *
                  </label>
                  <div className="relative">
                    <input ref={dateRef} id="preferred-time" type="time" required className="w-full bg-[#0a0a0a] text-xs border border-gray-800 p-3 rounded-sm focus:outline-none"/>
                    <Clock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" size={18}
                    onClick={() => dateRef?.current?.showPicker?.()} />
                  </div>
                </div>
              </div>

              {/* Row 5: Notes */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono text-white/50 tracking-widest uppercase font-bold">Notes (Optional)</label>
                <textarea 
                  rows={4}
                  placeholder="Special requests..."
                  className="w-full bg-[#0a0a0a] text-xs border border-gray-800 p-4 rounded-sm focus:outline-none focus:border-[#d4ff00] transition-colors placeholder:text-gray-700 resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4 pt-4">
                <button type="button" className="px-8 py-3 border border-gray-800 rounded-sm font-bold text-sm hover:bg-white/5 transition-colors cursor-pointer"
                onClick={() => {
                  setName("");
                  setPhNumber("");
                  setAddress("");
                  setService("");
                }}>
                  Clear
                </button>
                <button type="submit" className="px-8 py-3 bg-[#d4ff00] text-black rounded-sm font-bold text-sm hover:bg-[#b8de00] transition-colors cursor-pointer">
                  Submit Request
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-6">
            {/* Steps Card */}
            <div className="bg-[#111111] border border-gray-800 p-8 rounded-sm">
              <ShieldCheck className="text-[#d4ff00] mb-6" size={24} />
              <h3 className="text-lg font-bold mb-6">What happens next?</h3>
              <div className="space-y-6">
                {[
                  "We confirm your request via call or SMS within 24 hours.",
                  "We schedule a free on-site survey at your preferred time.",
                  "You receive a written quote and we proceed with installation."
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="shrink-0 w-6 h-6 border border-[#d4ff00] text-[#d4ff00] text-[10px] font-bold flex items-center justify-center rounded-sm">
                      {i + 1}
                    </span>
                    <p className="text-sm text-gray-400 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingForm;