import { Link, Route, Routes } from "react-router-dom";
import React from "react";
// import "./App.css";
import { lazy } from "react";

// Traditional components imports
// import Home from "./components/Home.jsx";
// import Dashboard from "./components/DashBoard.jsx";
// import Report from "./components/Reports.jsx";
// import Settings from "./components/Settings.jsx";

// Lazy load components
const Home = lazy(() => import("./components/Home.jsx"));
const DashBoard = lazy(() => import("./components/DashBoard.jsx"));
const Reports = lazy(() => import("./components/Reports.jsx"));
const Settings = lazy(() => import("./components/Settings.jsx"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      {/* navbar */}
      <Link to="/">Home</Link> |<Link to="/DashBoard">DashBoard</Link> |{" "}
      <Link to="/Reports">Reports</Link> |<Link to="/settings">Settings</Link>
    </>
  );
} 

export default App;
