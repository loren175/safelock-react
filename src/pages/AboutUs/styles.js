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

export const Contact = styled.div``
