import styled from "styled-components"
export const Container = styled.div`
  color: white;
`

export const TextArea = styled.div`
  margin: 50px;
  h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    text-shadow: 4px 4px 4px black;
  }

  p {
    margin-bottom: 100px;
  }
`

export const LogosArea = styled.div`
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 50px;
  padding: 10px;
  max-width: 1300px;
  min-width: 600px;
`

export const SuggestionArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 50px 290px 50px;
  max-width: 400px;
  gap: 10px;

  textarea {
    outline: none;
    border: 2px solid transparent;
    border-radius: 10px;
    font-weight: 400;
    font-size: 16px;
    background-color: #dddddd;
    line-height: 1.4;
    transition: all 0.2s;
  }
`
