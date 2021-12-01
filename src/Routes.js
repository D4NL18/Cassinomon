import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './Views/Login/login'

function Router() {
    return (
      <div>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}></Route>
        </Switch>
    </BrowserRouter>
      </div>
    );
  }
  
  export default Router;
  