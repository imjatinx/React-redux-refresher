import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice';

const Counter = () => {
  const [amount, setAmount] = useState(0)
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>COUNTER</h1>
      <br />
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <br />
      <input type="number" onChange={(e) => setAmount(e.target.value)} placeholder='Increment By Amount' />
      <br />
      <button onClick={() => dispatch(incrementByAmount(parseInt(amount)))}>Add</button>
    </div>
  )
}

export default Counter