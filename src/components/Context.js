import React, { useContext } from "react";
import { AppContext } from "../store/AppContext";

export default function Context() {
  const { state } = useContext(AppContext);
  return (
    <div className="component">
      <h3>useContext</h3>
      <p>Context usage simplified, no render props needed</p>
      <pre>app name: {state.appName}</pre>
    </div>
  );
}
