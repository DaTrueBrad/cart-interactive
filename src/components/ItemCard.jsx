import axios from 'axios'
import React from 'react'
import CartIcon from './CartIcon'

function ItemCard({data, removeItem}) {
  
  return (
    <div className='product-card'>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <button onClick={() => removeItem(data.cart_id)}>Remove</button>
    </div>
  )
}

export default ItemCard