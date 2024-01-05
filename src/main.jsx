import React from "react"
import ReactDOM from "react-dom/client"
import GlobalStyles from "./styles/global.js"
//import { Home } from "./pages/Home/index.jsx"
//import { Services } from "./pages/Services/index.jsx"
import { AboutUs } from "./pages/AboutUs/index.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <AboutUs></AboutUs>
  </React.StrictMode>
)
