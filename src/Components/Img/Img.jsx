import { Container } from "./index";
import lock from "../../assets/lock.jpg"

export function Img() {
  return (
    <Container>
      <img src={lock} alt="" />
    </Container>
  )
}