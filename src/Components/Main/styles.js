import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 100px 30px 420px;
  padding: 50px;
  color: white;

  > h1 {
    font-size: 65px;
  }

  > p {
    margin-top: 20px;
    width: 500px;
    font-size: 20px;
  }

  > div {
    display: flex;
    gap: 20px;
  }
`
