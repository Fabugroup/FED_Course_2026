import React from "react";
import { Link } from "react-router-dom";

function Counter({ count, setCount }) {
  //function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };
  //function to decrement the count
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={incrementCount}> + </button>
        <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          {" "}
          {count}{" "}
        </span>
        <button onClick={decrementCount}> - </button>
      </div>
      <div>
        <Link to="/display">Display Count</Link>
      </div>
    </div>
  );
}

export default Counter;
