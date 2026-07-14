import Child from "./Child";
import { useState } from "react";

function Parent() {
  const [showChild, setShowChild] = useState(true);

  return (
    <div>
      <h1> Component Un-Mount Demo </h1>
      <button onClick={() => setShowChild(!showChild)}>
        {showChild ? "Hide Child" : "Show Child"} Child Component
      </button>
      {showChild && <Child />}
    </div>
  );
}

export default Parent;
