import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Login from './Views/Login/login'
import Roulette from './Views/Roulette/Roulette'

function Router() {
    return (
      <div>
    <BrowserRouter>
        <Switch>
            {/* <Route exact path="/" component={Login}></Route> */}
            <Route exact path="/" component={Roulette}></Route>
        </Switch>
    </BrowserRouter>
      </div>
    );
  }
  
  export default Router;
  