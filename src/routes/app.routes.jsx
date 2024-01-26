import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../pages/Home/index.jsx"
import { Services } from "../pages/Services/index.jsx"
import { AboutUs } from "../pages/AboutUs/index.jsx"
import { NotFound } from "../pages/NotFound/index.jsx"
import { SignIn } from "../pages/SignIn/index.jsx"
import { SignUp } from "../pages/SignUp/index.jsx"
import { Compatibility } from "../pages/Compatibility/index.jsx"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/compatibility" element={<Compatibility />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      <Route path="*" element={<Navigate to="/notfound" />} />
    </Routes>
  )
}
