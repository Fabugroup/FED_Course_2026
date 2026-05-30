import StatusMsg from "./StatusMsg.jsx";

function CheckSal(props) {
  let salStatus;

  let sal = props.sal;

  // if (sal <= 5000) {
  //   salStatus = "Low";
  // } else if (sal >= 5001 && sal <= 10000) {
  //   salStatus = "Medium";
  // } else {
  //   salStatus = "High";
  // }

  // alternatively we can also write the above code as

  salStatus =
    sal <= 5000
      ? "Low"
      : sal >= 5001 && sal <= 10000
        ? "Medium"
        : sal >= 10001 && sal <= 20000
          ? "High"
          : "Very High";

  return <StatusMsg status={salStatus} />;
}

export default CheckSal;
