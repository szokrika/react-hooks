import React, { useMemo } from "react";

export default function Memo({ a, b }) {
  const computeExpensiveValue = async (a, b) => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ type: "computeExpensiveValue", a, b });
      }, 1500);
    });
  };

  useMemo(() => computeExpensiveValue(a, b), [a, b]).then(console.log);

  return (
    <div>
      <h3>useMemo</h3>
      <p>logs to console</p>
    </div>
  );
}
