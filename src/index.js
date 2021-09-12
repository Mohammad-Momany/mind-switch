import ReactDOM from "react-dom";
import { BookProvider } from "./components/Context/BookContext";
import App from "./App";

ReactDOM.render(
  <BookProvider>
    <App />
  </BookProvider>,
  document.getElementById("root")
);
