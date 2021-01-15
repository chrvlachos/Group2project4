import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/home">
            <Main />
          </Route>
          {/* <Route path="/content-helper">
            
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
