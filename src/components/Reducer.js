import React, { useReducer, useContext } from "react";
import { AppContext } from "../store/AppContext";
import { AsyncContext } from "../store/AsyncContext";
import reducer from "../store/Reducer";

export default function Reducer() {
  const async = useContext(AsyncContext);
  const context = useContext(AppContext);
  const [state, dispatch] = useReducer(reducer, { ...context, ...async });

  return (
    <div>
      <h3>useReducer</h3>
      <p>Redux type functionality</p>
      <pre>app name: {state.appName}</pre>
      {state.loading && <p>Loading...</p>}
      <button
        onClick={() => {
          dispatch({ type: "async-loading", payload: true });
          setTimeout(() => {
            dispatch({ type: "async-loading", payload: false });
            dispatch({ type: "hello", payload: "Hello Reducer" });
          }, 2000);
        }}
      >
        Update app name
      </button>
    </div>
  );
}
