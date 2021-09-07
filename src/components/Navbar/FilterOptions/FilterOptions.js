import Options from "./Options/Options";

import "./FilterOptions.scss";

const FilterOptions = ({ dispatch, booksFilter }) => {
  return (
    <div className="books-filter">
      <select
        value={booksFilter}
        onChange={(e) =>
          dispatch({ type: "booksFilter", payload: e.target.value })
        }
      >
        <Options />
      </select>
    </div>
  );
};

export default FilterOptions;
