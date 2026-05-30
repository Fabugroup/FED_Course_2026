import "./app.css";
import AssestImage from "./components/Assestimage";
import InlineImage from "./components/InlineImage";
import PublicImage from "./components/PublicImage";

export function App() {
  return (
    <>
      <h1> images </h1>
      <InlineImage />
      <AssestImage />
      <PublicImage />
    </>
  );
}

export default App;
