import FlexBox from "./FlexBox";
import "../App.css"; // Ensure this import is correct

const Footer = () => {
  return (
    <FlexBox
      direction="row"
      justify="space-between"
      align="stretch"
      padding="0 10px"
      height="70px"
      background="#000000"
      border="1px solid black"
    >

      {/* Footer Text */}
      <FlexBox direction="column" gap="5px" align="flex-start">
        <h3 className="FG_Text1" style={{ margin: 0 }}>
          Fabugroup Pte Ltd
        </h3>
        <h5 className="FG_Text2" style={{ margin: 0 }}>
          Copyright © Fabugroup 2026
        </h5>
      </FlexBox>

      {/* logo */}
      <FlexBox direction="row" justify="flex-end" align="flex-end" padding="10px" >
      {/* <FlexBox direction="row" alignSelf="stretch" justify="flex-end" align="flex-end" padding="10px" ></FlexBox> */}
        {/* <h2 style={{ color: "#dde9fd" }}>MyApp</h2> */}
        <img
          className="FG_Logo"
          src="./public/fabugroup_logo-black.png"
          alt="FGP Logo"
        ></img>
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
