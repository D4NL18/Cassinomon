import React from 'react'
import './Roulette.css'
import Button from '@mui/material/Button';

export default function Roulette() {
    return (
        <>
            <div className="entire-page">
                <div className="Nav" />
                <div className="big-box">
                    <div className="roulette-box">
                        <div className="roulette" />
                        <div className="boxes-roulette">
                        <div className="bet-box-roulette">
                            <div className="bet-box-roulette-text">
                                Quanto deseja apostar?
                            </div>
                            <input className="bet-box-roulette-input" />
                            <Button className="bet-box-roulette-button"><p className="bet-bot-roulette-button-text">Start</p></Button>
                        </div>
                        <div className="history-box-roulette">

                        </div>
                    </div>
                </div>
                <div className="friends-list" />
            </div>


        </div>
        </>
    )
}