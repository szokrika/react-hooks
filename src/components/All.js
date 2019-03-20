import React, { useState, useEffect, useLayoutEffect } from "react";

import Stateful from "./Stateful";
import Effects from "./Effects";
import Context from "./Context";
import Reducer from "./Reducer";
import Callback from "./Callback";
import Memo from "./Memo";
import Ref from "./Ref";

export default function All() {
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
    <div className="all-features">
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
