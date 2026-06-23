import React, { useState } from "react";

function Counters() {
  // Initialize the counter with 0
  const [count, setCount] = useState(0);

  // Increase the count by 1
  const increment = () => {
    setCount(count + 1);
  };

  // Decrease the count by 1
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset the count to 0
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter Application</h1>

      <h2>Current Count: {count}</h2>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>

      <button onClick={reset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default Counters;