import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../store/AppContext";
import { I18nContext } from "../store/I18nContext";
import useFetch from "./custom/hooks/useFetch";

export default function Effects() {
  const { translate } = useContext(I18nContext);
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
      <p>{translate("fetch")}</p>
      {state.loading && <p className="loading">{translate("loading")}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

      <p>{translate("fetch-custom")}</p>
      {state.loading && <p className="loading">{translate("loading")}</p>}
      {customData && <pre>{JSON.stringify(customData, null, 2)}</pre>}
    </div>
  );
}
