import React, { useEffect } from "react";

function Button() {
  useEffect(() => {
    console.log("Button Comoponent Mounted"); // runs everytime a component is mounted

    return () => {
      console.log("Button Comoponent Unmounted"); // runs everutime a component is unmounted
    };
  }, []);

  return (
    <>
      <button>Submit</button>
    </>
  );
}

export default Button;
