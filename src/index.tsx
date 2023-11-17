/* eslint-disable no-alert */
import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

const history = createMemoryHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Router location={history.location} navigator={history}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();
serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    const waitingServiceWorker = registration.waiting;

    if (waitingServiceWorker) {
      waitingServiceWorker.addEventListener("statechange", (event) => {
        // @ts-ignore
        if (event.target.state === "activated") {
          if (
            window.confirm("A new version of the app is available, RELOAD?")
          ) {
            window.location.reload();
          }
        }
      });
      waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
    }
  },
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
