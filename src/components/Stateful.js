import React, { useState } from "react";

export default function Stateful() {
  const [state, setState] = useState(false);
  return (
    <React.Fragment>
      <h3>useState</h3>
      <p>Set and use component state</p>
      <button className="interactive" onClick={() => setState(!state)}>
        <div>Boolean state</div>
      </button>
      <pre>{state ? "on" : "off"}</pre>
    </React.Fragment>
  );
}
