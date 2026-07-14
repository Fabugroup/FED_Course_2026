import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";


function App() {
  return (
    <>
<Header />
<Welcome user="Johnny" course= "TypeScript" date={new Date(2026, 5, 18)} />
<Footer />
    </>
  );
}

export default App;