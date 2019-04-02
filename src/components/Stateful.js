import React, { useState } from "react";

export default function Stateful() {
  const [state, setState] = useState(false);
  return (
    <div className="component">
      <h3>useState</h3>
      <p>Set and use component state</p>

      <div
        data-testid="toggle"
        className={`toggle toggle-${state ? "on" : "off"}`}
        onClick={() => setState(!state)}
      />
      <pre data-testid="toggle-output" className={`${state ? "on" : "off"}`}>
        {state ? "on" : "off"}
      </pre>
    </div>
  );
}
