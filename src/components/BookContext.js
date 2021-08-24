import React,{useState,useEffect,createContext} from 'react';
import axios  from 'axios';


export const BookContext = createContext();
export const InputContext = createContext();

export const BookProvider = props => {
  
    const APP_KEY = "AIzaSyBswzUbSbQ-eroJXoLtzRlAG8LWIMIr0k8";
    const [result,setResult] = useState([]);
    const [book,setBook] = useState("Javascript");
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
        <BookContext.Provider value={[result,setResult]} >
        <InputContext.Provider value={[book,setBook]}  >
            {props.children}
        </InputContext.Provider>
        </BookContext.Provider>
    )
}