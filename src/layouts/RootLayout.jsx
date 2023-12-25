import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
