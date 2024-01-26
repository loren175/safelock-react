import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: black;
  color: white;

  border-radius: 7px;

  > input {
    height: 46px;
    width: 100%;

    padding: 12px;
    padding-left: 7px;

    color: white;
    background: transparent;
    border: 0;

    &::placeholder {
      color: grey;
    }
  }

  > svg {
    margin-left: 12px;
    color: grey;
  }
`
