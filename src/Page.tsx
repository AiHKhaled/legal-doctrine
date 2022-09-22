import { Provider } from 'react-redux'
import { Container } from './components/styledComponent'
import Cart from './Layout/Cart'
import Products from './Layout/Products'
import store from './reducers/store'

export default function Exercice2() {
  return (
    <Provider store={store}>
      <Container style={{ columnGap: 20 }}>
        <Products />
        <Cart />
      </Container>
    </Provider>
  )
}
