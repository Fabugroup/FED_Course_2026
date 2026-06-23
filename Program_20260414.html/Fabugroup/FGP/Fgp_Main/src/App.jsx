import React from "react";
import NavBar from "./NavBar";
import Header from "./components/header";
import Footer from "./components/Footer";
import FlexBox from "./components/FlexBox";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./sub_pages/Home";
import AboutUs from "./sub_pages/AboutUs";
import Division from "./sub_pages/Division";
import Projects from "./sub_pages/Projects";
import Partners from "./sub_pages/Partners";
import Contact from "./sub_pages/Contact";
import Knowledge from "./sub_pages/Knowledge";

function App() {
  return (
    <FlexBox style={{ minHeight: "100vh" }} direction="column">
      <NavBar />

      <FlexBox grow={1} padding="25px" justify="center" align="center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Division" element={<Division />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Partners" element={<Partners />} />
            <Route path="/Knowledge" element={<Knowledge />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </FlexBox>



      <Footer />
    </FlexBox>
  );
}

export default App;
