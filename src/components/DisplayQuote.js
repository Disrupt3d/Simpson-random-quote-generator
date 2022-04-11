import React from "react";
import "../DisplayQuote.css";

const DisplayQuote = ({ quote }) => {
  return (
    quote && (
      <div className="DisplayQuote">
        <div className="character-name">{quote.character}</div>
        <div className="character-quote">"{quote.quote}"</div>
        <img className="character-picture" src={quote.image} alt="" />
      </div>
    )
  );
};

export default DisplayQuote;
