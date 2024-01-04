import Header from "../../Components/Header/Header"
import { Container } from "./styles"
import { CodeBG } from "../../Components/CodeBG/CodeBG"
import { Card } from "../../Components/Card/Card"

export function Services() {
  return (
    <Container>
      <Header></Header>
      <CodeBG></CodeBG>
      <div>
        <h1>Buscamos proteger o que é importante para você!</h1>
        <p>
          Nossos serviços variam de plano para plano, sendo o mais seguro e
          recomendado o plano Black. Porém, temos variedades que cobrem por mais
          tempo e por um valor que cabe no seu bolso, além de planos que
          oferecem menos com um custo menor ainda.
        </p>
        <Card
          title="Minimal"
          description="Mensal de baixo custo"
          cover="
          Contas bancárias
          Contas de jogos
          E-mails"
          value="Assine por R$14,90"
        ></Card>
      </div>
    </Container>
  )
}
