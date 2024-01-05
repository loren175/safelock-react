import styled from "styled-components";

export const Container = styled.ul`
  color: white;
  background-color: transparent;
  width: 200px;
  height: 100%;
  border-radius: 0.25rem;

  svg {
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;
    margin-right: 0.5rem;
  }

  ul {
    flex: 1 1 0%;
    color: rgba(156, 163, 175, 1);
  }

  li {
    margin-bottom: 0.5rem;
    display: flex;
    margin-left: 0.5rem;
  }
`