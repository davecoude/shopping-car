import { useState } from "react"
import { Products } from "./components/Products.jsx"
import { Header } from "./components/Header.jsx"
import { products as initialProducts } from "./mocks/products.json"
import { useFilters } from "./hooks/useFilters.js"
import { Cart } from "./components/Cart.jsx"
import { CartProvider } from "./context/cart.jsx"


function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters(products)

  const filteredProducts = filterProducts(products)
  

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>
  )
}

export default App
