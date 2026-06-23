// FG Systen Header bar for dealers to access to product and sales pages

import "../app.css";
import FlexBox from "./FlexBox";

const Header = () => {
  return (
    // Top MenuBar
    <FlexBox
      direction="row"
      justify="flex-end"
      align="center"
      padding="0 10px"
      height="40px"
      background="#000000"
      border="1px solid black"
    >

      {/* Actions */}
      <FlexBox direction="row" gap="1px" align="center">
        <button style={secondaryButton}>
          <a href="/login" style={linkStyle}>
            Login
          </a>
        </button>
        <button style={primaryButton}>
          <a href="/signup" style={linkStyle}>
            Signup
          </a>
        </button>
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

export default Header;
