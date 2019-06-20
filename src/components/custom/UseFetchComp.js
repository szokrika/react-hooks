import React, { useState } from "react";
import { Button } from "neutron-react-components";
import useFetch from "./hooks/useFetch";

export default function UseFetchComp() {
  const [url, setUrl] = useState(null);
  const { data, error, loading } = useFetch(url);
  console.log(error);
  // const load = () => {
  //   setUrl("https://jsonplaceholder.typicode.com/photos/1");
  // };
  const load = () => {
    const random = Math.random();
    setUrl(`https://api.icndb.com/jokes/random?search=${random}`);
  };

  return (
    <div>
      <h3>Load data on demand with useFetch</h3>

      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}

      <Button color="ternary" onClick={load}>
        {loading ? "Loading..." : "Load new joke"}
      </Button>
    </div>
  );
}
