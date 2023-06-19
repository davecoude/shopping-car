import { useState } from "react"
import { Products } from "./components/Products.jsx"
import { Header } from "./components/Header.jsx"
import { products as initialProducts } from "./mocks/products.json"
import { useFilters } from "./hooks/useFilters.js"


function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters(products)

  const filteredProducts = filterProducts(products)
  

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
