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
  <I18nContextProvider>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </I18nContextProvider>,
  rootElement
);
