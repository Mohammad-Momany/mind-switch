import { useContext } from "react";

import PureBooks from "../Books/Books";

import { StateContext } from "../Context/BookContext";
import "./BooksContainer.scss";
const BooksContainer = () => {
  const {
    state: { books, error },
    ErrorBoundary,
  } = useContext(StateContext);

  return (
    <ErrorBoundary fallback={error}>
      {books.map(({ volumeInfo, id }) => (
        <PureBooks key={id} {...volumeInfo} />
      ))}
    </ErrorBoundary>
  );
};

export default BooksContainer;
