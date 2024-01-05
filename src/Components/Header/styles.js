import styled from "styled-components"

export const Container = styled.div`
  > nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 8px;
    box-shadow: 2px 2px 12px black;
    > a {
      text-decoration: none;
      color: white;
    }
  }
`
