import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      {/* navigation to other pages */}
      <h1>Welcome to React Router</h1>
      <hr />
      <Link to="/aboutus">About Us</Link> |
      <a href="https://www.google.com">Google</a>
    </>
  );
}

export default HomePage;
