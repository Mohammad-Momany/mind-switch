export const booksReducer = (draft, action) => {
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
};

export const initialState = {
  navBackground: false,
  booksFilter: "",
  books: [],
  search: "",
  query: "React",
  isLoading: false,
};
