import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Favorite from "./components/Favorite";
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/fav">
              <Favorite />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
