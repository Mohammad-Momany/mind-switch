import {useContext}  from 'react'
import { InputContext } from '../BookContext';
import Mind_switch_logo  from '../images/logo_transparent.png';

import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './Navbar.scss'

const Navbar = () =>{

const {search,setSearch, getSearch,navBackground,Options} = useContext(InputContext)


return (

  <nav className={`nav ${navBackground && 'nav--background'}`} >
    
    <div className="nav__logo__countiner">
      <img src={Mind_switch_logo} alt="Mind_switch_logo" className="nav__logo__countiner--image"/>
    </div>

    <form onSubmit={getSearch} className="nav__search-form">

      <input onChange={(e) => setSearch(e.target.value)}
        placeholder="Book, Author" 
        className="nav__search-form--input" type="text"
        required 
        value={search}
        autoComplete="false"
      />

      <button title="Search" type="submit" className="nav__search-form--button ">
      <i className="fas fa-search"></i>
      </button>
    </form>

    <Options/>
  </nav>
    )
}


export default Navbar

