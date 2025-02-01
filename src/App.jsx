import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import Fav from "./pages/Fav"
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContext'

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/favorites" element={<Fav />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
