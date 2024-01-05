import styled from "styled-components"

export const Container = styled.div`
  background-color: transparent;
  width: 200px;
  height: 100%;
  border-radius: 0.25rem;
  margin-bottom: 15px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    color: white;
  }

  h2 {
    margin-top: 10px;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    overflow-wrap: break-word;
    max-width: 90%;
  }

  span {
    max-width: 90%;
    font-size: 1.1rem;
    overflow-wrap: break-word;
    line-height: 1rem;
  }

`
