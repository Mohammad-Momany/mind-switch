import { useEffect, createContext } from "react";
import { useImmerReducer } from "use-immer";
import axios from "axios";

export const StateContext = createContext();
export const DispatchContext = createContext();

function bookInformations(draft, action) {
  switch (action.type) {
    case "isLoading":
      return void (draft.isLoading = action.payload);

    case "showNav":
      return void (draft.navBackground = action.payload);

    case "booksFilter":
      return void (draft.booksFilter = action.payload);

    case "booksData":
      return void (draft.books = action.payload);

    case "inputValue":
      return void (draft.search = action.payload);

    case "bookSearching":
      return void (draft.query = action.payload);

    default:
      break;
  }
}

const initialState = {
  navBackground: false,
  booksFilter: "",
  books: [],
  search: "",
  query: "React",
  isLoading: false,
};

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(bookInformations, initialState);

  const { booksFilter, search, query } = state;

  const APP_KEY = "AIzaSyBswzUbSbQ-eroJXoLtzRlAG8LWIMIr0k8";
  const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}${ booksFilter && `&filter=${booksFilter}`}&key=${APP_KEY}&maxResults=20`;

  const onScroll = () =>
    window.addEventListener("scroll", () =>
      dispatch({ type: "showNav", payload: window.scrollY > 126 })
    );

  const getBooks = async () => {
    dispatch({ type: "isLoading", payload: false });
    const { data } = await axios.get(URL);
    dispatch({ type: "isLoading", payload: true });
    dispatch({ type: "booksData", payload: data.items });
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
