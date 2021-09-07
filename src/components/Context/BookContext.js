import { useEffect, createContext } from "react";

import { useImmerReducer } from "use-immer";
import axios from "axios";

import { booksReducer, initialState } from "./booksReducer";
import url from "./url";

export const StateContext = createContext();
export const DispatchContext = createContext();

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(booksReducer, initialState);
  const { booksFilter, search, query } = state;

  const URL = url(query, booksFilter);

  const onScroll = () =>
    window.addEventListener("scroll", () =>
      dispatch({ type: "showNav", payload: window.scrollY > 126 })
    );

  const getBooks = async () => {
    dispatch({ type: "isLoading", payload: false });
    const { data: { items } } = await axios.get(URL);
    dispatch({ type: "isLoading", payload: true });
    dispatch({ type: "booksData", payload: items });
  };

  const getSearch = (e) => {
    e.preventDefault();
    dispatch({ type: "bookSearching", payload: search });
    dispatch({ type: "inputValue", payload: "" });
  };

  useEffect(() => {
    getBooks();
    onScroll();
  }, [query, booksFilter]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={{ state, getSearch }}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};
