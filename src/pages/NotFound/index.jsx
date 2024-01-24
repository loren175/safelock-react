import { Container } from "./styles"
import { FloorBG } from "../../Components/FloorBG/FloorBG"
import Header from "../../Components/Header/Header"

export function NotFound() {
  return (
    <Container>
      <Header />
      <FloorBG/>
      <h1>Página não encontrada.</h1>
    </Container>
  )
}