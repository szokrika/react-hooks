import { useEffect, useState } from "react";

export default function useFetch(url, initialValue) {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    url && setLoading(true);
    url &&
      fetch(url)
        .then(function(response) {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then(json => {
          setLoading(false);
          setData(json);
        })
        .catch(error => {
          setLoading(false);

          setError({
            type: error.name,
            status: error.message
          });
        });
  }, [url]);

  return { data, error, loading };
}
