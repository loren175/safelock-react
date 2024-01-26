import styled from "styled-components"
export const Container = styled.div`
  color: white;
  width: 100%;
  height: 100vh;
`

export const RegisterArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 75px;
`

export const Form = styled.form`
  background-color: #1a0a0a;
  padding: 54px 32px;
  border-radius: 7px;

  min-width: 370px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  > h1 {
    font-size: 24px;
    margin-bottom: 24px;
    line-height: 32px;
  }

  > a {
    font-size: 16px;
    margin-top: 24px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
  }
`