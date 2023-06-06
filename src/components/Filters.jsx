import { useState } from 'react'
import './Filters.css'

export const Filters = () => {

  const [priceFilter, setPriceFilter] = useState(0)

  const handleMinPrice = (event) => {
    setPriceFilter(event.target.value)
  }
  return(
    <section className='filters'>
      <div>
        <label htmlFor='price'>Precio</label>
        <input
          type='range'
          id='price'
          min='0'
          max='1000'
          onChange={handleMinPrice}
        />
        <p>Desde ${priceFilter}</p>
        
      </div>

      <div>
        <label htmlFor="category">Categoria</label>
        <select id="category">
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