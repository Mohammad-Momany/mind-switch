import {useContext}  from 'react'

import { Input } from '@material-ui/core';

import { InputContext } from '../BookContext';

import './Navbar.scss'


const Navbar = () =>{

const {search,setSearch, getSearch} = useContext(InputContext)

return (

  <nav>
    <h1>Read book &#8594; opinion Switch </h1>
    <form onSubmit={getSearch} className="search-form">
    <Input onChange={(e) => setSearch(e.target.value)}
      placeholder="Book, Author" 
      className="search-box" type="text"
      inputProps={{ 'aria-label': 'description' }} 
      required 
      value={search}
      autoComplete="false"
    />
    <button type="submit">search</button>
    </form>
  </nav>

    )
}


export default Navbar