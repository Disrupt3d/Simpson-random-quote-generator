import React from "react";
import { useState } from "react";
import "./App.css";
import axios from "axios";
import DisplayQuote from "./components/DisplayQuote";

function App() {
  const [quote, setQuote] = useState("");
  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      // Use this data to update the state
      .then((response) => {
        setQuote(response[0]);
      });
  };

  return (
    <div className="App">
      <h1>RANDOM SIMPSON QUOTES</h1>
      <p>
        This application, will return you a random Simpson Quote, using the The
        Simpsons Quote API.
        <p>Feel free to try it !</p>
      </p>
      <DisplayQuote quote={quote} />
      <button type="button" onClick={getQuote}>
        GET A NEW QUOTE
      </button>
    </div>
  );
}

export default App;
