import React from 'react'
import './Popular.css'
import { Product } from '../../pages/shop/product'
import { PRODUCTS } from '../../products'

const Popular = () => {
  return (
    <div className='popular'>
        <h2>POPULAR PRODUCTS</h2>
        <hr/>
        <div className="popular-item">
      {PRODUCTS.map((product) => (
          <Product data={product}/>
        ))}
        </div>
    </div>
  )
}

export default Popular
