import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

function Products() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/api/allProducts')
    .then((res) => {
      console.log(res.data)
      setData(res.data)
    })
  }, [])
  
  return (
    <div>
      <h2>Products Available</h2>
      {data.map((element, index) => {
        return <ProductCard data={element} key={index} />
      }) }
    </div>
  )
}

export default Products