import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./containers/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Store from './pages/Store/Store';
import Contact from './pages/Contact/Contact';
import Details from './pages/UserDetails/UserDetails';
import AllWorks from './pages/AllWorks/AllWorks';
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/store">
        <Store />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/about">
        <Details />
      </Route>
      <Route exact path="/allworks">
        <AllWorks />
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}