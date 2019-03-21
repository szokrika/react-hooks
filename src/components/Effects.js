import React, { useState, useEffect } from "react";

export default function Effects() {
  const [state, setState] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(json => setState(json));
  }, []);

  return (
    <div className="component">
      <h3>useEffect</h3>
      <p>Fetch data from an api endpoint</p>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
