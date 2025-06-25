import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/mainPage'
import Header from './components/header'
import './styles/index.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </main>
    </>
  )
}
