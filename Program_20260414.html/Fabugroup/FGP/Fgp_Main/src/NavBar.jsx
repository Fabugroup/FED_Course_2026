import FlexBox from "./components/FlexBox";
import { Link } from "react-router-dom";
import "./app.css";


const NavBar = () => {
  return (
    // Top MenuBar
    <FlexBox
      direction="row"
      justify="space-between"
      align="center"
      padding="0 10px"
      height="70px"
      background="#000000"
      border="1px solid black"
    >
      {/* Navigation Links */}
      <FlexBox direction="row" gap="30px" align="center">

        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/AboutUs" style={linkStyle}>
          About Us
        </Link>
        <Link to="/Division" style={linkStyle}>
          Our Division
        </Link>
        <Link to="/Projects" style={linkStyle}>
          Projects
        </Link>
        <Link to="/Knowledge" style={linkStyle}>
          Knowledge Centre
        </Link>
        <Link to="/Partners" style={linkStyle}>
          Partners
        </Link>
        <Link to="/Contact" style={linkStyle}>
          Contact Us
        </Link>

      </FlexBox>

      {/* logo */}
      {/* <FlexBox direction="row" align="center"> */}
        {/* <h2 style={{ color: "#dde9fd" }}>MyApp</h2> */}
        {/* <img
          className="FG_Logo"
          src="./public/FGS_Logo.png"
          alt="FGS Logo"
          // style={logoStyle}
        ></img>
      </FlexBox> */}
    {/* </FlexBox> */}

      {/* Actions */}
      <FlexBox direction="row" gap="1px" align="center">
        <button style={secondaryButton}>
          <Link to="/login" style={linkStyle}>
            Login
          </Link>
        </button>
        <button style={primaryButton}>
          <Link to="/signup" style={linkStyle}>
            Signup
          </Link>
        </button>
      </FlexBox>
      </FlexBox>
  );
  }


// console.log("")

const linkStyle = {
  textDecoration: "none",
  color: "#dde9fd",
};
// const logoStyle = {
//   height: "45px",
//   width: "auto",
//   objectFit: "contain",
// };
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

export default NavBar;
