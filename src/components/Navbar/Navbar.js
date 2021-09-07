import { useContext } from "react";
import { DispatchContext, StateContext } from "../Context/BookContext";

import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import FilterOptions from "./FilterOptions/FilterOptions";

import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "./Navbar.scss";

const Navbar = () => {
  const dispatch = useContext(DispatchContext);
  const {
    state: { navBackground, search, booksFilter },
    getSearch,
  } = useContext(StateContext);

  return (
    <nav className={`nav ${navBackground && "nav--background"}`}>
      <Logo></Logo>
      <SearchBar
        dispatch={dispatch}
        search={search}
        getSearch={getSearch}
      ></SearchBar>
      <FilterOptions
        dispatch={dispatch}
        booksFilter={booksFilter}
      ></FilterOptions>
    </nav>
  );
};

export default Navbar;
