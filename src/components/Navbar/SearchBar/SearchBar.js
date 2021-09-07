import "./SearchBar.scss";

const SearchBar = ({ dispatch, getSearch, search }) => {
  return (
    <form onSubmit={getSearch} className="nav__search-form">
      <input
        onChange={(e) =>
          dispatch({ type: "inputValue", payload: e.target.value })
        }
        placeholder="Book, Author"
        className="nav__search-form--input"
        type="text"
        required
        value={search}
        autoComplete="false"
      />

      <button
        title="Search"
        type="submit"
        className="nav__search-form--button "
      >
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
