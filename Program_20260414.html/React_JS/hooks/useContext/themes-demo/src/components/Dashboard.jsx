import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function Dashboard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h2> Dashboard </h2>

      <p> Current theme: {theme}</p>
    </div>
  );
}

export default Dashboard;
