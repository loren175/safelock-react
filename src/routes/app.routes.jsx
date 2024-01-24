import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home/index.jsx"
import { Services } from "../pages/Services/index.jsx"
import { AboutUs } from "../pages/AboutUs/index.jsx"
import { NotFound } from "../pages/NotFound/index.jsx"
import { Compatibility } from "../pages/Compatibility/index.jsx"

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <Home />,
    children: [
      
    ]
  },
  {
    path: "/serviços",
    element: <Services />,
  },
  {
    path: "/sobre",
    element: <AboutUs />,
  },
  {
    path: "/compatibilidade",
    element: <Compatibility />,
  },
])
