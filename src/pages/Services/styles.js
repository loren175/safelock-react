import styled from "styled-components"
export const Container = styled.div`
  color: white;
  width: 100%;
  height: 100vh;
`

export const Introduction = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;
  
  h1 {
    text-shadow: 4px 4px 4px black;
  }

`

export const CardDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const CardArea = styled.div`
  margin: 120px 0px 120px 0px;
  display: flex;
  justify-content: space-evenly;
`

export const PayFlags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border: 1px solid grey;
  width: 50vw;

  > div {
    display: flex;
    justify-content: center;
  }

  > h3 {
    margin-right: 50px;
    font-weight: 400;
  }

   ul {
    display: flex;
    gap: 40px;
    list-style: none;
    align-items: center;
  }
`
