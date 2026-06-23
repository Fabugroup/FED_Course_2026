import React from "react";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function winresize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        <h1>Window Width: {windowWidth}</h1>
      </div>
    </>
  );
}

export default winresize;
