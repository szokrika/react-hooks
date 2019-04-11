import React, { useReducer } from "react";

import en from "../i18n/en.json";
import hu from "../i18n/hu.json";

const translations = { en, hu };

const getTranslate = langCode => key =>
  translations[langCode][key] || `[${key}]`;

const initialState = {
  langCode: "en",
  translate: getTranslate("en")
};

export const I18nContext = React.createContext(initialState);

export const I18nContextProvider = ({ children }) => {
  /* This is where magic starts to happen. We're creating
  a reducer to manage the global state which will sit in
  I18nContext. For now, the only action we will have
  is setting language */
  const reducer = (state, action) => {
    switch (action.type) {
      case "setLanguage":
        return {
          langCode: action.payload,
          translate: getTranslate(action.payload)
        };
      default:
        return { ...initialState };
    }
  };

  /* useReducer hook receives a reducer and an initialState to
  return the current state object with a dispatch method to
  dispatch actions. */

  const [state, dispatch] = useReducer(reducer, initialState);

  /* We're Providing state object (langCode and translate method
  in this case) and also the dispatch for the children components */
  return (
    <I18nContext.Provider value={{ ...state, dispatch }}>
      {children}
    </I18nContext.Provider>
  );
};
