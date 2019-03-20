import React, { useCallback } from "react";

export default function Callback({ a, b }) {
  const memoizedCallback = useCallback(
    () => {
      console.log("memoized callback", a, b);
    },
    [a, b]
  );
  memoizedCallback();
  return (
    <div>
      <h3>useCallback</h3>
      <p>logs to console</p>
    </div>
  );
}
