import { useState, useEffect } from "react";

export default function useDeviceLight() {
  const [lux, setLux] = useState(null);

  const update = value => setLux(value);

  useEffect(() => {
    window.addEventListener("devicelight", e => update(e.value));

    return () => {
      window.removeEventListener("devicelight", e => update(e.value));
    };
  });
  console.log("lux", lux);
  return { lux };
}
