import React, { useRef, useState } from "react";

export default function Ref() {
  const [value, setValue] = useState("test value");
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
        onChange={e => setValue(e.target.value)}
        ref={inputElement}
        value={value}
      />
      <button onClick={handleClick}>Clear and Focus</button>
    </div>
  );
}
