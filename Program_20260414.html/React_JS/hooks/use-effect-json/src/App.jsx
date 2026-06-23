import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  // when you set useState("default value"), the default value is
  // only used the first time the component renders. If you update
  // the state later on, it will not reset to the default value unless
  // you explicitly set it back to that value.

  // useEffect(() is use to perform side effects in function components.
  // It serves the same purpose as componentDidMount, componentDidUpdate,
  // and componentWillUnmount in React classes, but unified into a single API.
  // By default, it runs both after the first render and after every update.
  // You can also specify when to run the effect by passing a second argument,
  // which is an array of dependencies. If you pass an empty array, the effect
  // will only run once after the initial render.

  const [Data, setData] = useState([]);
  // usestate( []) is initiated as a blank array because we are going to
  // fetch data from an API and store it in this state variable.
  // The data we fetch will be an array of objects, so it makes sense
  //  to initialize it as an empty array.

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    // this code will bring data from another application like csv or json and
    // then we can use it in our application. In this case, we are fetching data
    // from jsonplaceholder.typicode.com and then logging it to the console.
    // The resourceType variable is used to specify which type of data we want
    // to fetch (posts, users, or comments). The useEffect hook will run every
    // time the resourceType state changes, which means that whenever we click
    // one of the buttons to change the resource type, the effect will run and
    // fetch the new data.
  }, [resourceType]);

  return (
    <>
      <div>
        <button className="container" onClick={() => setResourceType("posts")}>
          POSTS
        </button>
        <button className="container" onClick={() => setResourceType("users")}>
          USERS
        </button>
        <button
          className="container"
          onClick={() => setResourceType("comments")}
        >
          COMMENTS
        </button>
      </div>
      <h2> {resourceType}</h2>
      <div className="card-container">
        {Data.map((item) => {
          return (
            <div key={item.id} className="card">
              {resourceType === "posts" && (
                <>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </>
              )}
              {resourceType === "users" && (
                <>
                  <h3>{item.name}</h3>
                  <p>Email: {item.email}</p>
                  <p>Phone: {item.phone}</p>
                  {item.company?.name && <p>Company: {item.company.name}</p>}
                  {item.address && (
                    <p>
                      Address: {item.address.street}, {item.address.suite},{" "}
                      {item.address.city}, {item.address.zipcode}
                    </p>
                  )}
                </>
              )}
              {resourceType === "comments" && (
                <>
                  <h3>{item.name}</h3>
                  <p>Email: {item.email}</p>
                  <p>{item.body}</p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
  ``;
}

export default App;
