import React from "react";
import ReactDOM from "react-dom";
import { BookProvider } from "./components/Context/BookContext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BookProvider>
      <App />
    </BookProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
