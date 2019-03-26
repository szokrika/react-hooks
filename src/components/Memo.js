import React, { useMemo } from "react";

const computeExpensiveValue = (x, y) => {
  return x * y;
};

export default function Memo({ a, b }) {
  // it should only run the function when a has changed
  const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a]);

  return (
    <div className="component">
      <h3>useMemo</h3>
      <p>Should update if 'a' prop change, but not 'b'</p>
      <pre>
        {JSON.stringify(
          {
            a,
            b,
            expensiveValue
          },
          null,
          2
        )}
      </pre>
    </div>
  );
}
