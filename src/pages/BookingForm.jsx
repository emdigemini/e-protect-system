import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Calendar, Clock, ShieldCheck } from 'lucide-react';
import TimePicker from 'react-time-picker';
import { useContext, useEffect, useRef, useState } from 'react';
import serviceContext from '../context/serviceContext';
import toast from 'react-hot-toast';

const services = [
  { id: '01', name: 'CCTV Installation' },
  { id: '02', name: 'Mobile Phone Monitoring' },
  { id: '03', name: 'Alarm Systems' },
  { id: '04', name: 'Motion Sensors' },
  { id: '05', name: 'Door/Window Sensors' },
  { id: '06', name: 'Video Doorbell' },
] 

const BookingForm = () => {
  const navigate = useNavigate();
  const dateRef = useRef(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const { serviceId, setServiceId, focusField, newRequest } = useContext(serviceContext);

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);

    if (digits.length <= 4) return digits;
    if (digits.length <= 7) return `${digits.slice(0, 4)}-${digits.slice(4)}`;
    return `${digits.slice(0, 4)}-${digits.slice(4, 7)}-${digits.slice(7)}`;
  };

  const getServices = () => {
    return services.filter(s => s.id === serviceId).map(s => s.name).join("");
  }

  const transformDate = () => {
    return new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }

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
            <form onSubmit={(e) => {
              e.preventDefault();
              newRequest({
                name, phone, location,
                service: getServices(),
                date: transformDate(),
                notes
              });
              setName("");
              setPhone("");
              setLocation("");
              setServiceId("");
              setNotes("");
              toast.success("Booking received! We'll review it and get back to you soon.");
            }} className="space-y-8">
              
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
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-mono text-white/50 tracking-widest uppercase font-bold">Contact Number *</label>
                  <input 
                    value={phone}
                    type="text" 
                    placeholder="0912-345-6789"
                    className="w-full bg-[#0a0a0a] text-xs border border-gray-800 p-3 rounded-sm focus:outline-none focus:border-[#d4ff00] transition-colors placeholder:text-gray-700"
                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                    required
                  />
                </div>
              </div>

              {/* Row 2: Address */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono text-white/50 tracking-widest uppercase font-bold">Installation Address *</label>
                <input 
                  value={location}
                  type="text" 
                  placeholder="Block 4 Lot 7, Brgy. San Juan, Baras, Rizal"
                  className="w-full bg-[#0a0a0a] text-xs border border-gray-800 p-3 rounded-sm focus:outline-none focus:border-[#d4ff00] transition-colors placeholder:text-gray-700"
                  onChange={(e) => setLocation(e.target.value)}
                    required
                />
              </div>

              {/* Row 3: Service Type */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono text-white/50 tracking-widest uppercase font-bold">Service Type *</label>
                <div className="relative">
                  <select className="w-full bg-[#0a0a0a] text-xs border border-gray-800 p-3 rounded-sm appearance-none focus:outline-none focus:border-[#d4ff00] transition-colors text-gray-400" 
                  required
                  value={serviceId}
                  autoFocus={focusField}
                  onChange={(e) => setServiceId(e.target.value)}>
                    <option value="">Choose a service</option>
                    <option value="01">CCTV Installation</option>
                    <option value="02">Alarm Systems</option>
                    <option value="03">Mobile Phone Monitoring</option>
                    <option value="04">Motion Sensors</option>
                    <option value="05">Door/Window Sensors</option>
                    <option value="06">Video Doorbell</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" size={18} />
                </div>
              </div>

              {/* Row 4: Notes */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono text-white/50 tracking-widest uppercase font-bold">Notes (Optional)</label>
                <textarea 
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Special requests..."
                  className="w-full bg-[#0a0a0a] text-xs border border-gray-800 p-4 rounded-sm focus:outline-none focus:border-[#d4ff00] transition-colors placeholder:text-gray-700 resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4 pt-4">
                <button type="button" className="px-8 py-3 border border-gray-800 rounded-sm font-bold text-sm hover:bg-white/5 transition-colors cursor-pointer"
                onClick={() => {
                  setName("");
                  setPhone("");
                  setLocation("");
                  setServiceId("");
                  setNotes(""); 
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