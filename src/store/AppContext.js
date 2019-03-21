import React from "react";

const defaults = {
  appName: "Hello Hooks",
  loading: false,
  error: null
};
const AppContext = React.createContext(defaults);

export { AppContext };
