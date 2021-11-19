import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Login from './Views/Login/login'
import Roulette from './Views/Roulette/Roulette'
import Profile from './Views/Perfil/Profile'
import Dice from './Views/Dice/Dice'

function Router() {
    return (
      <div>
    <BrowserRouter>
        <Switch>
            {/* <Route exact path="/" component={Login}></Route> */}
            <Route exact path="/" component={Dice}></Route>
            <Route exact path="/Roulette" component={Roulette}></Route>
            <Route exact path="/Profile" component={Profile}></Route>
        </Switch>
    </BrowserRouter>
      </div>
    );
  }
  
  export default Router;
  