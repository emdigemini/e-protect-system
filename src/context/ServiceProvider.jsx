import { useEffect, useState } from "react"
import serviceContext from "./serviceContext"

const ServiceProvider = ({ children }) => {
  const [ serviceId, setServiceId ] = useState('');
  const [ focusField, setFocusField ] = useState(false);
  const [ isSystemOnline, setIsSystemOnline ] = useState(() => {
    return localStorage.getItem("isOnline") !== "true";
  });

  const [requests, setRequests] = useState([
    { id: "EP-001", name: "Juan Dela Cruz",  phone: "0912-345-6789", location: "Baras, Rizal",    service: "CCTV Installation",            date: "May 20, 2026", status: "Pending"     },
    { id: "EP-002", name: "Maria Clara",     phone: "0918-765-4321", location: "Tanay, Rizal",    service: "Mobile Phone Monitoring", date: "May 19, 2026", status: "In Progress" },
    { id: "EP-003", name: "Aris Sumulong",   phone: "0922-111-2222", location: "Antipolo, Rizal", service: "Video Doorbell",         date: "May 18, 2026", status: "Completed"   },
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
    <serviceContext.Provider value={{ setSystemOnlineStatus, isSystemOnline, serviceId, setServiceId, setFocusField, focusField, requests, newRequest }}>
      { children }
    </serviceContext.Provider>
  )
}

export default ServiceProvider