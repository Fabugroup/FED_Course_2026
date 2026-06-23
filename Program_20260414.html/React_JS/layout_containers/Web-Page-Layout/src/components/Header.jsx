import FlexBox from "./containers/FlexBox";
import { Link } from "react-router-dom";

function Header() {
  // Define a common style for navigation links
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.1em",
    "&:hover": { color: "lightgray" }, // Example hover style
  };

  return (
    <>
      <FlexBox
        justify="space-between"
        align="center"
        padding="0px 20px 0px 20px"
        height="7vh"
        background="#4430a8"
        style={{ color: "white" }}
      >
        <h2>My Application</h2>

        {/* Navigation Links */}
        <FlexBox gap="25px">
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          {/* Corrected to Link component and inline style */}
          <Link to="/Projects" style={linkStyle}>
            Projects
          </Link>
          <Link to="/Profile" style={linkStyle}>
            Profile
          </Link>
          <Link to="/About" style={linkStyle}>
            About
          </Link>
        </FlexBox>
      </FlexBox>
    </>
  );
}

export default Header;
