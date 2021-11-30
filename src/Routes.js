import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Roulette from './Views/Roulette/Roulette'
import Profile from './Views/Perfil/Profile'
import BlackJack from './Views/BlackJack'
import Inventory from './Views/Inventory'
import Dice from './Views/Dice/Dice'
import Home from './Views/Home/Home'
import Login from './Views/Login/Login'
import Register from './Views/Registro/Registro'

function Router() {
    return (
      <div>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/Login" component={Login}></Route>
            <Route exact path="/Blackjack" component={BlackJack}></Route>
            <Route exact path="/Inventory" component={Inventory}></Route>
            <Route exact path="/Registro" component={Register}></Route>
            <Route exact path="/Dice" component={Dice}></Route>
            <Route exact path="/Roulette" component={Roulette}></Route>
            <Route exact path="/Profile" component={Profile}></Route>
        </Switch>
    </BrowserRouter>
      </div>
    );
  }
  
  export default Router;
  