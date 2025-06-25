import "../styles/home.css";
import Carousel from "../components/carrousel";

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

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
              <a
                href="#cardapio"
                className="cardapio-btn"
                onClick={(e) => scrollToSection(e, "cardapio")}
              >
                Ver cardápio
              </a>
              <a
                href="#reservas"
                className="contact-btn"
                onClick={(e) => scrollToSection(e, "reservas")}
              >
                Agendar uma reserva
              </a>
            </div>
          </div>
        </div>

        <div className="somente-desktop">
          <Carousel />
        </div>
      </section>
    </>
  );
}
