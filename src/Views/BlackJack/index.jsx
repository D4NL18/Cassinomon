import React, { useState } from "react";
import Game from "../../Components/BlackJack";
import Header from "../../Components/Header/Header";
import PokeballMenu from "../../Components/PokeballMenu";
import "./styles.css";

const BlackJack = () => {
    const [balance, setBalance] = useState(100);
    return (
        <div className="entire-page-blackjack">
            <Header color="#3CB2FF"/>
            <div className="game-div">
                <Game balance={balance} setBalance={setBalance} />
                <PokeballMenu />
            </div>
        </div>
    );
};

export default BlackJack;