import { useEffect } from "react";

console.log("Settings page loaded"); // run only once on the load

function Settings() {
  useEffect(() => {
    console.log("Setting Comoponent Mounted"); // runs everytime a component is mounted

    return () => {
      console.log("Setting Comoponent Unmounted"); // runs everutime a component is unmounted
    };
  }, []);

  return (
    <>
      <h1>Settings</h1>
    </>
  );
}

export default Settings;
