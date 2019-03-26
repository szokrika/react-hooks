import React, { useCallback } from "react";

// useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).

export default function Callback({ a, b }) {
  const returnMyValue = () => b;
  const valueBoundToMount = useCallback(returnMyValue, [])();
  const valueBoundtoA = useCallback(returnMyValue, [a])();
  return (
    <div className="component">
      <h3>useCallback</h3>
      <p>Return 'b' only on component mount</p>
      <pre>{valueBoundToMount}</pre>
      <p>Return 'b' only when 'a' updates</p>
      <pre>{valueBoundtoA}</pre>
    </div>
  );
}
