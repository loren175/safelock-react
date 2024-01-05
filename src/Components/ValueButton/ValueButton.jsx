import { Container } from "./styles"

export function ValueButton({value}) {
  return (
    <Container>
      <button>{value}</button>
    </Container>
  )
}