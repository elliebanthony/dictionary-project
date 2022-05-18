import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dict">
      <h2> What word would you like to search? </h2>
      <form className="m-2 p-2" onSubmit={search}>
        <input type="search" onChange={handleKeyword} />
        <input type="submit" />
      </form>
      <Results results={results} />
    </div>
  );
}
