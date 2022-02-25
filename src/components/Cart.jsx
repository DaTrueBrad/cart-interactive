import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ItemCard from './ItemCard'

function Cart({update}) {
  const [data, setData] = useState([])

  let currentUser = 1

  const getData = () => {
    axios.get(`http://localhost:4000/api/userCart/${currentUser}`)
    .then((res) => {
      setData(res.data)
    })
  }

  const removeItem = (id) => {
    axios.delete(`http://localhost:4000/api/userCart/${id}`)
    .then((res) => {
      getData()
    })
  }

  useEffect(() => {
    getData()
  }, [update])

  return (
    <div className='page-container'>
      <h2>My Cart</h2>
      {data.map((element, index) => {
        return <ItemCard data={element} key={index} removeItem={removeItem}/>
      })}
    </div>

  )
}

export default Cart