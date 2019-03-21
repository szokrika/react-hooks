import React, { useState } from "react";

export default function Stateful() {
  const [state, setState] = useState(false);
  return (
    <div className="component">
      <h3>useState</h3>
      <p>Set and use component state</p>

      <div
        className={`toggle toggle-${state ? "on" : "off"}`}
        onClick={() => setState(!state)}
      />
      <pre className={`${state ? "on" : "off"}`}>{state ? "on" : "off"}</pre>
    </div>
  );
}
