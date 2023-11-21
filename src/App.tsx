import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutFlujograma from './components/LayoutFlujograma'
import Flujograma from './components/Flujograma'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutFlujograma />}>
          <Route index element={<Flujograma />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
