import { useContext } from "react";

import BooksContainer from "./components/Books_Container/BooksContainer";
import Navbar from "./components/Navbar/Navbar";

import { StateContext } from "./components/Context/BookContext";

import "./App.scss";

const App = () => {
  const { ErrorBoundary } = useContext(StateContext);

  return (
    <>
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>
      <main className="books__container">
          <BooksContainer />
      </main>
    </>
  );
};

export default App;
