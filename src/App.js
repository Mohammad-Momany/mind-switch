import React,{useState,useEffect}  from 'react'

import axios  from 'axios'
import { Input } from '@material-ui/core';
import Books  from './components/Books/Books'

import './App.scss';

const App = () => {

    const APP_KEY = "AIzaSyBswzUbSbQ-eroJXoLtzRlAG8LWIMIr0k8";
    const [result,setResult] = useState([]);
    const [book,setBook] = useState("React");
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${APP_KEY}&maxResults=16`;


    const getBooks = async () => {

      if (!book) return setBook("Javascript");
    
      const { data } = await axios.get(URL);
    
      setResult(data.items);
    };


    useEffect(() => {
    
      getBooks()
    
    }, [book])


    return (
    
      <div className="app">
      
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

        <main className="book-container">

          {result.map(({volumeInfo, id}) => (
             <Books key={id} {...volumeInfo}  />
          ))}
        </main>

      </div>
);
}

export default App;
