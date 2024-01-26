import { Container } from "./styles"

function Button({ text, onClick }) {
  return <Container onClick={onClick}>{text}</Container>
}

export default Button