import { Camera, Bell, Key, CheckCircle2, ArrowUpRight, Smartphone, Activity, UnfoldVertical, BellRing } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: '01',
      icon: <Camera size={20} />,
      title: 'CCTV Installation',
      description: 'HD/4K cameras, DVR/NVR setup, and remote viewing for homes and small businesses.',
      image: 'https://plus.unsplash.com/premium_photo-1682086494943-9d4e1626a9d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNjdHYlMjBpbnN0YWxsYXRpb258ZW58MHx8MHx8fDA%3D',
      features: ['Indoor & outdoor cameras', 'Mobile remote viewing', 'Night-vision support', '30-day storage setup'],
      price: '₱3,000 -  ₱10,000'
    },
    {
      id: '02',
      icon: <Bell size={20} />,
      title: 'Alarm Systems',
      description: 'Motion sensors, door/window contacts, and siren systems with smart-phone notifications.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop',
      features: ['Motion & magnetic sensors', 'Loud siren deterrent', 'SMS / app alerts', 'Battery backup'],
      price: '₱2,500 -  ₱8,000'
    },
    {
      id: '03',
      icon: <Smartphone size={20} />,
      title: 'Mobile Phone Monitoring',
      description: 'Access your security feeds anywhere in the world. We set up secure cloud integration for your mobile devices.',
      image: 'https://images.unsplash.com/photo-1726463276806-63a1e75ccb66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D',
      features: ['Real-time video streaming', 'Instant push notifications', 'Multi-user access level', 'Cloud playback support'],
      price: '₱1,500 - ₱3,000'
    },
    {
      id: '04',
      icon: <Activity size={20} />,
      title: 'Motion Sensors',
      description: 'Advanced infrared technology that detects unauthorized movement and triggers alerts immediately.',
      image: 'https://images.unsplash.com/photo-1549884784-d66096288100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNlY3VyaXR5JTIwTW90aW9uJTIwU2Vuc29yc3xlbnwwfHwwfHx8MA%3D%3D',
      features: ['Pet-immune technology', 'Wide-angle detection', 'Wireless battery-operated', 'Tamper-proof design'],
      price: '₱1,200 - ₱3,500'
    },
    {
      id: '05',
      icon: <UnfoldVertical size={20} />,
      title: 'Door/Window Sensors',
      description: 'Magnetic contact sensors that trigger an alarm the moment a door or window is pried open.',
      image: 'https://media.istockphoto.com/id/1174826741/photo/magnetic-alarm-sensor.jpg?s=612x612&w=0&k=20&c=-7VgWbpHDjRYfC5JahfoQBBMZqg15iUIgsWeY4ZLDSg=',
      features: ['Magnetic contact trigger', 'Ultra-slim wireless design', '2-year battery lifespan', 'Instant entry alerts'],
      price: '₱800 - ₱2,500'
    },
    {
      id: '06',
      icon: <BellRing size={20} />,
      title: 'Video Doorbell',
      description: "See, hear, and speak to whoever is at your door from your smartphone, even when you're not home.",
      image: 'https://plus.unsplash.com/premium_photo-1729574957020-69b6ae3652d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZpZGVvJTIwZG9vcmJlbGx8ZW58MHx8MHx8fDA%3D',
      features: ['Two-way audio communication', '1080p HD Video feed', 'Person detection AI', 'Weatherproof casing'],
      price: '₱4,500 - ₱8,500'
    }
  ];

  return (
    <section id="services" className="bg-[#0a0a0a] text-white py-24 px-8 border-b border-gray-50/20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[#d4ff00] font-mono text-[10px]">/ 01 — SERVICES</span>
            </div>
            <h2 className="text-5xl font-bold leading-tight max-w-xl">
              Three core services. One reliable team.
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-gray-500 text-xs leading-relaxed">
              Pricing is indicative. Final quote depends on site survey, number of units, and cabling distance.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-800">
          {services.map((service) => (
            <div key={service.id} className="border-r border-gray-800 last:border-r-0 p-8 flex flex-col group">
              {/* Card Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="border border-gray-700 p-3 rounded-sm text-gray-400">
                  {service.icon}
                </div>
                <span className="text-[10px] font-mono text-gray-600">{service.id}</span>
              </div>

              {/* Image Placeholder */}
              <div className="relative aspect-video mb-8 overflow-hidden bg-gray-900">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 opacity-60"
                />
              </div>

              {/* Content */}
              <div className="grow space-y-4">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 pt-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 size={14} className="text-[#d4ff00]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div className="mt-12 pt-8 border-t border-gray-800 flex justify-between items-end">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Starting At</p>
                  <p className="text-xl font-bold">{service.price}</p>
                </div>
                <button className="bg-[#d4ff00] p-3 text-black rounded-sm hover:bg-[#b8de00] transition-colors">
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;