import { useState } from "react";

function LivePreview() {
  // declare the state variable
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  // event handler for input change
  function handleChange(namechange) {
    setName(namechange.target.value);
  }

  function handleCountry(countryname) {
    setCountry(countryname.target.value);
  }

  return (
    <div className="container">
      <h2> React State Demo </h2>

      <h3> Enter your name: </h3>
      <input
        type="text"
        placeholder="Enter your name ..."
        value={name}
        onChange={handleChange}
      />
      <br />
      <h3> Enter your country: </h3>
      <input
        type="text"
        placeholder="Enter your country ..."
        value={country}
        onChange={handleCountry}
      />
      <br />
      <br />
      <hr />
      <h2 className="card">
        Hello, {name} from {country}
      </h2>
    </div>
  );
}

export default LivePreview;
