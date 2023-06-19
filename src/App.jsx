import { useContext, useState } from "react"
import { Products } from "./components/Products.jsx"
import { Header } from "./components/Header.jsx"
import { products as initialProducts } from "./mocks/products.json"
import { FiltersContext } from "./context/filters.jsx"

function useFilters(products) {
  // uso del estado global -> useContext
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return(
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return { setFilters, filteredProducts }

}

function App() {
  const [products] = useState(initialProducts)
  const { setFilters, filteredProducts } = useFilters(products)
  

  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts} />
    </>
  )
}

export default App
