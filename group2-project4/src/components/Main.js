import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./Main.css";
import InfoContainer from "./InfoContainer";
import axios from "axios";

export default function Main() {
  const [books, setBooks] = useState([]);
  const [showInfos, setShowInfos] = useState(-1); //index of item in contentfuls array, -1 -> disable Infocontainer

  //get Data from API
  useEffect(() => {
  axios.get('http://localhost:5000/books')
       .then(res => { 
                setBooks(res.data.data);
             })
             .catch(err => 
              {console.log(err)})
     },[]);

  return (
    <>
      <Header />
      <div className="main-container">
          <div className="logo">
            <b>
              G<span>ro</span>up<span>4</span>
              <span> </span>Lib<span>ra</span>ry
            </b>
          </div>
          <div className="book-container">
            <ul className="list-inline">
               {books.map((book, index) => (
                <li key={book._id} className="book"><img onClick={() => setShowInfos(index)} src={book.imageUrl} alt="book cover"/></li>
              ))}
              {/* {books.map((book, idx) => {
                return (
                  <li className="book">
                    <img
                      onClick={() => setShowInfos(idx)}
                      src={book.imageUrl}
                    />
                  </li>
                );
              })} */}
              {showInfos > -1 ? (
                <InfoContainer book={books[showInfos]} setShowInfos={setShowInfos}/>
              ) : (
                ""
              )}
            </ul>
          </div>
      </div>
    </>
  );
}
