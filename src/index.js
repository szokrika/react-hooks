import React from "react";
import ReactDOM from "react-dom";
import { I18nContextProvider } from "./store/I18nContext";
import { AppContextProvider } from "./store/AppContext";
import All from "./components/All";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <All />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AppContextProvider>
    <I18nContextProvider>
      <App />
    </I18nContextProvider>
  </AppContextProvider>,
  rootElement
);
