import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./GlobalStyles";
import data from "./data.json";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App data={data} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
