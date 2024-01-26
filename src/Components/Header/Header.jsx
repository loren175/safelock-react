import Button from "../../Components/Button/Button"
import { Container, StyledLink } from "./styles"
import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate()

  function handleRegisterClick()  {
    navigate('/register')
  }
  
  function handleLoginClick() {
    navigate('/login')
  }

  return (
    <Container>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/services">Serviços</StyledLink>
        <StyledLink to="/about">Sobre Nós</StyledLink>
        <StyledLink to="/compatibility">Compatibilidade</StyledLink>

        <div>
          <Button text="Criar conta" onClick={() => handleRegisterClick()} />
          <Button text="Entrar" onClick={() => handleLoginClick()} />
        </div>
      </nav>
    </Container>
  )
}

export default Header
