import FlexBox from "./containers/FlexBox";
const NavBar = () => {
  return (
    <FlexBox
      direction="row"
      justify="space-between"
      align="center"
      padding="0 25px"
      height="70px"
      background="#8486be"
      border="1px solid #e5e7eb"
    >
      {/* logo */}
      <FlexBox direction="row" align="center">
        <h2>MyApp</h2>
      </FlexBox>

      {/* Navigation Links */}
      <FlexBox direction="row" gap="12px" align="center">
        <a href="/" style={linkStyle}>
          Home
        </a>
        <a href="/gallery" style={linkStyle}>
          Gallery
        </a>
        <a href="/Cards" style={linkStyle}>
          Contact
        </a>
      </FlexBox>

      {/* Actions */}
      <FlexBox direction="row" gap="12px" align="center">
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
