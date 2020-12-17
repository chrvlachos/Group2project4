import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import "./LandingPage.css";
import Main from './Main';

function LandingPage() {
  
  return (
  <div className="container">
    <div className="title">
    <h1>Welcome to Group 2's library</h1>
    </div>
    <ul class="slide-right">
    <li><h2 class="science">Science</h2></li>
    <li><h2 class="technology">Technology</h2></li>
    <li><h2 class="business">Business</h2></li>
    <li><h2 class="self">Self-improvement</h2></li>
    <li><h2 class="slide-right economics">Economics</h2></li>
    <li><h2 class="slide-right biology">Biology</h2></li>
    <li><h2 class="slide-right coding">Coding</h2></li>
    </ul>
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
    <NavLink to="/home"><button className="enter-button">Enter</button></NavLink>
  </div>
  )
}

export default LandingPage;
