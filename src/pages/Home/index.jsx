import { LockBG } from "../../Components/LockBG/LockBG"
import Main from "../../Components/Main/Main"
import Header from "../../Components/Header/Header"
import { Footer } from "../../Components/Footer/Footer"

export function Home() {
  return (
    <>
      <Header></Header>
      <LockBG></LockBG>
      <Main></Main>
      <Footer/>
    </>
  )
}
