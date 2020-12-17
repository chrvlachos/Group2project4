import React, { useState } from "react";
import "./Card.css";

function Card({ card, image }) {
  const [copySuccess, setCopySuccess] = useState("");

  const createObject = () => {
    return {
      title: card.volumeInfo.title,
      authors: card.volumeInfo.authors,
      categories: card.volumeInfo.categories,
      pages: card.volumeInfo.pageCount,
      date: card.volumeInfo.publishedDate,
      thumbnail: card.volumeInfo.imageLinks.smallThumbnail,
    };
  };

  const copyToClipBoard = async () => {
    const objString = JSON.stringify(createObject());
    try {
      await navigator.clipboard.writeText(objString);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <div className="Card__card-container">
      <p>{card.volumeInfo.title && card.volumeInfo.title}</p>
      <p>
        {card.volumeInfo.authors
          ? card.volumeInfo.authors.length > 1
            ? card.volumeInfo.authors.join(" & ")
            : card.volumeInfo.authors
          : "No Author"}
      </p>
      <p>
        Categories:
        {card.volumeInfo.categories
          ? card.volumeInfo.categories
          : "No Categories"}
      </p>
      <p>
        Pages:
        {card.volumeInfo.pageCount
          ? card.volumeInfo.pageCount
          : "No Page Count"}
      </p>{" "}
      <p>
        Date:
        {card.volumeInfo.publishedDate
          ? card.volumeInfo.publishedDate
          : "No Date"}
      </p>
      <a href={card.volumeInfo.previewLink} target="_blank">
        Preview
      </a>
      <img
        src={image && image}
        alt="Thumbnail"
      />
      <button onClick={copyToClipBoard}>Copy Object</button>
      {copySuccess}
    </div>
  );
}

export default Card;
