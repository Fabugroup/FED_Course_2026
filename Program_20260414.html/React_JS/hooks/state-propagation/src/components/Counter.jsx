import React from "react";

function Counter({ count, setcount }) {
  // function to increment the count
  const incrementCount = () => {
    setcount(count + 1);
  };
  // function to decrement the count
  const decrementCount = () => {
    setcount(count - 1);
  };

  return (
    <div>
      <button onClick={incrementCount}> + </button>
      <span>{count}</span>
      <button onClick={decrementCount}> - </button>
    </div>
  );
}

export default Counter;
