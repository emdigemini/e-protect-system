import { useState } from "react"
import serviceContext from "./serviceContext"

const ServiceProvider = ({ children }) => {
  const [ serviceId, setServiceId ] = useState('');
  const [ focusField, setFocusField ] = useState(false);
  const [ isSystemOnline, setIsSystemOnline ] = useState(() => {
    return localStorage.getItem("isOnline") === "true";
  });

  const setSystemOnlineStatus = () => {
    setIsSystemOnline(prev => {
      const status = !prev;
      localStorage.setItem("isOnline", String(status));
      return status;
    });
  }

  return (
    <serviceContext.Provider value={{ setSystemOnlineStatus, isSystemOnline, serviceId, setServiceId, setFocusField, focusField }}>
      { children }
    </serviceContext.Provider>
  )
}

export default ServiceProvider