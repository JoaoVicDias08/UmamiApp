import { useEffect, useRef } from 'react'
import { useCart } from '../context/cartContext'
import '../styles/cart.css'
import '../styles/index.css'

interface CartProps {
  onClose: () => void
}

export default function Cart({ onClose }: CartProps) {
  const { items, removeItem, addItem, decreaseItem } = useCart()
  const cartRef = useRef<HTMLDivElement>(null)
  const total = items.reduce((acc, item) => acc + item.preco * item.quantidade, 0)

  // Fecha ao clicar fora
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [onClose])

  return (
    <div className="cart-backdrop">
      <div ref={cartRef} className={`cart-container${items.length === 0 ? ' empty' : ''}`}>
        <h3 className="cart-title">Seu Carrinho</h3>
        {items.length === 0 ? (
          <p className="cart-empty">O carrinho está vazio.</p>
        ) : (
          <>
            <ul className="cart-items">
              {items.map(item => (
                <li key={item.id} className="cart-item">
                  <span>{item.nome}</span>
                  <span>Qtd: {item.quantidade}</span>
                  <span>R$ {item.preco.toFixed(2)}</span>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <button
                      onClick={() => decreaseItem(item.id)}
                      style={{ background: '#eee', color: '#333', fontWeight: 'bold' }}
                    >-</button>
                    <button
                      onClick={() => addItem({ ...item, quantidade: 1 })}
                      style={{ background: '#eee', color: '#333', fontWeight: 'bold' }}
                    >+</button>
                    <button onClick={() => removeItem(item.id)}>Remover</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <strong>Total:</strong> R$ {total.toFixed(2)}
            </div>
            <button className="btn-finalizar">Finalizar Pedido</button>
          </>
        )}
      </div>
    </div>
  )
}