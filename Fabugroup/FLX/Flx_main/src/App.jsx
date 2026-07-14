import "./App.css";
import FlxBackground from "./components/FlxBackground";

function App() {
  return (
    <FlxBackground
      pixelSize={16}
      density={0.82}
      brightness={0.85}
      animation={false}
      // speed={0.18}
    >
      <div className="hero">
        <h1>Fabulux</h1>

        <p>Lighting Beyond Imagination</p>

        <button>START</button>
      </div>
    </FlxBackground>
  );
}

export default App;
