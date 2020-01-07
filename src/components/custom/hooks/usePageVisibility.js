import { useState, useEffect } from "react";

export default function usePageVisibility() {
  const [hidden, setHidden] = useState();

  const resolver = value => setHidden(value);
  useEffect(() => {
    window.addEventListener("visibilitychange", () => {
      resolver(document.hidden);
    });

    return () => {
      window.removeEventListener("visibilitychange", () => {
        resolver(document.hidden);
      });
    };
  }, []);

  return { hidden };
}
