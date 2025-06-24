// src/components/Carousel.tsx
import { useEffect, useState } from 'react'
import '../styles/carrousel.css'

import img1 from '../assets/slide1.avif'
import img2 from '../assets/slide2.jpg'
import img3 from '../assets/slide3.jpg'

const imagens = [img1, img2, img3]

export default function Carousel() {
  const [indiceAtual, setIndiceAtual] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual((prev) => (prev + 1) % imagens.length)
    }, 3000)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <div className="carousel">
      {imagens.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`carousel-img ${index === indiceAtual ? 'ativa' : ''}`}
          alt={`Slide ${index + 1}`}
        />
      ))}
    </div>
  )
}
