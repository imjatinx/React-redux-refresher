import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Cart from './components/Cart'
import Shop from './components/Shop'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <Routes>
          <Route path='/' element={<Counter />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </>
  )
}

export default App
