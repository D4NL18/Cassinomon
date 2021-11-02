import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DiceGame from "./Views/DiceGame";
import Login from './Views/Login/login'

function Router() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/dice" component={DiceGame}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Router;
