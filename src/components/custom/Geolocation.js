import React, { useState, useEffect } from "react";

export default function useGeolocation() {
  let mounted = true;
  let watchId;

  const [state, setState] = useState({
    loading: true,
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: Date.now()
  });

  const onEvent = event => {
    if (mounted) {
      setState({
        loading: false,
        accuracy: event.coords.accuracy,
        altitude: event.coords.altitude,
        altitudeAccuracy: event.coords.altitudeAccuracy,
        heading: event.coords.heading,
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed,
        timestamp: event.timestamp
      });
    }
  };

  const onEventError = error =>
    mounted && setState(oldState => ({ ...oldState, loading: false, error }));

  useEffect(
    () => {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      navigator.geolocation.getCurrentPosition(onEvent, onEventError, options);
      watchId = navigator.geolocation.watchPosition(onEvent, onEventError);

      return () => {
        mounted = false;
        navigator.geolocation.clearWatch(watchId);
      };
    },
    [0]
  );

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
