import React from "react";
import "./InfoContainer.css";

/*
book.fields.bookInfo.title - displays title
book.fields.bookInfo.thumbnail - displays thumbnail
book.fields.bookInfo.authors - array of authors
book.fields.bookInfo.categories - can display categorie (like science fiction, ...) - is not provided all the time
book.fields.bookInfo.date - displays date of publish
book.fields.bookInfo.pages - displays pages

book.fields.review - displays our review
book.fields.rating - number from 1-5 - we can display this amount of stars
*/

function InfoContainer({ book, setShowInfos }) {
  
  return (
      <div className="info-container">
      
         <p>
           <div className="align-title">
               <h2 className="Book-title">{book.fields.bookInfo.title}</h2> 
               <button onClick={()=> setShowInfos(-1)} className="Closing-button">Close</button>
           </div>
            {  /* <h2>{book.fields.bookInfo.thumbnail}</h2>  */}
            <hr className="hr"/>
            <br/>
            <h2 className="info">Author: {book.fields.bookInfo.authors}</h2>
            <h2 className="info">Category: {book.fields.bookInfo.categories}</h2>  {/* (like science fiction, ...) - is not provided all the time*/}
            <h2 className="info">Date: {book.fields.bookInfo.date}</h2> {/* date of publish */}
            <h2 className="info">Pages:{book.fields.bookInfo.pages}</h2>
            <h2 className="info">Rating:{book.fields.rating}</h2>
            <h2 className="info">Review: {book.fields.review.content[0].content[0].value} </h2>
        </p>
      </div>
  );
}

export default InfoContainer;
