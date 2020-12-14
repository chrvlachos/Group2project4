import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
