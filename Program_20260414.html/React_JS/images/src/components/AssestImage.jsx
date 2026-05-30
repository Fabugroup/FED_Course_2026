import Soccer1 from "../assets/football 1.jpg";
import Soccer2 from "../assets/football 2.jpg";

const imgStyle = {
  height: "200px",
  width: "200px",
  borderRadius: "50%",
  margin: "10px",
};

function AssestImage() {
  return (
    <>
      <img src={Soccer1} alt="Soccer image 1" style={imgStyle} />
      <img src={Soccer2} alt="Soccer image 2" className="imgStyles" />
    </>
  );
}

export default AssestImage;
