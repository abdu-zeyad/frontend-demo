import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Form from "../pages/Form";
import "./Main.css";

export class Main extends Component {
  render() {
    return (
      <div className="main-root">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/form">
              <Form />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;
