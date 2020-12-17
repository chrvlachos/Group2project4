import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Main from "./components/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContentHelper from "./components/ContentHelper";

function App() {
  return (
    <Router>
      <div className="App">
        <switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/home">
            <Main />
          </Route>
          <Route path="/content-helper">
            <ContentHelper />
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
