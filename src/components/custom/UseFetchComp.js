import React, { useState } from "react";
import { Button } from "neutron-react-components";
import useFetch from "./hooks/useFetch";

export default function UseFetchComp() {
  const [url, setUrl] = useState(null);
  const { data } = useFetch(url);
  const load = () => {
    setUrl("https://jsonplaceholder.typicode.com/photos/1");
  };

  return (
    <div>
      <h3>Load data on demand with useFetch</h3>

      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

      <Button color="ternary" onClick={load}>
        Load data
      </Button>
    </div>
  );
}
