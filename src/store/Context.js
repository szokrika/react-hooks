import React from "react";

const defaults = {
  appName: "Hello Hooks"
};
const AppContext = React.createContext(defaults);

export { AppContext };
