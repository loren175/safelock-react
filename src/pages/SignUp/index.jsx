import { Container, Form, RegisterArea } from "./styles"
import Header from "../../Components/Header/Header"
import Input from "../../Components/Input/Input"
import Button from "../../Components/Button/Button"
import { FiMail, FiUser, FiLock, FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"
import { FloorBG } from "../../Components/FloorBG/FloorBG"

export function SignUp() {
  return (
    <Container>
      <Header />
      <FloorBG />
      <RegisterArea>
        <Form>
          <h1>Crie a sua conta</h1>

          <Input placeholder="Nome" type="text" icon={FiUser} />

          <Input placeholder="E-mail" type="text" icon={FiMail} />

          <Input placeholder="Senha" type="password" icon={FiLock} />

          <Button text="Cadastrar" />

          <Link to="/login">
            <FiArrowLeft />
            Já tenho uma conta
          </Link>
        </Form>
      </RegisterArea>
    </Container>
  )
}
