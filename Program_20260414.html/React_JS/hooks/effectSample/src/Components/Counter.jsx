import React from "react";
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [countOne, setCountOne] = useState(0);

  useEffect(() => {
    console.log("Effect Called:");
  });

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count : {count}
      </button>
      <button onClick={() => setCountOne(countOne + 1)}>
        CountOne : {countOne}
      </button>
    </div>
  );
}

export default Counter;
