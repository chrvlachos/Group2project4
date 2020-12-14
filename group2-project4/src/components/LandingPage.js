import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import "./LandingPage.css";


function LandingPage() {
  
  return (
  <Router>
  <div className="container">
    <div className="title">
    <h1>Welcome to Group 2's library</h1>
    </div>
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
    <NavLink to="/main"><button className="enter-button">Enter</button></NavLink>
  </div>
  </Router>
  )
}

export default LandingPage;
