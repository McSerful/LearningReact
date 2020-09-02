import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import Search from "./Views/Search";
import MyAccount from "./Views/MyAccount";
import Login from "./Views/Login";
import Support from "./Views/Support";
import Logout from "./Views/Logout";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/support">
            <Support />
          </Route>

          <Route path="/my-account">
            <MyAccount />
          </Route>

          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
