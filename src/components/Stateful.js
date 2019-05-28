import React, { useState, useContext } from "react";
import { I18nContext } from "../store/I18nContext";

export default function Stateful() {
  const [state, setState] = useState(false);
  const { translate } = useContext(I18nContext);
  return (
    <div className="component">
      <h3>useState</h3>
      <p>{translate("state")}</p>

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
