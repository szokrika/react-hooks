import React from "react";
import useGeolocation from "./hooks/useGeolocation";

export default function Geolocation() {
  const { state } = useGeolocation();

  return (
    <div className="component">
      <h3>useGeolocation</h3>
      <p>Return geolocation only on component mount.</p>
      <small>
        Codebox policy does not allow this on desktop but it should work on a
        device!
      </small>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
