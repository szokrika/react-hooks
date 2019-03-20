import React, { useState, useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import Stateful from "./components/Stateful";
import Effects from "./components/Effects";
import Context from "./components/Context";
import Reducer from "./components/Reducer";
import Callback from "./components/Callback";
import Memo from "./components/Memo";
import Ref from "./components/Ref";

import "./styles.css";

function App() {
  const [a, setA] = useState(1);
  const [c, setC] = useState(1);
  const b = 10;

  const update = value => setA(a + value);
  const updateC = value => setC(c + value);

  useEffect(
    () => {
      if (a < 10) {
        setTimeout(() => {
          update(2);
        }, 3000);
      }
      if (a > 7) {
        updateC(7);
      }
    },
    [a]
  );

  useLayoutEffect(() => console.log("useLayoutEffect"), [b]);

  return (
    <div className="App">
      <h1>Hello Hooks</h1>
      <Stateful />
      <Effects />
      <Context />
      <Reducer />
      <Callback a={a} b={b} />
      <Memo a={a} b={b} c={c} />
      <Ref />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
