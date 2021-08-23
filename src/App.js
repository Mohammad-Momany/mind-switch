import React,{useState,useEffect}  from 'react'

import axios  from 'axios'
import { Input } from '@material-ui/core';

import Books  from './components/Books'

import './App.css';

const App = () => {


const APP_KEY = "AIzaSyBswzUbSbQ-eroJXoLtzRlAG8LWIMIr0k8";
const [result,setResult] = useState([]);
const [book,setBook] = useState("Javascript");
const URL = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${APP_KEY}&maxResults=16`

useEffect(() => {
  getBooks()
}, [book])
const getBooks = async () => {
  
  if (!book) return setBook("Javascript")
  const { data } = await axios.get(URL);
  setResult(data.items);
};


return (
  <div className="app">
    <header>

    <h1>Read book &#8594; opinion Switch </h1>
    <Input onChange={(e) => setBook(e.target.value)}
        placeholder="Book, Author" 
        className="search-box" type="text"
        inputProps={{ 'aria-label': 'description' }} 
        required 
      />

    </header>
   <div className="book-container">
     
   {result.map(({volumeInfo, id}) => (
     <Books key={id} data={volumeInfo} />
   ))}
   </div>

  </div>
);
}

export default App;
