import React from 'react'
import LobbyButton from '../../Components/LobbyButton/LobbyButton'
import BlackjackImg from '../../Images/blackjack.png'
import RoletaImg from '../../Images/roleta.png'
import DiceImg from '../../Images/dice.png'
import CoinflipImg from '../../Images/coinflip.png'
import './Home.css'


export default function Home() {

    return (
        <>
            <div className="entire-page">
                <div className="nav" />
                <div className="background">
                    <div className="lobbyButtonBox">
                        <div className="lobbyButtonRow">
                            <LobbyButton title="Roleta" img={RoletaImg} route="Roulette" color="#F86000" />
                            <LobbyButton title="Dice" img={DiceImg} route="Dice" color="#60A848" />
                        </div>
                        <div className="lobbyButtonRow">
                            <LobbyButton title="Blackjack" img={BlackjackImg} route="Blackjack" color="#94D5FF" />
                            <LobbyButton title="Coinflip" img={CoinflipImg} route="Coinflip" color="#F6BD20" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}