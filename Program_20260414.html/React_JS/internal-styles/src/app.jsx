import { useState } from "react";
import "./app.css";

export function App() {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background-color 0.2s ease",
  };

  const hoverStyle = {
    backgroundColor: "darkblue",
  };

  const activeButtonStyle = {
    ...buttonStyle,
    ...(isHovered ? hoverStyle : {}),
  };

  return (
    <>
      <h1> Rendering Local Styles </h1>
      <button
        style={activeButtonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Click Me
      </button>
    </>
  );
}

export default App;
