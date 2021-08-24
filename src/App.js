import {useContext}  from 'react'

import Books  from './components/Books/Books'
import Navbar  from './components/Navbar/Navbar'
import {BookContext}  from './components/BookContext'

import './App.scss';

const App = () => {

const [book, setBook] = useContext(BookContext)

    // const APP_KEY = "AIzaSyBswzUbSbQ-eroJXoLtzRlAG8LWIMIr0k8";


    // const [book, setBook] = useState([]);
    // const [search, setSearch] = useState("");
    // const [query, setQuery] = useState("React");


    // const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${APP_KEY}&maxResults=16`;


    // const getBooks = async () => {

    //   if (!book) return setQuery("Javascript");
    
    //   const { data } = await axios.get(URL);
    
    //   setBook(data.items);
    // };

    // const getSearch = (e) => {
    //   e.preventDefault();
    //   setQuery(search);
    //   setSearch("");
    // };


    // useEffect(() => {
    
    //   getBooks()
    
    // }, [query])


    return (
    
      <div className="app">
      
        {/* <nav>
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
        </nav> */}
        <Navbar/>
        <main className="book__container">

          {book.map(({volumeInfo, id}) => (
             <Books key={id} {...volumeInfo}  />
          ))}
        </main>

      </div>
);
}

export default App;
