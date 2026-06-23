import "./App.css";
import PrimaryButton from "./components/buttons/static/PrimaryButton.jsx";
import SecondaryButton from "./components/buttons/static/SecondaryButton.jsx";
import DangerButton from "./components/buttons/static/DangerButton.jsx";
import Buttons from "./components/buttons/dynamic/Buttons.jsx";

function App() {
  return (
    <>
      <h1>Component Demostration</h1>
      <hr />
      <PrimaryButton />
      <SecondaryButton />
      <DangerButton />
      <br />
      <br />
      <br />
      <hr /> <hr />
      <h1> Dynamic Buttons Demo</h1>
      <hr />
      <Buttons type="primary" text="Dynamic Pri" />
      <Buttons type="secondary" text="Dynamic Sec" />
      <Buttons type="danger" text="D DANGER D" />;
    </>
  );
}

export default App;
