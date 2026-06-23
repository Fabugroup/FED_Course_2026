import FlexBox from "./FlexBox";
import "../App.css"; // Ensure this import is correct

const Footer = () => {
  return (
    <FlexBox
      direction="row"
      justify="flex-start"
      align="center"
      padding="15px 25px"
      height="auto"
      background="#000000"
      border="1px solid black"
    >
      {/* Footer Text */}
      <FlexBox direction="column" gap="5px" align="flex-start">
        <h3 className="FG_Text1" style={{ margin: 0 }}>
          FG System
        </h3>
        <h5 className="FG_Text2" style={{ margin: 0 }}>
          Copyright @ FG System 2026
        </h5>
      </FlexBox>
    </FlexBox>
  );
};
const linkStyle = {
  textDecoration: "none",
  color: "#dde9fd",
};

const primaryButton = {
  padding: "3px 10px",
  border: "1px solid black",
  borderRadius: "5px",
  background: "black",
  color: "white",
  cursor: "pointer",
};
const secondaryButton = {
  padding: "3px 10px",
  border: "1px solid black",
  borderRadius: "5px",
  background: "black",
  color: "white",
  cursor: "pointer",
};

export default Footer;
