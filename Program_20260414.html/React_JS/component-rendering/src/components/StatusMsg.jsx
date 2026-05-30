import MsgContainer from "./MsgContainer";

function StatusMsg({ status }) {
  let color;

  status === "Low"
    ? (color = "red")
    : status === "Medium"
      ? (color = "orange")
      : status === "High"
        ? (color = "blue")
        : status === "Very High"
          ? (color = "green")
          : (color = "black");

  return (
    <MsgContainer>
      <h2 style={{ color }}> {status} Salary</h2>
    </MsgContainer>
  );
}

export default StatusMsg;
