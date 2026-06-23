// FG System - navigation Bar Menu

import { Link, Routes, Route } from "react-router-dom";
import "./app.css";
import FlexBox from "./components/FlexBox";


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
        <Link to="/Solution" style={linkStyle}>
          Solution
        </Link>
        <Link to="/Projects" style={linkStyle}>
          Projects
        </Link>
        <Link to="/Knowledge" style={linkStyle}>
          Knowledge Centre
        </Link>
        <Link to="/Dealers" style={linkStyle}>
          Dealers
        </Link>
        <Link to="/Support" style={linkStyle}>
          Support
        </Link>
        <Link to="/Contact" style={linkStyle}>
          Contact Us
        </Link>

        {/* <FlexBox grow={0} padding="25px" justify="center" align="center">
          <Routes>
            <Route path="/" element={<ContactForm />} />
            <Route path="/gallery" element={<PhotoAlbum photos={photos} />} />
            <Route path="/Cards" element={<Cards.jsx />} />
          </Routes>
        </FlexBox> */}
      </FlexBox>
      {/* logo */}
      <FlexBox direction="row" align="center">
        {/* <h2 style={{ color: "#dde9fd" }}>MyApp</h2> */}
        <img
          className="FG_Logo"
          src="./public/FGS_Logo-noBkg.png"
          alt="FGS Logo"
          // style={logoStyle}
        ></img>
      </FlexBox>
    </FlexBox>
  );
};
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
  padding: "10px 20px",
  border: "1px solid blue",
  borderRadius: "5px",
  background: "blue",
  color: "white",
  cursor: "pointer",
};
const secondaryButton = {
  padding: "10px 20px",
  border: "1px solid #e5e7eb",
  borderRadius: "5px",
  background: "#e5e7eb",
  color: "black",
  cursor: "pointer",
};
export default NavBar;
