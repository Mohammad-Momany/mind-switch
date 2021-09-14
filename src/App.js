import { useContext } from "react";

import PureBooks from "./components/Books/Books";
import Loading from "./components/LoadingAnimations/Loading";
import Navbar from "./components/Navbar/Navbar";
import { StateContext } from "./components/Context/BookContext";

import "./App.scss";

const App = () => {

  const { state:{ books, isLoading } } = useContext(StateContext);

  return (
    <div className="app">
      <Navbar />

      <main className="book__container">
        {isLoading ? (
          books.map(({ volumeInfo, id }) => (
            <PureBooks key={id} {...volumeInfo} />
          ))
        ) : (
          <Loading />
        )}
      </main>
    </div>
  );
};

export default App;
