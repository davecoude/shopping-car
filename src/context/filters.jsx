import { createContext, useState } from 'react'

// 1. crear el contexto -> consumir
export const FiltersContext = createContext()

// 2. proveer el contexto -> acceso
export function FiltersProvider({ children }) {
  // controlar filtros desde el contexto
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  // definir el estado inicial
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}>
      {children}
    </FiltersContext.Provider>
  )
}


