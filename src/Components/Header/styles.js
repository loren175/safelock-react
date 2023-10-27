import styled from "styled-components"

export const Container = styled.div`
  > nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid black;
    > a {
      text-decoration: none;
      color: white;
    }
  }
`
