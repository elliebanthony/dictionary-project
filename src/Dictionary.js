import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./dictionary.css";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function handlePexelResponse(response) {
    setPhotos(response.data.photos[0].src.small);
  }
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelApiKey =
      "563492ad6f91700001000001c6f3c0764d23473da19805bab2288fa9";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    let headers = { Authorization: `Bearer ${pexelApiKey}` };
    axios.get(pexelApiUrl, { headers: headers }).then(handlePexelResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
