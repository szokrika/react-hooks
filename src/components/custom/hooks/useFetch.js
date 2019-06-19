import { useEffect, useState } from "react";

export default function useFetch(url, initialValue) {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(initialValue);
  useEffect(
    () => {
      fetch(url)
        .then(function(response) {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then(json => setData(json))
        .catch(error =>
          setError({
            type: error.name,
            status: error.message
          })
        );
    },
    [url]
  );

  return { data, error };
}
