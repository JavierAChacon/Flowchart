import { Outlet } from 'react-router-dom'
import Header from './Header'

const LayoutFlujograma = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default LayoutFlujograma