import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "../components/Error";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import Mymint from "../components/Mymint";

//
import Mint from "../Mint";

function routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/mint">
          <Mint />
        </Route>
        <Route path="/mymint">
          <Mymint />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default routes;
