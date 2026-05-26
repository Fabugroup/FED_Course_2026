function Buttons({ type, text }) {
  return (
    <>
      <button className={`btn ${type}`}> {text} </button>
    </>
  );
}

export default Buttons;
