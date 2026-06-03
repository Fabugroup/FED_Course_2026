import { useState } from "react";

function Add_numbers() {
  // 1. Move state inside the component
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  // 2. Fix event access: use e.target.value to get the input value
  function handleNum1Change(e) {
    setNum1(Number(e.target.value));
  }

  function handleNum2Change(e) {
    setNum2(Number(e.target.value));
  }

  function handleCalculate() {
    setResult(num1 + num2);
  }

  return (
    <div className="container">
      <h3>Input first number :</h3>
      <input
        type="number"
        placeholder="Number 1"
        value={num1}
        onChange={handleNum1Change}
      />
      <br />
      <h3>Input second number :</h3>
      <input
        type="number"
        placeholder="Number 2"
        value={num2}
        onChange={handleNum2Change}
      />

      <br />
      <hr />
      <button onClick={handleCalculate}>Add Numbers</button>

      <h2>
        {num1} + {num2} = {result}
      </h2>
    </div>
  );
}

export default Add_numbers;
