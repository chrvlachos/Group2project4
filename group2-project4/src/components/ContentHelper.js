import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import Card from "./Card";
import Header from "./Header";
import "./ContentHelper.css";

function ContentHelper() {
  const [maxResults, setMaxResults] = useState(40);
  const [startIndex, setStartIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState("");
  const [cards, setCards] = useState([]);

  const fetchData = (add) => {
    setLoading(true);

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&langRestrict=en&maxResults=${maxResults}&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        console.log(res.data.items);

        setCards(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  const handleSubmitKeyDown = ({ keyCode }) => {
    if (keyCode === 13) {
      setStartIndex(1);
      fetchData(false);
    }
  };
  const handleSubmit = () => {
    setStartIndex(1);
    fetchData(false);
  };

  const handleLoadMore = () => {
    //increase start index
    setStartIndex((ind) => ind + 10);
    fetchData(true);
  };

  return (
    <>
      <Header />
      <div className="content-helper__container">
        <div className="content-helper">
          <h1 className="content-h1">Google Books</h1>
          <div className="search-container">
            <TextField
              id="outlined-search"
              label="Search field"
              type="search"
              variant="outlined"
              className="search-field"
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSubmitKeyDown}
              value={query}
            />
            <button
              //   aria-label="delete"
              //   size="large"
              className={"search-button"}
              onClick={handleSubmit}
            >
              <SearchOutlinedIcon />
            </button>
          </div>
          <div className="card-container">
            {cards &&
              cards.map((card, idx) => {
                // console.log(idx, card.volumeInfo);
                return (
                  <Card
                    card={card}
                    image={
                      card.volumeInfo.imageLinks &&
                      card.volumeInfo.imageLinks.smallThumbnail
                    }
                  />
                );
              })}
            {cards.length > 0 ? (
              <button onClick={handleLoadMore}>Load More...</button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentHelper;
