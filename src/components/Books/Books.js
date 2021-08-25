import {useEffect}  from 'react';

import Aos from "aos";
import "aos/dist/aos.css";

import photoNotFound from "../images/photoNotFound.png"
import './Book.scss';

const Books = ({title, previewLink, imageLinks, description, authors, pageCount, publisher}) => {
    

    useEffect(() => {
        
        Aos.init({ duration: 1000, offset:50, once:true});
    
    }, []);


    return (
        <div className='book' data-aos="fade-up" data-aos-easing="ease-in-out-back" data-aos-once='false'>

            <div className="book__image__contant" data-aos="zoom-in" data-aos-duration='1500'>

                <a target="_blank" href={previewLink} className="book__image__contant--link">
                    <img 
                        src={imageLinks?.thumbnail || photoNotFound} 
                        alt={title} 
                        className="book__image__contant--img" 
                    />
                </a>

            </div>

            <div className="book__info ">

                <h3 className="book__info--title" data-aos="fade-right" data-aos-duration="1800">{title}</h3>
                <address className="book__info--author">Author: {authors? authors[0]: "unknown"}</address>
                <span className="book__info--pageCount">{pageCount}</span>
                
                <div className="book__info--publisher">
                    Publisher: <br/>
                        {publisher?  
                            <span style={{marginLeft:'5px'}}>{publisher} </span> :"unknown"
                        }
                </div>
                
            </div>
            
            <div className="book__overview">
                <h3 className="book__overview--header">Overview</h3>
                <p>{description}</p>
            </div>
     </div>

)
}

export default Books;