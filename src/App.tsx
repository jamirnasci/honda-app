import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { DetalhesMoto } from './pages/DetalhesMoto'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/detalhes/:nome' element={<DetalhesMoto/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
