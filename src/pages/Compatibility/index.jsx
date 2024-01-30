import Header from "../../Components/Header/Header"
import { Container, LogosArea, TextArea, SuggestionArea } from "./styles"
import { FloorBG } from "../../Components/FloorBG/FloorBG"
import { ActivisionSVG } from "../../assets/SVG/activision"
import { ItauSVG } from "../../assets/SVG/itau"
import { RiotSVG } from "../../assets/SVG/riot"
import { GoogleSVG } from "../../assets/SVG/google"
import { FacebookSVG } from "../../assets/SVG/facebook"
import Button from "../../Components/Button/Button"
import { Footer } from "../../Components/Footer/Footer"

export function Compatibility() {
  return (
    <Container>
      <Header></Header>
      <FloorBG></FloorBG>

      <TextArea>
        <h1>Variedade para você!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis sint
          nulla aspernatur temporibus accusantium, commodi nostrum quas optio
          corporis iure similique cumque! Molestias doloremque, excepturi
          corporis debitis repudiandae expedita deleniti? Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Qui, odit cupiditate. Voluptates
          aliquid ea commodi voluptatum ratione! Eligendi sapiente, distinctio
          nulla doloribus aliquam cumque, soluta eius quisquam ut maiores saepe!
        </p>
      </TextArea>

      <LogosArea>
        <ActivisionSVG />
        <ItauSVG />
        <RiotSVG />
        <FacebookSVG />
        <GoogleSVG />
      </LogosArea>

      <SuggestionArea>
        <h2>Não encontrou a mídia que buscava?Envie uma sugestão!</h2>
        <textarea name="" id="" cols="30" rows="4"></textarea>
        <Button text="Enviar" />
      </SuggestionArea>
      <Footer />
    </Container>
  )
}
