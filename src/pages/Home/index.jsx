import { LockBG } from "../../Components/LockBG/LockBG"
import Main from "../../Components/Main/Main"
import Header from "../../Components/Header/Header"
import { Container } from "./styles"

export function Home () {
  return (
    <Container>
      <Header></Header>
      <LockBG></LockBG>
      <Main></Main>
    </Container>
  )
}