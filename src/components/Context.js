import React, { useContext } from "react";
import { AppContext } from "../store/Context";

export default function Context() {
  const context = useContext(AppContext);
  return (
    <div>
      <h3>useContext</h3>
      <p>app name: {context.appName}</p>
    </div>
  );
}
