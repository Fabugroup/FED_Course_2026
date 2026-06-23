import React, { useContext } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { ThemeContext } from "./components/context/ThemeContext";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
