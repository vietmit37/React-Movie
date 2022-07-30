import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "./redux";
import thunk from "redux-thunk";
import { DOMAIN_API } from "./utils/config";
import * as signalR from "@microsoft/signalr";

export const connection = new signalR.HubConnectionBuilder()
  .withUrl(`${DOMAIN_API}/DatVeHub`)
  .configureLogging(signalR.LogLevel.Information)
  .build();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
connection
  .start()
  .then(() => {
    root.render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  })
  .catch((err) => console.error(err.toString()));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
