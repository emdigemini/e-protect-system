import { Routes, Route } from "react-router-dom"
import Routing from "./pages/Routing"
import Dashboard from "./pages/Dashboard"
import ServicesSection from "./pages/ServicesSection"
import WhyChooseUs from "./pages/WhyChooseUs"
import ContactUs from "./pages/ContactUs"
import BookingForm from "./pages/BookingForm"

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#d4ff00] selection:text-black">
      <Routes>
        <Route path="/" element={<Routing />}>
          <Route
            index
            element={
              <>
                <Dashboard />
                <ServicesSection />
                <WhyChooseUs />
                <ContactUs />
              </>
            }
          />
        </Route>
        <Route path="/book" element={<Routing />}>
            <Route index element={
              <BookingForm />
            } />
        </Route>
      </Routes>
    </div>
  )
}

export default App