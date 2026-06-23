import { useEffect } from "react";

console.log("Dashboard page loaded");

function DashBoard() {
  useEffect(() => {
    console.log("Dashboard Comoponent Mounted"); // runs everytime a component is mounted

    return () => {
      console.log("Dashboard Comoponent Unmounted"); // runs everutime a component is unmounted
    };
  }, []);

  return (
    <>
      <h1>Dashboard Page</h1>
    </>
  );
}

export default DashBoard;
