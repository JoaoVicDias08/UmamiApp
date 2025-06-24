import React, { useState } from 'react'
import { useLocation } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi"
import { useCart } from "../context/cartContext"
import Cart from '../components/cart'
import '../styles/index.css'
import '../styles/header.css'
import logo from '../assets/umami-logo.png'

export default function Header() {
  const location = useLocation()
  const { items } = useCart()
  const totalItens = items.reduce((acc, item) => acc + item.quantidade, 0)
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false)

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname !== "/") {
      e.preventDefault()
      window.location.href = `/#${id}`
    }
  }

  const toggleCarrinho = () => setMostrarCarrinho(prev => !prev)
  const fecharCarrinho = () => setMostrarCarrinho(false)

  return (
    <>
      <header className="navbar">
        <img src={logo} className="logo-img" alt="Umami Logo" />
        <nav className="nav-container">
          <a href="#home" className="nav-link" onClick={e => handleAnchorClick(e, "home")}>Home</a>
          <a href="#cardapio" className="nav-link" onClick={e => handleAnchorClick(e, "cardapio")}>Cardápio</a>
          <a href="#contato" className="nav-link" onClick={e => handleAnchorClick(e, "contato")}>Contato</a>
          <button className="btn-cart" aria-label="Carrinho" onClick={toggleCarrinho}>
            <FiShoppingCart size={24} />
            {totalItens > 0 && <span className="cart-badge">{totalItens}</span>}
          </button>
        </nav>
      </header>

      {mostrarCarrinho && <Cart onClose={fecharCarrinho} />}
    </>
  )
}