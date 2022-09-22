import { lazy } from 'react'
const Cart = lazy(() => import('./Page'))
function App() {
  return (
    <div className="App">
      <Cart />
    </div>
  )
}

export default App
