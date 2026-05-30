function MsgContainer({ children }) {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "grey",
        borderRadius: "10px",
        margin: "10px",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}
export default MsgContainer;
