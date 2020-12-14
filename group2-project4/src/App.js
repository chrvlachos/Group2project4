import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Main from './components/Main';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Main/>
    </div>
    
  );
}

export default App;
