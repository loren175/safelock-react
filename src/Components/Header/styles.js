import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  div {
    display: flex;
    gap: 20px;
  }

  > nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 8px;
    box-shadow: 2px 2px 12px black;
    
    > a {
      text-decoration: none;
      color: #eeeeee;
      transition: all .2s;
    }

    a:hover {
      color: #dddddd;
    }
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #eeeeee;
  transition: all 0.2s;

  &:hover {
    color: #dddddd;
  }
`
