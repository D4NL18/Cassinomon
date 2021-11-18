import React from "react";
import Game from "../../components/BlackJack";
import "./styles.css";

const BlackJack = () => {
    return (
        <div className="entire-page">
            <div className="navbar" />
            <div className="game-div">
                <Game />
            </div>
        </div>
    );
};

export default BlackJack;