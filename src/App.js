import { useContext, Suspense, lazy } from "react";

import Navbar from "./components/Navbar/Navbar";
import { StateContext } from "./components/Context/BookContext";
import Loading from "./components/LoadingAnimations/Loading";

import "./App.scss";

const BooksContainer = lazy(() =>
  import("./components/Books_Container/BooksContainer")
);

const App = () => {
  const { ErrorBoundary } = useContext(StateContext);

  return (
    <>
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>
      <main className="books__container">
        <Suspense fallback={<Loading />}>
          <BooksContainer />
        </Suspense>
      </main>
    </>
  );
};

export default App;
