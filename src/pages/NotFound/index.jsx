import { Container } from "./styles"
import { FloorBG } from "../../Components/FloorBG/FloorBG"
import Header from "../../Components/Header/Header"
import { Footer } from "../../Components/Footer/Footer"

export function NotFound() {
  return (
    <Container>
      <Header />
      <FloorBG />
      <h1>Página não encontrada.</h1>
      <Footer />
    </Container>
  )
}