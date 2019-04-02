import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../store/AppContext";
import useFetch from "./custom/useFetch";

export default function Effects() {
  const [data, setData] = useState(null);
  const { state, dispatch } = useContext(AppContext);
  const customData = useFetch(
    "https://jsonplaceholder.typicode.com/users/1",
    null
  );

  useEffect(() => {
    dispatch({ type: "loading", payload: true });
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(json => setData(json))
      .then(() => dispatch({ type: "loading", payload: false }));
  }, []);

  return (
    <div className="component">
      <h3>useEffect</h3>
      <p>Fetch data from an api endpoint</p>
      {state.loading && <p className="loading">Loading...</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

      <p>Fetch data using custom hook</p>
      {state.loading && <p className="loading">Loading...</p>}
      {customData && <pre>{JSON.stringify(customData, null, 2)}</pre>}
    </div>
  );
}
