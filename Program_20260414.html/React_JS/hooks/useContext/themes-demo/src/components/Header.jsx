import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>Theme Demo</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
    </header>
  );
}

export default Header;
