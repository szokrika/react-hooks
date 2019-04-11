import React, { useState } from "react";
import { Button } from "neutron-react-components";
import useFetch from "./useFetch";

export default function UseFetchComp() {
  const [url, setUrl] = useState(null);
  const { data } = useFetch(url);
  const load = () => {
    setUrl("https://jsonplaceholder.typicode.com/photos/1");
  };

  return (
    <div>
      <h3>Load data on demand with useFetch</h3>
      <Button color="ternary" onClick={load}>
        Load data
      </Button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
