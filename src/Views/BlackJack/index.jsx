import React, { useState } from "react";
import Game from "../../components/BlackJack";
import Header from "../../components/Header/Header";
import PokeballMenu from "../../components/PokeballMenu";
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