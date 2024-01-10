import styled from "styled-components"

export const Container = styled.div`
  color: white;
`

export const Info = styled.div`
  margin: 80px;
  display: grid;
  grid-template-columns: 280px 200px;
  grid-template-rows: 120px 200px 100px;
  grid-template-areas:
    "h1 svg"
    "p svg"
    "button svg";
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;

  h1 {
    grid-area: h1;
  }

  p {
    grid-area: p;
  }

  svg {
    grid-area: svg;
  }

  div {
    grid-area: button;
  }
`
export const TextH4 = styled.div`
  margin: 200px 0px 35px 20px;
`
export const Contact = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: 70px 200px;
  grid-template-rows: 50px 100px;
  align-items: center;
`
