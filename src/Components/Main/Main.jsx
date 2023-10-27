import Button from "../Button/Button"
import { Container } from "./styles"
import { Img } from "../Img/Img"

function Main() {
  return (
    <Container>
      <h1>Suas mídias em segurança.</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
        neque asperiores, eum aliquam dicta saepe dolore, reprehenderit, error
        eos consequatur suscipit perferendis nisi exercitationem impedit. At
        labore voluptates nam numquam.
      </p>

      <div>
        <Button text="Plano Safe" />
        <Button text="Plano Black" />
      </div>
    </Container>
  )
}

export default Main
