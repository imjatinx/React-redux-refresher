import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'
import { fetchProducts } from '../features/shop/shopSlice'

const Shop = () => {
  const dispatch = useDispatch();

  const shop = useSelector(state => state.shop)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  if (shop.isLoading) {
    return (
      <div>
        <p>LOADING....</p>
      </div>
    )
  }

  if (shop.isError) {
    return (
      <div>
        <p>Something went wrong!!! Try in some time</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Shop here</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {shop.products &&
          shop.products.map(item => {
            return (
              <div key={item.id} style={{ width: "18rem", border: "1px solid white", margin: "10px" }}>
                <h4>{item.title}</h4>
                <img src={item.image} width={200} height={200} alt="" />
                <p>{item.description.slice(0, 50)}...</p>
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