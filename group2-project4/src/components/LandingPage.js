import React from "react";
import { NavLink } from 'react-router-dom';
import "./LandingPage.css";


function LandingPage() {
  
  return (
  <div className="container">
    <div className="title">
    <h1>Welcome to Group 2's library</h1>
    </div>
    <ul className="slide-right">
    <li><h2 className="science">Science</h2></li>
    <li><h2 className="technology">Technology</h2></li>
    <li><h2 className="business">Business</h2></li>
    <li><h2 className="self">Self-improvement</h2></li>
    <li><h2 className="slide-right economics">Economics</h2></li>
    <li><h2 className="slide-right biology">Biology</h2></li>
    <li><h2 className="slide-right coding">Coding</h2></li>
    </ul>
    <div className="bookshelf_wrapper">
      <ul className="books_list">
        <li className="book_item first"></li>
        <li className="book_item second"></li>
        <li className="book_item third"></li>
        <li className="book_item fourth"></li>
        <li className="book_item fifth"></li>
        <li className="book_item sixth"></li>
     </ul>
      <div className="shelf"></div>
    </div>
    <NavLink to="/home"><button className="enter-button">Enter</button></NavLink>
  </div>
  )
}

export default LandingPage;
