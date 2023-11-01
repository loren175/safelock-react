import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import GlobalStyles from "./styles/global.js"
import { Img } from "./Components/Img/Img"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Header></Header>
    <Img></Img>
    <Main></Main>
  </React.StrictMode>
)
