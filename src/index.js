import React from "react";
import ReactDOM from "react-dom";
import All from "./components/All";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <All />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
