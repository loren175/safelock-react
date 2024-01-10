import Button from "../../Components/Button/Button"
import { Container } from "./styles"

function Header() {
  return (
    <Container>
      <nav>
        <a href="">Home</a>
        <a href="">Serviços</a>
        <a href="">Sobre Nós</a>
        <a href="">Compatibilidade</a>

        <div>
          <Button text="Criar conta" />
          <Button text="Entrar" />
        </div>
      </nav>
    </Container>
  )
}

export default Header
