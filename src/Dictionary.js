import React, { useState } from "react";
import axios from "axios";
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
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
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyword} />
        <input type="submit" />
      </form>
    </div>
  );
}
