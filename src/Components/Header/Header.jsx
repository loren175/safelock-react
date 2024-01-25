import Button from "../../Components/Button/Button"
import { Container, StyledLink } from "./styles"

function Header() {
  return (
    <Container>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/services">Serviços</StyledLink>
        <StyledLink to="/about">Sobre Nós</StyledLink>
        <StyledLink to="/compatibility">Compatibilidade</StyledLink>

        <div>
          <Button text="Criar conta" />
          <Button text="Entrar" />
        </div>
      </nav>
    </Container>
  )
}

export default Header
