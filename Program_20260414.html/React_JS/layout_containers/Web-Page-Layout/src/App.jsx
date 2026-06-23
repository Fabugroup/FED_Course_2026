import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import FlexBox from "./components/containers/FlexBox";
import Projects from "./components/Projects"; // Import Projects
import Profile from "./components/Profile"; // Import Profile
import About from "./components/About"; // Import About
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useContext } from "react";

const { theme } = useContext(ThemeContext);

function App() {
  return (
    <div>
      <FlexBox direction="column" height="100vh">
        {/* Header Section */}
        <Header />

        <FlexBox grow={1}>
          {/* Body Section */}
          <SideBar />

          {/* Main Content Section */}
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </FlexBox>

        {/* Footer Section */}
        <Footer />
      </FlexBox>
    </div>
  );
}

export default App;
