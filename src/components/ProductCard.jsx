import React from 'react'
import CartIcon from './CartIcon'

function ProductCard({data}) {
  return (
    <div className='product-card'>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <span onClick={() => console.log('icon CLik')}><CartIcon /></span>
    </div>
  )
}

export default ProductCard