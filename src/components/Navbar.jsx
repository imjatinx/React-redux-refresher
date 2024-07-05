import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const cartCount = useSelector(state => state.cart.products.length)
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <span>
                    Redux Refresher
                </span>
                <Link to={'/'}>Home</Link>
                <Link to={'/shop'}>Shop</Link>
                <Link to={'/cart'}>Cart <span style={{color:"white"}}>{cartCount}</span></Link>
            </div>
        </div>
    )
}

export default Navbar