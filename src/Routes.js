import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coinflip from "./Views/Coinflip/index";
import Loja from "./Views/Loja/index";
import Login from './Views/Login/login'

function Router() {
    return (
      <div>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path = "/coinflip" component={Coinflip}></Route>
            <Route exact path = "/loja" component={Loja}></Route>
        </Switch>
    </BrowserRouter>
      </div>
    );
  }
  
  export default Router;
  