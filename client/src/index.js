import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { reducers } from "./reducers";

const store = createStore (reducers, compose (applyMiddleware (thunk)));

ReactDOM.createRoot (document.getElementById ('root')).render (
  <Provider store={store}>
    <App />
  </Provider>
);
