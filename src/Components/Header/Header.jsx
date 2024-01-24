import Button from "../../Components/Button/Button"
import { Container } from "./styles"

function Header() {
  return (
    <Container>
      <nav>
        <a href="/">Home</a>
        <a href="/serviços">Serviços</a>
        <a href="/sobre">Sobre Nós</a>
        <a href="/compatibilidade">Compatibilidade</a>

        <div>
          <Button text="Criar conta" />
          <Button text="Entrar" />
        </div>
      </nav>
    </Container>
  )
}

export default Header
