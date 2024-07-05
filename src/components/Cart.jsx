import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../features/cart/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products)
    console.log(products);
    return (
        <div>
            <h1>YOUR CART</h1>
            <div style={{ display: "flex", justifyContent: 'space-between', flexWrap: "wrap" }}>
                {products.length != 0
                    ? products.map(item => {
                        return (
                            <div key={item.id} style={{ width: "18rem", border: "1px solid white" }}>
                                <h4>{item.title}</h4>
                                <img src={item.image} width={200} height={200} alt="" />
                                <p>{item.description.slice(0, 75)}...</p>
                                <span style={{ fontWeight: "bold" }}>Price : {item.price}</span>
                                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove from cart</button>
                            </div>
                        )
                    })
                    : <p>Nothing in cart</p>
                }
            </div>
        </div>
    )
}

export default Cart