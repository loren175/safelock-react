import { Container, Form, LoginArea } from "./styles"
import { FiMail, FiLock, FiUserPlus } from "react-icons/fi"
import Header from "../../Components/Header/Header"
import Input from "../../Components/Input/Input"
import Button from "../../Components/Button/Button"
import { LockBG } from "../../Components/LockBG/LockBG"
import { Link } from "react-router-dom"
import { Footer } from "../../Components/Footer/Footer"

export function SignIn(){
  return (
    <Container>
      <Header />
      <LockBG />
      <LoginArea>
        <Form>
          <h1>Faça seu login</h1>

          <Input placeholder="E-mail" type="text" icon={FiMail} />

          <Input placeholder="Senha" type="password" icon={FiLock} />

          <Button text="Entrar" />

          <Link to="/register">
            <FiUserPlus />
            Criar conta
          </Link>
        </Form>
      </LoginArea>
      <Footer />
    </Container>
  )
}