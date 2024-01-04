import styled from "styled-components"

export const Container = styled.div`
  background-color: transparent;
  width: 200px;
  height: 400px;
  border-radius: 0.25rem;
  box-shadow: 4px 4px 12px black;
  display: flex;

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

  p {
    max-width: 90%;
    font-size: 1.1rem;
    overflow-wrap: break-word;
    line-height: 1rem;
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;
    margin-right: 0.5rem;
  }

  span {
    background-color: transparent;
    width: 83%;
    max-width: 90%;
    overflow-wrap: break-word;
    height: 150px;
    border-radius: 12px;
    border: 2px solid black;
    box-shadow: 2px 2px 8px black;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    line-height: 1.625;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  button {
    border: 1px solid #93291e;
    font-weight: bold;
    border-radius: 10px;
    padding: 15px;
    width: 90%;
    background: linear-gradient(to right, #f85032, #e73827);
    cursor: pointer;
    margin-bottom: 10px;
  }
`
