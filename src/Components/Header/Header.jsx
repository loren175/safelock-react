import ButtonText from "../ButtonText/ButtonText"
import { Container } from "./styles"

function Header() {
  return (
    <Container>
      <nav>
        <a href="">Serviços</a>
        <a href="">Sobre Nós</a>
        <a href="">Contato</a>
        <a href="">Compatibilidade</a>

        <div>
          <ButtonText text="Criar conta" />
          <ButtonText text="Entrar" />
        </div>
      </nav>
    </Container>
  )
}

export default Header
