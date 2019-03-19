import React, { useCallback } from "react";

const cb = () => console.log("callback called");

export default function Callback() {
  useCallback(cb, []);
  return (
    <div>
      <h3>useCallback</h3>
      <p>Should log to console</p>
    </div>
  );
}
