import { useState } from "react";
import "./app.css";
import Counter from "./components/Counter";
import { Route, Routes, Link } from "react-router-dom";
import DisplayCounter from "./components/DisplayCount";

export function App() {
  const [count, setcount] = useState(0);
  return (
    <>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Counter Controls</Link> |{" "}
        <Link to="/display">View Count</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Counter count={count} setcount={setcount} />}
        />
        <Route path="/display" element={<DisplayCounter count={count} />} />
      </Routes>
    </>
  );
}

export default App;
