import React, { useReducer } from "react";

const initialState = {
  appName: "Hello Hooks",
  loading: false,
  error: null
};
const AppContext = React.createContext(initialState);

const AppContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "async-loading":
        return { ...state, loading: action.payload };
      case "hello":
        return { ...state, appName: action.payload };
      default:
        return state;
    }
  };

  /* useReducer hook receives a reducer and an initialState to
  return the current state object with a dispatch method to
  dispatch actions. */

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  /* We're Providing state object (langCode and translate method
  in this case) and also the dispatch for the children components */
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
