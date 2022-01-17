import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./store";

ReactDOM.render(
  <>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <React.StrictMode>
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </>,
  document.getElementById("root")
);
