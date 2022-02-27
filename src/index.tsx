import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
// import { store } from "./state/index";
import storeWithToolkit from "./state/storeWithToolkit";
import { BrowserRouter } from "react-router-dom";
import "./translations/i18n";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeWithToolkit}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
