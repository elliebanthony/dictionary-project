import "./App.css";
import Dictionary from "./Dictionary";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1 className="mt-2"> Dictionary </h1>
      <Dictionary defaultKeyword="moon" />
      <br />
      <footer>
        {" "}
        <a
          href="https://github.com/elliebanthony/dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Open Source Code 🌟{" "}
        </a>{" "}
        by Ellie Anthony{" "}
      </footer>
    </div>
  );
}

export default App;
