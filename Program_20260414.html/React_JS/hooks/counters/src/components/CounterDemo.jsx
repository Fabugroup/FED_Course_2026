import { useState } from "react";

function CounterDemo() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setCount((currentCount) => count + 1);
        }}
      >
        {count}
      </button>
    </>
  );
}

export default CounterDemo;
