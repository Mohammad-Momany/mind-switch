import {useState, useEffect, createContext,} from 'react';
import axios  from 'axios';


export const BookContext = createContext();
export const InputContext = createContext();

export const BookProvider = ({children}) => {
  
  const APP_KEY = "AIzaSyBswzUbSbQ-eroJXoLtzRlAG8LWIMIr0k8";


  const [book, setBook] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("React");


  const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${APP_KEY}&maxResults=16`;


  const getBooks = async () => {

    if (!book) return setQuery("Javascript");
  
    const { data } = await axios.get(URL);
  
    setBook(data.items);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };


  useEffect(() => {
  
    getBooks()
  
  }, [query])


    return (
        <BookContext.Provider value={[book, setBook] } >
        <InputContext.Provider value={{search, setSearch,getSearch}} >
        
            {children}
        
        </InputContext.Provider>
        </BookContext.Provider>
    )
}