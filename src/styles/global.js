import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body * {
  font-family: "Tilt Neon", sans-serif;
  }

  body {
  background: #1a0a0a;
  }

  img {
  width: 100%;
  height: 1000px;
  opacity: 0.35;
  }
  `
