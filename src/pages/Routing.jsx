import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Admin from "./Admin"

export const Routing = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}


export const AdminRouting = () => {
  return (
    <>
      <Admin />
    </>
  )
}