import { useState } from "react"
import serviceContext from "./serviceContext"

const ServiceProvider = ({ children }) => {
  const [ serviceId, setServiceId ] = useState('');
  const [ focusField, setFocusField ] = useState(false);
  return (
    <serviceContext.Provider value={{ serviceId, setServiceId, setFocusField, focusField }}>
      { children }
    </serviceContext.Provider>
  )
}

export default ServiceProvider