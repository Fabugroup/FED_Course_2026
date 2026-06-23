import React from "react";
import NavBar from "./NavBar";
import Header from "./components/header";
import Footer from "./components/footer";
import FlexBox from "./components/FlexBox";
import "./App.css";

function App() {
  return (
    <FlexBox style={{ minHeight: "100vh" }} direction="column">
      <Header />
      <NavBar />
      <FlexBox grow={1}>
        <div className="FG_text1">
          <h1>Intelligent Control for Modern Buildings</h1>
        </div>
        {/* Your body page content goes here */}
      </FlexBox>
      <Footer />
    </FlexBox>
  );
}

export default App;
