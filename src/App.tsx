import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { DetalhesMoto } from './pages/DetalhesMoto'
import { FichaCDC } from './components/forms/FichaCDC'
import { FichaCNH } from './components/forms/FichaCNH'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/detalhes/:nome' element={<DetalhesMoto/>} />
        <Route path='/fichacdc' element={<FichaCDC/>} />
        <Route path='/fichacnh' element={<FichaCNH/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
