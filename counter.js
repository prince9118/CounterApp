import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1); // State for custom step value
  const maxLimit = 10;
  const minLimit = 0;

  const increment = () => {
    if (count + step <= maxLimit) {
      setCount(count + step);
    }
  };

  const decrement = () => {
    if (count - step >= minLimit) {
      setCount(count - step);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const handleStepChange = (e) => {
    setStep(Number(e.target.value)); // Ensure step is a number
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>

      {/* Input field to set custom step value */}
      <label>
        Step:
        <input
          type="number"
          value={step}
          onChange={handleStepChange}
          style={{ marginLeft: '10px', width: '60px' }} // Style is correctly passed as an object
        />
      </label>

      <div style={{ marginTop: '20px' }}>
        <button onClick={increment} style={{ marginRight: '10px' }}>Increment</button>
        <button onClick={decrement} style={{ marginRight: '10px' }}>Decrement</button>
        <button onClick={reset} style={{ backgroundColor: 'red', color: 'white' }}>Reset</button>
      </div>

      {count === maxLimit && <p style={{ color: 'red' }}>You've reached the maximum limit!</p>}
      {count === minLimit && <p style={{ color: 'blue' }}>You've reached the minimum limit!</p>}
    </div>
  );
}

export default Counter;
