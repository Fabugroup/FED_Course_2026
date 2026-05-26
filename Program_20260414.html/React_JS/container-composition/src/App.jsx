import "./App.css";
import ButtonGroup from "./components/buttons/ButtonGroup";
import Button from "./components/buttons/Button";

function App() {
  return (
    <>
      <h1> Container Composition</h1>
      <hr />
      {/* single button */}
      <ButtonGroup>
        <Button type="primary" text="Primary" />
      </ButtonGroup>
      {/* two button */}
      <ButtonGroup>
        <Button type="primary" text="Primary" />
        <Button type="secondary" text="Secondary" />
      </ButtonGroup>
      ``
      {/* three button */}
      <ButtonGroup>
        <Button type="primary" text="Primary" />
        <Button type="secondary" text="Secondary" />
        <Button type="danger" text="Danger" />
      </ButtonGroup>
      {/* four button */}
      <ButtonGroup>
        <Button type="primary" text="Primary" />
        <Button type="secondary" text="Secondary" />
        <Button type="primary" text="Primary" />
        <Button type="danger" text="Danger" />
      </ButtonGroup>
    </>
  );
}

export default App;
