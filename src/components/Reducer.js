import React, { useReducer, useContext } from "react";
import { AppContext } from "../store/Context";
import reducer from "../store/Reducer";

export default function Reducer() {
  const context = useContext(AppContext);
  const [state, dispatch] = useReducer(reducer, context);

  return (
    <div>
      <h3>useReducer</h3>
      <p>app name: {state.appName}</p>
      <button
        onClick={() => dispatch({ type: "hello", payload: "Hello Reducer" })}
      >
        Update app name
      </button>
    </div>
  );
}
