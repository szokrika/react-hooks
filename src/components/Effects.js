import React, { useState, useEffect } from "react";

export default function Effects() {
  const [state, setState] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(json => setState(json));
  }, []);

  return (
    <React.Fragment>
      <h3>useEffect</h3>
      <p>fetches a todo</p>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </React.Fragment>
  );
}
