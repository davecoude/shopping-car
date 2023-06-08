import { useState, useId } from 'react'
import './Filters.css'

export const Filters = ({ onChange }) => {

  const [priceFilter, setPriceFilter] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleMinPrice = (event) => {
    setPriceFilter(event.target.value)
    onChange(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleCategory = (event) => {
    onChange(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }  

  return(
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Precio</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleMinPrice}
        />
        <p>Desde ${priceFilter}</p>
        
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} onChange={handleCategory}>
          <option value="all">Todas</option>
          <option value="smartphones">Celulares</option>
          <option value="laptops">Portatiles</option>
          <option value="LED Lights">Luces</option>
          <option value="fragrances">Fragancias</option>
        </select>
      </div>
    </section>
  )
}