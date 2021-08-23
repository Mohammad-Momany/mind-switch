import React from 'react'

import photoNotFound from "../images/photoNotFound.png"
import './Book.css';

const Books = ({data}) => {
    const {title, previewLink, imageLinks, description, categories, authors, pageCount, publishedDate, publisher} = data;
    return (
    <div className="book">
        <div className="image-contant">
            <a target="_blank" href={previewLink} >
                <img src={imageLinks?.thumbnail || photoNotFound} alt={title} className="book-img" />
            </a>
        </div>

    <div className="book-info">
            <h3>{title}</h3>
    <div className="book-info-header">
        
    <address className="author">{authors? authors[0]: null}</address>
    <span className="pageCount">{pageCount}</span>
    </div>
    <div className="publisher">{publisher}</div>

    </div>
    <div className="book-overview">
        <h3>Overview</h3>
        <p>{description}</p>
    </div>
     </div>
)
}

export default Books;