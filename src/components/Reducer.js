import React, { useContext } from "react";
import { AppContext } from "../store/AppContext";

export default function Reducer() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="component">
      <h3>useReducer - usage</h3>
      <p>
        Redux type functionality - see <strong>All.js</strong> to understand
        benefits.
      </p>
      <pre>app name: {state.appName}</pre>
      {state.loading && <p className="loading">Loading...</p>}
      <button
        onClick={() => {
          dispatch({ type: "async-loading", payload: true });
          setTimeout(() => {
            dispatch({ type: "async-loading", payload: false });
            dispatch({ type: "hello", payload: "Hello Reducer" });
          }, 1500);
        }}
      >
        Update app name
      </button>
    </div>
  );
}
