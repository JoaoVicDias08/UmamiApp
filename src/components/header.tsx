import React, { useState } from 'react'
import { useLocation } from "react-router-dom"
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi"
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
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault()

  if (location.pathname !== "/") {
    window.location.href = `/#/${id}` // se quiser redirecionar de outra página para a main
    return
  }

  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }

  setSidebarOpen(false)
}

  const toggleCarrinho = () => setMostrarCarrinho(prev => !prev)
  const fecharCarrinho = () => setMostrarCarrinho(false)

  return (
    <>
      <header className="navbar">
        <button
          className="menu-mobile-btn"
          aria-label="Abrir menu"
          onClick={() => setSidebarOpen(true)}
        >
          <FiMenu size={28} />
        </button>
        <a href="#home"><img src={logo} className="logo-img" alt="Umami Logo"/></a>
        <nav className="nav-container">
          <a href="#home" className="nav-link" onClick={e => handleAnchorClick(e, "home")}>Home</a>
          <a href="#cardapio" className="nav-link" onClick={e => handleAnchorClick(e, "cardapio")}>Cardápio</a>
          <a href="#reservas" className="nav-link" onClick={e => handleAnchorClick(e, "reserva")}>Reservas</a>
          <button className="btn-cart" aria-label="Carrinho" onClick={toggleCarrinho}>
            <FiShoppingCart size={24} />
            {totalItens > 0 && <span className="cart-badge">{totalItens}</span>}
          </button>
        </nav>
        <button className="btn-cart mobile-cart" aria-label="Carrinho" onClick={toggleCarrinho}>
          <FiShoppingCart size={24} />
          {totalItens > 0 && <span className="cart-badge">{totalItens}</span>}
        </button>
      </header>

      <div className={`sidebar-backdrop${sidebarOpen ? ' open' : ''}`} onClick={() => setSidebarOpen(false)} />
      <aside className={`sidebar${sidebarOpen ? ' open' : ''}`}>
        <button className="sidebar-close" aria-label="Fechar menu" onClick={() => setSidebarOpen(false)}>
          <FiX size={30} />
        </button>
        <a href="#home" className="nav-link" onClick={e => handleAnchorClick(e, "home")}>Home</a>
        <a href="#cardapio" className="nav-link" onClick={e => handleAnchorClick(e, "cardapio")}>Cardápio</a>
        <a href="#reserva" className="nav-link" onClick={e => handleAnchorClick(e, "reserva")}>Reservas</a>
      </aside>

      {mostrarCarrinho && <Cart onClose={fecharCarrinho} />}
    </>
  )
}