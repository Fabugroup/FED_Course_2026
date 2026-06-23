import "./app.css";
import CheckSal from "./components/CheckSal";

export function App() {
  return (
    <>
      <h1> Component Rendering </h1>
      <h2> Salary Status Check </h2>
      <CheckSal sal={1000} />
      <CheckSal sal={6000} />
      <CheckSal sal={20000} />
      <CheckSal sal={30000} />
    </>
  );
}

export default App;
