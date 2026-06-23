import { useEffect } from "react";

console.log("Reports page loaded");

function Reports() {
  useEffect(() => {
    console.log("Report Comoponent Mounted"); // runs everytime a component is mounted

    return () => {
      console.log("Report Comoponent Unmounted"); // runs everutime a component is unmounted
    };
  }, []);

  return (
    <>
      <h1>Report Page</h1>
    </>
  );
}

export default Reports;
