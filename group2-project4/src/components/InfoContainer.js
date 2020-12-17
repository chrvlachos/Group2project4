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

function InfoContainer({ book }) {
  return (
    <div className="info-container__container">
      <div className="info-container">
        {book.fields.bookInfo.title}
        <img src={book.fields.bookInfo.thumbnail} />
        <h2>Review</h2>
        <div>REVIEW TEXT</div>
      </div>
    </div>
  );
}

export default InfoContainer;
