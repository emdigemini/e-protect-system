import { useEffect, useState } from "react"
import { Camera, Bell, Key, CheckCircle2, ArrowUpRight, Smartphone, Activity, UnfoldVertical, BellRing } from 'lucide-react';
import serviceContext from "./serviceContext"

const ServiceProvider = ({ children }) => {
  const [ serviceId, setServiceId ] = useState('');
  const [ focusField, setFocusField ] = useState(false);
  const [ isSystemOnline, setIsSystemOnline ] = useState(() => {
    return localStorage.getItem("isOnline") === "true" ? false : true;
  });

  const [initInvetory, setInitInventory] = useState([
    { id: "01", name: "CCTV",      category: "CCTV",    unit: "pcs", stock: 14, low: 5,  icon: <Camera size={20} />, description: 'HD/4K cameras, DVR/NVR setup, and remote viewing for homes and small businesses.', image: 'https://plus.unsplash.com/premium_photo-1682086494943-9d4e1626a9d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNjdHYlMjBpbnN0YWxsYXRpb258ZW58MHx8MHx8fDA%3D', features: ['Indoor & outdoor cameras', 'Mobile remote viewing', 'Night-vision support', '30-day storage setup'], price: 2800  },
    { id: "02", name: "Mobile Phone Monitoring",    category: "CCTV",    unit: "pcs", stock: 10, low: 5, icon: <Bell size={20} />, description: 'Motion sensors, door/window contacts, and siren systems with smart-phone notifications.', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop', features: ['Motion & magnetic sensors', 'Loud siren deterrent', 'SMS / app alerts', 'Battery backup'], price: 1500  },
    { id: "03", name: "Motion Sensors",             category: "Sensors",    unit: "pcs", stock: 8,  low: 3, icon: <Smartphone size={20} />, description: 'Access your security feeds anywhere in the world. We set up secure cloud integration for your mobile devices.', features: ['Real-time video streaming', 'Instant push notifications', 'Multi-user access level', 'Cloud playback support'], image: 'https://images.unsplash.com/photo-1726463276806-63a1e75ccb66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D',  price: 1000  },
    { id: "04", name: "Alarm System",             category: "Alarm",    unit: "pcs", stock: 4,  low: 3, icon: <Activity size={20} />, description: 'Advanced infrared technology that detects unauthorized movement and triggers alerts immediately.', image: 'https://images.unsplash.com/photo-1549884784-d66096288100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNlY3VyaXR5JTIwTW90aW9uJTIwU2Vuc29yc3xlbnwwfHwwfHx8MA%3D%3D',
      features: ['Pet-immune technology', 'Wide-angle detection', 'Wireless battery-operated', 'Tamper-proof design'],  price: 799  },
    { id: "05", name: "Door/Window Sensors",         category: "Alarm",   unit: "pcs", stock: 6,  low: 5, icon: <UnfoldVertical size={20} />,  description: 'Magnetic contact sensors that trigger an alarm the moment a door or window is pried open.', image: 'https://media.istockphoto.com/id/1174826741/photo/magnetic-alarm-sensor.jpg?s=612x612&w=0&k=20&c=-7VgWbpHDjRYfC5JahfoQBBMZqg15iUIgsWeY4ZLDSg=',
      features: ['Magnetic contact trigger', 'Ultra-slim wireless design', '2-year battery lifespan', 'Instant entry alerts'], price: 649   },
    { id: "06", name: "Video Doorbell",        category: "Intercom",   unit: "pcs", stock: 15, low: 4,  icon: <BellRing size={20} />, description: "See, hear, and speak to whoever is at your door from your smartphone, even when you're not home.", features: ['Two-way audio communication', '1080p HD Video feed', 'Person detection AI', 'Weatherproof casing'], image: 'https://plus.unsplash.com/premium_photo-1729574957020-69b6ae3652d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZpZGVvJTIwZG9vcmJlbGx8ZW58MHx8MHx8fDA%3D', price: 4000   },
  ]);

  const [requests, setRequests] = useState([
    { id: "01", name: "Juan Dela Cruz",  phone: "0912-345-6789", location: "Baras, Rizal",    service: "CCTV Installation",            date: "May 20, 2026", status: "Pending"     },
    { id: "02", name: "Maria Clara",     phone: "0918-765-4321", location: "Tanay, Rizal",    service: "Mobile Phone Monitoring", date: "May 19, 2026", status: "In Progress" },
    { id: "03", name: "Aris Sumulong",   phone: "0922-111-2222", location: "Antipolo, Rizal", service: "Video Doorbell",         date: "May 18, 2026", status: "Completed"   },
  ]);


  const setSystemOnlineStatus = () => {
    setIsSystemOnline(prev => {
      const status = !prev;
      localStorage.setItem("isOnline", String(status));
      return status;
    });
  }

  const newRequest = (body) => {
    const newData = {
      id: crypto.randomUUID(),
      name: body.name,
      phone: body.phone,
      location: body.location,
      service: body.service,
      data: body.date,
      notes: body.notes,
      status: "Pending"
    };

    setRequests(prev => [ ...prev, newData ]);
  }

  return (
    <serviceContext.Provider value={{ setSystemOnlineStatus, initInvetory, setInitInventory, isSystemOnline, serviceId, setServiceId, setFocusField, focusField, requests, newRequest }}>
      { children }
    </serviceContext.Provider>
  )
}

export default ServiceProvider