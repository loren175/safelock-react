import { Container } from "./styles"

function Button (props) {
  return (
    <Container>
      {props.text}
    </Container>
  )
}

export default Button