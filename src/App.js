import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Favorite from "./components/Favorite";
import Home from "./components/Home";

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
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
