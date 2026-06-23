import { useEffect } from "react";
import Button from "./Button";

console.log("Home page loaded");

function Home() {
  useEffect(() => {
    console.log("Home Comoponent Mounted"); // runs everytime a component is mounted

    return () => {
      console.log("Home Comoponent Unmounted"); // runs everutime a component is unmounted
    };
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <Button />
    </>
  );
}

export default Home;
