import React, { useRef, useState } from "react";
// import { Button, Input } from "neutron-react-components";

export default function Ref({ defaultValue = "Enter your input" }) {
  const [value, setValue] = useState(defaultValue);
  const inputElement = useRef(null);
  const handleClick = () => {
    setValue("");
    inputElement.current.focus();
  };
  return (
    <div className="component">
      <h3>useRef</h3>
      <p>Reference a DOM node directly</p>
      <input
        className="input"
        data-testid="ref-input"
        onChange={e => setValue(e.target.value)}
        ref={inputElement}
        value={value}
      />
      <button className="button" data-testid="ref-button" onClick={handleClick}>
        Clear and Focus
      </button>
    </div>
  );
}
