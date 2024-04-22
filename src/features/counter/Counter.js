import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset, incrementByAmount } from './counterSlice';

const Counter = () => {
  // read data from the store
  const count = useSelector((state) => state.counter.count);
  // dispatch actions
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  }

  return (
    <section>
      <p>{count}</p>

      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>+</button>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>-</button>
      </div>

      <input
          type="text"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />

      <div>
        <button aria-label="Increment by added value" onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
        <button aria-label="Reset all counts" onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
}

export default Counter;
