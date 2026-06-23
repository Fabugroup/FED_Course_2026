// FG System - App.jsx - opening page

// import FlexBox from "../../../../../React_JS/layout_containers/Web-Page-Layout/src/components/containers/FlexBox";

import {Routes,Route} from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./components/header";
import Footer from "./components/Footer";
import FlexBox from "../src/components/FlexBox";
import Home from "/sub_pages/Home.jsx";
import Solution from "/sub_pages/Solution.jsx";
import Projects from "/sub_pages/Projects"
import Knowledge from "/sub_pages/Knowledge";
import Dealers from "/sub_pages/Dealers";
import Support from "/sub_pages/Support";
import Contact from "/sub_pages/Contact";
import "./App.css";

function App() {
  return (
    <FlexBox style={{ minHeight: "100vh" }} direction="column">
      <Header />
      <NavBar />

  <FlexBox grow={1} padding="25px" justify="center" align="center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Solution" element={<Solution />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Knowledge" element={<Knowledge />} />
            <Route path="/Dealers" element={<Dealers/>} />
            <Route path="/Support" element={<Support />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes> 
    </FlexBox>

      {/* <FlexBox
        direction="row"
        justify="flex-start"
        align="flex-start"
        padding="10px 10px"
        width="100%"
        background="#000000"
        border="1px solid black"
        color="white"
        grow={1}
      >
        <h1 className="FG_Title">Intelligent Control for Modern Buildings</h1> */}
        {/* Your body page content goes here */}
      {/* </FlexBox> */}
      <Footer />
    </FlexBox>
  );
}

export default App;
