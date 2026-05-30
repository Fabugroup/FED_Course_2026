import "./App.css";
import Header from "./components/Header";
import Features from "./components/Features";
import Footer from "./components/Footer";
import NavBars from "./components/NavBars";
import PageContent from "./components/PageContent";

function App() {
  return (
    <>
      <NavBars />
      <Header />
      <PageContent />
      <Features />
      <Footer />
    </>
  );
}

export default App;
