import React from "react";

const defaults = {
  loading: false,
  error: false
};
const AsyncContext = React.createContext(defaults);

export { AsyncContext };
