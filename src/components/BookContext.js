import {useState, useEffect, createContext} from 'react';
import axios  from 'axios';


export const BookContext = createContext();
export const InputContext = createContext();

export const BookProvider = ({children}) => {
  
  const APP_KEY = "AIzaSyBswzUbSbQ-eroJXoLtzRlAG8LWIMIr0k8";
  const [navBackground,setNavBackground] = useState(false)
  const [bookFilter,setBookFilter] = useState("")
  const [book, setBook] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("React");
  const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}${bookFilter && `&filter=${bookFilter}`}&key=${APP_KEY}&maxResults=20`;

  
  const Options = ()=> {
    return (  
      <div className="box">
        <select value={bookFilter} onChange= {(e)=> setBookFilter(e.target.value)}>
            <option value="">All</option>
            <option value="free-ebooks">Free</option>
            <option value="paid-ebooks">Paid</option>
        </select>
     </div>)
  
}
  

  const controllNavabr = () => { 

    window.scrollY > 126 ? setNavBackground(true) : setNavBackground(false);

  }

  const getBooks = async () => {

    if (!book) return setQuery("React");
  
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
    window.addEventListener('scroll',controllNavabr)  
    
    return () => {
      window.removeEventListener('scroll',controllNavabr) 
    }
  }, [query,bookFilter])




    return (
        <BookContext.Provider value={book} >
        <InputContext.Provider value={{search, setSearch,getSearch,navBackground, Options}} >
        
            {children}
        
        </InputContext.Provider>
        </BookContext.Provider>
    )
}