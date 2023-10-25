import { products as initialProducts } from './mocks/products.json'
import './App.css'
import { Products } from './components/Products'
import { useState } from 'react'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'

function App() {
  const [products, setProducts] = useState(initialProducts)

  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)



  return (
    <main className='main'>
      <h1>Shopping Cart</h1>
      <Cart/>
      <Header  />
      <Products products={filteredProducts} />
    </main>
  )
}

export default App
