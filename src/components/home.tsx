import "../styles/home.css";
import Carousel from '../components/carrousel'


export default function Home() {
  return (
    <>
      <section id="home" className="home-section">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">Umami</h1>
            <h3 className="home-slogan">
              Sabores autênticos do Japão <br />
              no coração da cidade
            </h3>

            

            <div className="btn-container">
              <a href="#cardapio" className="cardapio-btn">
                Ver cardápio
              </a>
              <a href="#contato" className="contact-btn">
                Fale conosco
              </a>
            </div>
          </div>
        </div>

        <Carousel />
      </section>
    </>
  );
}
