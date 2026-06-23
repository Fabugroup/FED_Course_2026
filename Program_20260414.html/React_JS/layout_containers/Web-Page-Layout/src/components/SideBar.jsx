import { Link } from "react-router-dom";
import FlexBox from "./containers/FlexBox";
import { useContext, useEffect } from "react";

import React from "react";
import "../App.css";
import { ThemeContext } from "../../../../hooks/useContext/themes-demo/src/components/context/ThemeContext";

function SideBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Log current theme when component renders
  console.log("Current theme:", theme);
  console.log("Theme type:", typeof theme);

  console.log("🔄 Theme changed to:", theme);
  console.log("📋 Current theme value:", theme);
  console.log("🎨 Background color:", theme);

  console.log("📝 Text color:", theme);

  // Log theme changes whenever it updates
  // useEffect(() => {
  //   console.log("🔄 Theme changed to:", theme);
  //   console.log(
  //     "📋 Current theme value:", theme
  //     theme === "light" ? "☀️ Light" : "light",
  //   );
  //   console.log(
  //     "🎨 Background color:",
  //     theme,
  //     theme === "light" ? "#ffffff" : "#ffffff",
  //   );
  //       console.log("📝 Text color:",theme);
  //   console.log("📝 Text color:", theme === "light" ? "#000000" : "#000000");
  // }, [theme]); // This runs every time theme changes

  // Log when component mounts
  useEffect(() => {
    console.log("✅ SideBar component mounted");
    console.log("🔍 Initial theme:", theme);

    return () => {
      console.log("❌ SideBar component unmounted");
    };
  }, []); // Empty array = runs once on mount

  // Define a common style for navigation links
  const linkStyle = {
    textDecoration: "none",
    // background: "theme",
    // color: "theme",
    fontWeight: "bold",
    fontSize: "1.1em",
    // "&:hover": { color: "lightgray" },
    // Example hover style
    // color: theme === "light" ? "#000000" : "#ffffff",
    // transition: "color 0.3s ease",
  };

  return (
    <FlexBox
      direction="column"
      gap="10px"
      padding="5px 20px 40px 20px"
      height="75vh"
      // background={`{theme}`}
      // style={{ color: theme }}
      style={{
        background: theme === "light" ? "#ffffff" : "#000000",
        // color: theme === "light" ? "#000000" : "#000000",
      }}
    >
      <h3 className={theme}> Menu </h3>
      {/* <span> Dashboard</span>
      <span> Tasks</span>
      <span> Users</span>
      <span> Settings</span> */}
      {/* Navigation Links */}
      <Link to="/" className={theme} style={linkStyle}>
        Dashboard
      </Link>
      {/* Corrected to Link component and inline style */}
      <Link to="/Projects" className={theme} style={linkStyle}>
        Tasks
      </Link>
      <Link to="/Profile" className={theme} style={linkStyle}>
        Users
      </Link>
      <Link to="/About" className={theme} style={linkStyle}>
        Setting
      </Link>

      <button
        onClick={toggleTheme}
        className={theme}
        style={{
          padding: "8px 16px",
          // backgroundColor: theme,
          // color: theme,
          // backgroundColor: theme === "light" ? "dark" : "light",
          // color: theme === "light" ? "dark" : "dark",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          margin: "100% 0px 10px 0px",
        }}
      >
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
    </FlexBox>
  );
}

export default SideBar;
