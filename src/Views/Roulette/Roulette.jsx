import React, { useState } from 'react'
import './Roulette.css'
import { Wheel } from 'react-custom-roulette'
import ButtonStart from '../../components/ButtonStart/ButtonStart';
import Header from '../../components/Header/Header'
import PokeballMenu from "../../components/PokeballMenu";


const data = [
    { option: '0', style: { backgroundColor: '#F9D800' } },
    { option: '1', style: { backgroundColor: '#18394A' } },
    { option: '3', style: { backgroundColor: '#F9D800' } },
    { option: '4', style: { backgroundColor: '#18394A' } },
    { option: '5', style: { backgroundColor: '#F9D800' } },
    { option: '6', style: { backgroundColor: '#18394A' } },
    { option: '7', style: { backgroundColor: '#F9D800' } },
    { option: '8', style: { backgroundColor: '#18394A' } },
    { option: '9', style: { backgroundColor: '#F9D800' } },
    { option: '10', style: { backgroundColor: '#18394A' } },
    { option: '11', style: { backgroundColor: '#F9D800' } },
    { option: '12', style: { backgroundColor: '#18394A' } },
    { option: '13', style: { backgroundColor: '#F9D800' } },
    { option: '14', style: { backgroundColor: '#18394A' } },
    { option: '15', style: { backgroundColor: '#F9D800' } },
    { option: '16', style: { backgroundColor: '#18394A' } },
    { option: '17', style: { backgroundColor: '#F9D800' } },
    { option: '18', style: { backgroundColor: '#18394A' } },
    { option: '19', style: { backgroundColor: '#F9D800' } },
    { option: '20', style: { backgroundColor: '#18394A' } },
    { option: '21', style: { backgroundColor: '#F9D800' } },
    { option: '22', style: { backgroundColor: '#18394A' } },
    { option: '23', style: { backgroundColor: '#F9D800' } },
    { option: '24', style: { backgroundColor: '#18394A' } },
    { option: '25', style: { backgroundColor: '#F9D800' } },
    { option: '26', style: { backgroundColor: '#18394A' } },
    { option: '27', style: { backgroundColor: '#F9D800' } },
    { option: '28', style: { backgroundColor: '#18394A' } },
    { option: '29', style: { backgroundColor: '#F9D800' } },
    { option: '30', style: { backgroundColor: '#18394A' } },
]

export default function Roulette() {

    const [prizeNumber, setPrizeNumber] = useState(0);
    const [mustSpin, setMustSpin] = useState(false);
    const [bet, setBet] = useState(0);
    const [yellow, setYellow] = useState(false);
    const [blue, setBlue] = useState(false);
    const [amount, setAmount] = useState(10);


    const randomizeNumber = () => {
        const newPrizeNumber = Math.floor(Math.random() * data.length)
        if (amount >= bet) {
            setPrizeNumber(newPrizeNumber)
            setMustSpin(true)
        } else if (amount < bet) {
            alert(`Saldo insuficiente. Sua aposta deve ser de, no max, ${amount} pontos`)
        } else if (bet <= 0) {
            alert(`Sua aposta deve ser maior que 0`)
        }
    }

    const handleInputChangeBet = (e) => {
        setBet(e.target.value)
    }

    return (
        <>
            <div className="entire-page">
                <Header color="#B22B00" />
                <div className="big-box">
                    <div className="roulette-box">
                        <Wheel
                            mustStartSpinning={mustSpin}
                            prizeNumber={prizeNumber}
                            data={data}
                            backgroundColors={['#3e3e3e', '#df3428']}
                            textColors={['#ffffff']}
                            onStopSpinning={() => {
                                setMustSpin(false)
                                if ((prizeNumber % 2 === 0 && yellow) || (prizeNumber % 2 !== 0 && blue)) {
                                    setAmount(amount + bet)
                                    alert(`Seu novo saldo é ${parseInt(amount) + parseInt(bet)}`)
                                } else {
                                    setAmount(amount - bet)
                                    alert(`Seu novo saldo é ${parseInt(amount) - parseInt(bet)}`)
                                }
                                setBet(0)
                            }}
                        />
                        <div className="boxes-roulette">
                            <div className="bet-box-roulette">
                                <div className="bet-box-roulette-text">
                                    Quanto deseja apostar?
                                </div>
                                <input className="bet-box-roulette-input" onChange={handleInputChangeBet} value={bet} />
                                <div className="bet-box-color">
                                    <div className="bet-bot-color-text">
                                        Selecione uma cor:
                                    </div>
                                    <div className="balls-roulette">
                                        <div className="yellow-ball-roulette"
                                            onClick={() => {
                                                setYellow(true); setBlue(false)
                                            }}
                                            style={{ border: (yellow) ? '2px solid black' : '' }}
                                        />

                                        <div className="blue-ball-roulette"
                                            onClick={() => {
                                                setYellow(false); setBlue(true)
                                            }} style={{ border: (blue) ? '2px solid black' : '' }} />
                                    </div>
                                </div>
                                <ButtonStart onClick={randomizeNumber} color="linear-gradient(180deg, #E04F00 1.56%, #964540 100%)" />
                            </div>
                            <div className="history-box-roulette">
                                <div className="history-box-roulette-text">
                                    Histórico de resultados
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="friends-list" />
                </div>

                <PokeballMenu/>

            </div>
        </>
    )
}