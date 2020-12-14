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
    <div class="bookshelf_wrapper">
     <ul class="books_list">
       <li class="book_item first"></li>
       <li class="book_item second"></li>
       <li class="book_item third"></li>
       <li class="book_item fourth"></li>
       <li class="book_item fifth"></li>
       <li class="book_item sixth"></li>
     </ul>
     <div class="shelf"></div>
    </div>
    <NavLink to="/"><button className="enter-button">Enter</button></NavLink>
  </div>
  </Router>
  )
}

export default LandingPage;
