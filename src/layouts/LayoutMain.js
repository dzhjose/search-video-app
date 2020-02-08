import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Home from "../pages/home";
import DetailMovie from "../pages/movies/DetailMovie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class LayoutMain extends Component {
  render() {
    return (
      <Router>
        <div id="main">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movies/:id" component={DetailMovie} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default LayoutMain;
