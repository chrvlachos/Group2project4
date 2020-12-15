import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import Card from "./Card";
import Header from "./Header";
import "./ContentHelper.css";

function ContentHelper() {
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState("");
  const [cards, setCards] = useState([]);

  const fetchData = (add) => {
    setLoading(true);

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&langRestrict=en&maxResults=${maxResults}&startIndex=${startIndex}&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        if (startIndex >= res.data.totalItems || startIndex < 1) {
          alert(
            `startIndex must be between 1 and ${res.data.totalItems} and is ${startIndex}`
          );
        } else {
          if (res.data.items.length > 0) {
            if (add) {
              setCards([...cards, ...res.data.items]);
            } else {
              setCards(res.data.items);
            }
            setLoading(false);
            //console.log(cards);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
                console.log(cards, idx, card);
                return <Card card={card} />;
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
