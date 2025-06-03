import { useState } from "react";

import "./App.css";
import axios from "axios";
import { useEffect } from "react";
function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    //@ axios vs fetch
    axios
      .get("/api/joke") //@ Standardisation of the url (proxy config in vite) or use cors config in the servers
      .then((response) => {
        setJokes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <h1>Here Are your jokes from the backend</h1>
      <p>JOKES:{jokes.length}</p>
      {jokes.map(
        (
          joke,
          index //@ We are going to use () instead of {} , to not return.
        ) => (
          <div key={joke.id}>
            <p>{joke.content}</p>
          </div>
        )
      )}
    </>
  );
}

export default App;
