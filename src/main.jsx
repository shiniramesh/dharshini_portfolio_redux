import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // import Provider
import App from "./App";
import { store } from "./app/store"; // import your Redux store
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
