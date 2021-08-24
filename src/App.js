import React, {useContext} from 'react';

import Books  from './components/Books/Books';
import Navbar  from './components/Navbar/Navbar';
import {BookContext}  from './components/BookContext';

import './App.scss';

const App = () => {

  
  const [result,setResult] = useContext(BookContext);
  
    return (
    
      <div className="app">
        
        <Navbar/>

        <main className="book-container">
          {result.map(({volumeInfo, id}) => (
             <Books key={id} {...volumeInfo}  />
          ))}
        </main>

      </div>
      
      

);
}

export default App;
