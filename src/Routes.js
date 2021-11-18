import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Login from './Views/Login/login'
import Roulette from './Views/Roulette/Roulette'
import Profile from './Views/Perfil/Profile'
import BlackJack from './Views/BlackJack'

function Router() {
    return (
      <div>
    <BrowserRouter>
        <Switch>
            {/* <Route exact path="/" component={Login}></Route> */}
            <Route exact path="/" component={Profile}></Route>
            <Route exact path="/Roulette" component={Roulette}></Route>
            <Route exact path="/blackjack" component={BlackJack}></Route>
        </Switch>
    </BrowserRouter>
      </div>
    );
  }
  
  export default Router;
  