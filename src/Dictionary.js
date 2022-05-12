import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dict">
      <form onSubmit={search}>
        <input type="search" autoFocus="on" onChange={handleKeyword} />
        <input type="submit" />
      </form>
    </div>
  );
}