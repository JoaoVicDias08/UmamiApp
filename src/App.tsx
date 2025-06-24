import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/mainPage'  // esse componente com as 3 seções
import Login from './pages/login'
import Cadastro from './pages/cadastro'
import Header from './components/header'
import './styles/index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
