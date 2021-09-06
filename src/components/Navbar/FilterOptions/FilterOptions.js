import { useContext } from "react";
import { StateContext, DispatchContext } from "../../BookContext";

import "./FilterOptions.scss";

const FilterOptions = () => {
  const dispatch = useContext(DispatchContext);
  const { state } = useContext(StateContext);

  const { booksFilter } = state;

  return (
    <div className="box">
      <select
        value={booksFilter}
        onChange={(e) =>
          dispatch({ type: "booksFilter", payload: e.target.value })
        }
      >
        <option value="">All</option>
        <option value="free-ebooks">Free</option>
        <option value="paid-ebooks">Paid</option>
      </select>
    </div>
  );
};

export default FilterOptions;
