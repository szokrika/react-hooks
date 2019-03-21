import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useReducer
} from "react";
import { AppContext } from "../store/AppContext";
import reducer from "../store/Reducer";

import Stateful from "./Stateful";
import Effects from "./Effects";
import Context from "./Context";
import Reducer from "./Reducer";
import Ref from "./Ref";
import Callback from "./Callback";
import Memo from "./Memo";

export default function All() {
  const [a, setA] = useState(1);
  const [c, setC] = useState(1);

  const context = useContext(AppContext);
  const [state, dispatch] = useReducer(reducer, context);

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
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="all-features">
        <h1>Hello Hooks</h1>
        <Stateful />
        <Effects />
        <Context />
        <Reducer />
        <Ref />
        <Callback a={a} b={b} />
        <Memo a={a} b={b} c={c} />
      </div>
    </AppContext.Provider>
  );
}
