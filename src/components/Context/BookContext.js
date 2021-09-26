import { useEffect, createContext, useMemo } from "react";

import { useImmerReducer } from "use-immer";
import axios from "axios";

import { booksReducer, initialState } from "./booksReducer";
import ErrorBoundary from "../../ErrorBoundary";
import url from "./url";

export const StateContext = createContext();
export const DispatchContext = createContext();

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(booksReducer, initialState);
  const { booksFilter, search, query } = state;

  const URL = useMemo(() => url(query, booksFilter), [query, booksFilter]);

  const onScroll = () =>
    window.addEventListener("scroll", () =>
      dispatch({ type: "showNav", payload: window.scrollY > 126 })
    );

  const getBooks = async () => {
    try {
      const { data } = await axios.get(URL);

      if (!data.items) throw "Book Not Found";

      dispatch({ type: "booksData", payload: data.items });
    } catch (error) {
      dispatch({ type: "error", payload: error });
    }
  };
  const getSearch = (e) => {
    e.preventDefault();
    dispatch({ type: "bookSearching", payload: search });
    dispatch({ type: "inputValue", payload: "" });
  };

  useEffect(() => {
    onScroll();
    getBooks();
  }, [URL]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={{ state, getSearch, ErrorBoundary }}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};
