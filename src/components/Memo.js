import React, { useMemo } from "react";

const computeExpensiveValue = (x, y) => {
  return x * y;
};

const divisible = (number = 1, division = 1) => number % division === 0;

export default function Memo({ a, b }) {
  // it should only run the function when a has changed
  const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a]);
  const divider = 260;
  // memoization "pipelining"
  // how a value depends on a different memoised value
  const shouldCompute = useMemo(
    () => {
      return divisible(expensiveValue, divider);
    },
    [expensiveValue]
  );

  const divisibleValue = useMemo(
    () => {
      return shouldCompute ? expensiveValue / divider : 0;
    },
    [expensiveValue]
  );
  // end memoization "pipelining"

  return (
    <div className="component">
      <h3>useMemo</h3>
      <p>Should update if 'a' prop change, but not 'b'</p>
      <pre>
        {JSON.stringify(
          {
            a,
            b,
            expensiveValue,
            divisibleValue
          },
          null,
          2
        )}
      </pre>
    </div>
  );
}
