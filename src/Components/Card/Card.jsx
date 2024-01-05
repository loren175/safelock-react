import { Container } from "./styles"

export function Card({ title, description }) {
  return (
    <Container>
      <div>
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
    </Container>
  )
}
