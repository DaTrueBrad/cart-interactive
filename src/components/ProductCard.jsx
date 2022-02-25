import axios from 'axios'
import React from 'react'
import CartIcon from './CartIcon'

function ProductCard({data, update, setUpdate}) {
  const addToCart = (id) => {
    let object = {
      userID: 1,
      productID: id
    }
    axios.post('http://localhost:4000/api/addToCart', object)
    .then((res) => {
      setUpdate(++update)
    })
  }

  return (
    <div className='product-card'>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <span id="cart-icon" onClick={() => addToCart(data.id)}><CartIcon /></span>
    </div>
  )
}

export default ProductCard