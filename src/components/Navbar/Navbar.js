import React,{useContext} from 'react'
import {InputContext}  from '../BookContext'

import { Input } from '@material-ui/core';

import './Navbar.scss'

const Navbar = () =>{

const [book,setBook] =  useContext(InputContext)

return (

        <header>

        <h1>Read book &#8594; opinion Switch </h1>

        <Input onChange={(e) => setBook(e.target.value)}
          placeholder="Book, Author" 
          className="search-box" type="text"
          inputProps={{ 'aria-label': 'description' }} 
          required 
          autoComplete="false"
        />
      </header>
    )
}


export default Navbar