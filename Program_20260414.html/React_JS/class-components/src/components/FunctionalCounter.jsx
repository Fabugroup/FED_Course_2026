import { useState } from "react";

function FunctionalCounter() {
  const [count, setcount] = useState(0);

  // function to increment the count
  const increment = () => {
    setcount(count + 1);
  };

  // function to decrement the count
  const decrement = () => {
    setcount(count - 1);
  };

  // function to reset the count
  const reset = () => {
    setcount(0);
  };

  return (
    <div>
      <h1>Functional Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default FunctionalCounter;
