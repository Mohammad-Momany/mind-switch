import { useContext } from "react";
import { StateContext } from "../BookContext";

import Logo from "./Logo/Logo";
import Form from "./Form/Form";
import FilterOptions from "./FilterOptions/FilterOptions";

import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "./Navbar.scss";

const Navbar = () => {
  const { state } = useContext(StateContext);

  const { navBackground } = state;

  return (
    <nav className={`nav ${navBackground && "nav--background"}`}>
      <Logo></Logo>
      <Form></Form>
      <FilterOptions></FilterOptions>
    </nav>
  );
};

export default Navbar;
