import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'

const Shop = () => {
  const [product, setProduct] = useState(null)
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProduct(response.data)
    } catch (error) {
      console.log('ERROR=>', error);
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <h1>Shop here</h1>
      <div style={{ display: "flex", justifyContent: 'space-between', flexWrap: "wrap" }}>
        {product &&
          product.map(item => {
            return (
              <div key={item.id} style={{ width: "18rem", border: "1px solid white" }}>
                <h4>{item.title}</h4>
                <img src={item.image} width={200} height={200} alt="" />
                <p>{item.description.slice(0, 75)}...</p>
                <span style={{ fontWeight: "bold" }}>Price : {item.price}</span>
                <button onClick={() => dispatch(addToCart(item))}>Add to cart</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Shop