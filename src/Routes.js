import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Login from './Views/Login/login'
import Roulette from './Views/Roulette/Roulette'
import Profile from './Views/Perfil/Profile'

function Router() {
    return (
      <div>
    <BrowserRouter>
        <Switch>
            {/* <Route exact path="/" component={Login}></Route> */}
            <Route exact path="/" component={Profile}></Route>
            <Route exact path="/Roulette" component={Roulette}></Route>
        </Switch>
    </BrowserRouter>
      </div>
    );
  }
  
  export default Router;
  