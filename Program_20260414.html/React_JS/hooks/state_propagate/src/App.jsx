import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import DisplayCount from "./components/DisplayCount";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Counter count={count} setCount={setCount} />}
        />
        <Route path="/display" element={<DisplayCount count={count} />} />
      </Routes>
    </>
  );
}

export default App;
