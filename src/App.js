import "./App.css";
import React, { useState, useEffect } from "react";

const API_URL = "http://api.icndb.com/jokes/random";

function App() {
  const [joke, setJoke] = useState("");

  const generateJoke = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setJoke(data.value.joke));
  };

  useEffect(() => {
    generateJoke();
  }, []);
  return (
    <div className="box">
      <h1>
        Check Norris Jokes
        <p dangerouslySetInnerHTML={{ __html: joke }} />
        <button onClick={generateJoke}>Get new Jokes</button>
      </h1>
    </div>
  );
}

export default App;
