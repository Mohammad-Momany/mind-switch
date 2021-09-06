import { useContext } from "react";
import { StateContext, DispatchContext } from "../BookContext";

import "../../../node_modules/font-awesome/css/font-awesome.min.css";

import Mind_switch_logo from "../images/logo_transparent.png";
import "./Navbar.scss";

const Navbar = () => {
  const dispatch = useContext(DispatchContext);
  const { state, getSearch } = useContext(StateContext);

  const { search, navBackground, booksFilter } = state;

  return (
    <nav className={`nav ${navBackground && "nav--background"}`}>
      <div className="nav__logo__countiner">
        <img
          src={Mind_switch_logo}
          alt="Mind_switch_logo"
          className="nav__logo__countiner--image"
        />
      </div>

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
    </nav>
  );
};

export default Navbar;
