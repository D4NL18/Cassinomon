import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coinflip from "./Views/Coinflip/Coinflip";
import Loja from "./Views/Loja/Loja";
import Roulette from './Views/Roulette/Roulette';
import Profile from './Views/Perfil/Profile';
import BlackJack from './Views/BlackJack';
import Inventory from './Views/Inventory';
import Dice from './Views/Dice/Dice';
import Home from './Views/Home/Home';
import Login from './Views/Login/login';
import Register from './Views/Registro/Registro';

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
            <Route exact path = "/coinflip" component={Coinflip}></Route>
            <Route exact path = "/loja" component={Loja}></Route>
        </Switch>
    </BrowserRouter>
      </div>
    );
  }
  
  export default Router;
  