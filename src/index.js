import React from "react";
import ReactDOM from "react-dom";
import Stateful from "./components/Stateful";
import Effects from "./components/Effects";
import Context from "./components/Context";
import Reducer from "./components/Reducer";
import Callback from "./components/Callback";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello Hooks</h1>
      <Stateful />
      <Effects />
      <Context />
      <Reducer />
      <Callback />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
