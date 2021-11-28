import React, { useState } from "react";
import Game from "../../components/BlackJack";
import PokeballMenu from "../../components/PokeballMenu";
import "./styles.css";

const BlackJack = () => {
    const [balance, setBalance] = useState(100);
    return (
        <div className="entire-page">
            <div className="navbar" />
            <div className="game-div">
                <Game balance={balance} setBalance={setBalance} />
                <PokeballMenu />
            </div>
        </div>
    );
};

export default BlackJack;