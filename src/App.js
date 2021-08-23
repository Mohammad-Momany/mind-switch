import React,{useState,useEffect}  from 'react'
import axios  from 'axios'
import './App.css';

const  App=()=> {


const APP_KEY = "AIzaSyBswzUbSbQ-eroJXoLtzRlAG8LWIMIr0k8";
const [result,setResult] = useState([]);
const [book,setBook] = useState("Javascript");
const URL = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${APP_KEY}&maxResults=16`




  return (
    <div className="app">
     Google Api Books
    </div>
  );
}

export default App;
