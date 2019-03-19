import React, { useState } from "react";

export default function Stateful() {
  const [state, setState] = useState(false);
  return (
    <React.Fragment>
      <h3>useState</h3>
      <button className="interactive" onClick={() => setState(!state)}>
        <div>Boolean state</div>
      </button>
      <div>{state ? "on" : "off"}</div>
    </React.Fragment>
  );
}
