import "./app.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";

export function App() {
  return (
    <>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/aboutus">About Us</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
