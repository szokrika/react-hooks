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
// Custom hooks
import Geolocation from "./custom/Geolocation";

export default function All() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(10);

  const context = useContext(AppContext);
  const [state, dispatch] = useReducer(reducer, context);

  const updateA = value => setA(a + value);
  const updateB = value => setB(b + value);

  useEffect(
    () => {
      if (a < 10) {
        setTimeout(() => {
          updateA(5);
        }, 3000);
      }

      if (b < 60) {
        setTimeout(() => {
          updateB(10);
        }, 1500);
      }
    },
    [a, b]
  );

  useLayoutEffect(() => console.log("useLayoutEffect if 'a' changes"), [a]);

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
        <Memo state={state} a={a} b={b} />
        <h2>Custom Hooks</h2>
        <Geolocation />
      </div>
    </AppContext.Provider>
  );
}
