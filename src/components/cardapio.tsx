import { useState, useEffect } from "react";
import { produtos } from "../data/menu";
import type { Produto } from "../data/menu";
import { useCart } from "../context/cartContext";
import "../styles/cardapio.css";

const categorias = [
  "Todos",
  "Sushi",
  "Ramen",
  "Temaki",
  "Bebidas",
  "Sobremesas",
];

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("Todos");
  const [exibidos, setExibidos] = useState<Produto[]>(produtos);
  const { addItem } = useCart();

  useEffect(() => {
    const filtrados = produtos.filter((p: Produto) => {
      const porCategoria = filtro === "Todos" || p.categoria === filtro;
      const porBusca = p.nome.toLowerCase().includes(busca.toLowerCase());
      return porCategoria && porBusca;
    });

    const resultado = filtro === "Todos" ? filtrados.slice(0, 6) : filtrados;
    setExibidos(resultado);
  }, [busca, filtro]);

  return (
    <section id="cardapio" className="cardapio-section">
      <div className="menu-filtros">
        <input
          type="text"
          placeholder="Buscar prato..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="filtro-input"
        />
        <div className="menu-categorias">
          {categorias.map((cat) => (
            <button
              key={cat}
              className={`btn menu-categoria-btn${
                filtro === cat ? " active" : ""
              }`}
              onClick={() => setFiltro(cat)}
              tabIndex={0}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="menu-grid">
        {exibidos.length === 0 ? (
          <p className="nenhum-encontrado">Nenhum item encontrado.</p>
        ) : (
          exibidos.map((item) => (
            <div key={item.id} className="menu-card">
              <img
                src={item.imagem}
                alt={item.nome}
                className="menu-card-img"
              />
              <div className="menu-card-content">
                <h3>{item.nome}</h3>
                <p>{item.descricao}</p>
                <div className="menu-card-footer">
                  <span className="menu-card-preco">
                    R${item.preco.toFixed(2)}
                  </span>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      addItem({
                        id: item.id,
                        nome: item.nome,
                        preco: item.preco,
                        quantidade: 1,
                      })
                    }
                  >
                    + Carrinho
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
