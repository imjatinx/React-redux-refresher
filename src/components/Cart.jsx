import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../features/cart/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products)
    return (
        <div>
            <h1>YOUR CART</h1>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {products.length != 0
                    ? products.map(item => {
                        return (
                            <div key={item.id} style={{ width: "18rem", border: "1px solid white", margin: "10px" }}>
                                <h4>{item.title}</h4>
                                <img src={item.image} width={200} height={200} alt="" />
                                <p>{item.description.slice(0, 50)}...</p>
                                <span style={{ fontWeight: "bold" }}>Price : {item.price}</span>
                                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove from cart</button>
                            </div>
                        )
                    })
                    :
                    <div style={{ textAlign: "center" }}>
                        <span>Nothing in cart</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart