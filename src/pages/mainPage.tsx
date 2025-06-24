import Home from '../components/home'
import Cardapio from '../components/cardapio'
import Contato from '../components/contato'

export default function MainPage() {
  return (
    <>
      <section id="home">
        <Home />
      </section>

      <section id="cardapio">
        <Cardapio />
      </section>

      <section id="contato">
        <Contato />
      </section>
    </>
  )
}
