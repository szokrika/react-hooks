import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url, initialValue) {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  useEffect(
    () => {
      axios(url)
        .then(response => {
          setData(response.data);
        })
        .catch(({ response: { status, statusText } }) => {
          setError({
            status,
            statusText
          });
        });
    },
    [url]
  );

  return { data, error };
}
