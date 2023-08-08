import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { GlobalStyle } from "./globalstyles";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);