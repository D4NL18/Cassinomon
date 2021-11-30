import React, { useState } from 'react'
import ButtonStart from '../../Components/ButtonStart/ButtonStart';
import Dice from 'react-dice-roll'
import DiceButtonBall from '../../Components/DiceButtonBall/DiceButtonBall'
import Header from '../../Components/Header/Header'
import './Dice.css'



export default function DicePage() {

    const [bet, setBet] = useState(0);
    const [amount, setAmount] = useState(10);
    const [one, setOne] = useState(true)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)
    const [five, setFive] = useState(false)
    const [six, setSix] = useState(false)

    // const faces = [
    //     "https://i.imgur.com/lFR77WI.png",
    //     "https://i.imgur.com/3opesH2.png",
    //     "https://i.imgur.com/hlPpQ2V.png",
    //     "https://i.imgur.com/Gja8Chq.png",
    //     "https://i.imgur.com/jl6zjma.png",
    //     "https://i.imgur.com/Qj7vjKB.png",
    // ]

    const handleInputChangeBet = (e) => {
        setBet(e.target.value)
    }

    const diceRef = React.useRef(null);

    const onRoll = () => {
        if (diceRef && diceRef.current) {
            console.log(diceRef.current.style.pointerEvents);
            diceRef.current.style.pointerEvents = "auto";
            diceRef.current.children[0].click();
            diceRef.current.style.pointerEvents = "none";
        }
    };

    const checkAmount = e => {
        if (amount >= bet && bet > 0) {
            onRoll()
        } else if (amount < bet) {
            alert(`Saldo insuficiente. Sua aposta deve ser de, no max, ${amount} pontos`)
        } else if (bet <= 0) {
            alert(`Sua aposta deve ser maior que 0`)
        }
    }




    return (
        <>
            <div className="entire-page">
                <Header color="#417231" />
                <div className="backgroundDice">
                    <div className="mainBox">
                        <div className="betBox">
                            <div className="numberSelection">
                                <h3 className="numberSelection-text">Escolha um número:</h3>
                                <div className="numberRow">
                                    <DiceButtonBall number={1} onClick={() => {
                                        setOne(true);
                                        setTwo(false);
                                        setThree(false);
                                        setFour(false);
                                        setFive(false);
                                        setSix(false)
                                    }}
                                        selected={(one) ? true : false} />
                                    <DiceButtonBall number={2} onClick={() => {
                                        setOne(false);
                                        setTwo(true);
                                        setThree(false);
                                        setFour(false);
                                        setFive(false);
                                        setSix(false)
                                    }} selected={(two) ? true : false} />
                                    <DiceButtonBall number={3} onClick={() => {
                                        setOne(false);
                                        setTwo(false);
                                        setThree(true);
                                        setFour(false);
                                        setFive(false);
                                        setSix(false)
                                    }}
                                        selected={(three) ? true : false} />
                                </div>
                                <div className="numberRow">
                                    <DiceButtonBall number={4} onClick={() => {
                                        setOne(false);
                                        setTwo(false);
                                        setThree(false);
                                        setFour(true);
                                        setFive(false);
                                        setSix(false)
                                    }}
                                        selected={(four) ? true : false} />
                                    <DiceButtonBall number={5} onClick={() => {
                                        setOne(false);
                                        setTwo(false);
                                        setThree(false);
                                        setFour(false);
                                        setFive(true);
                                        setSix(false)
                                    }}
                                        selected={(five) ? true : false} />
                                    <DiceButtonBall number={6} onClick={() => {
                                        setOne(false);
                                        setTwo(false);
                                        setThree(false);
                                        setFour(false);
                                        setFive(false);
                                        setSix(true)
                                    }}
                                        selected={(six) ? true : false} />
                                </div>
                            </div>
                            <div className="betAmountBox">
                                <h3 className="betAmountText">Quanto deseja apostar?</h3>
                                <input className="betAmountInput" onChange={handleInputChangeBet} value={bet} />
                                <ButtonStart color="linear-gradient(180deg, #6DE644 1.56%, #569640 100%)" onClick={() => checkAmount()} />
                            </div>
                        </div>
                        <div className="diceBox" ref={diceRef}>
                            <Dice size={200}
                                onRoll={(value) => {
                                    if ((value === 1 && one) || (value === 2 && two) || (value === 3 && three) || (value === 4 && four) || (value === 5 && five) || (value === 6 && six)) {
                                        setAmount(amount + bet * 6)
                                    } else {
                                        setAmount(amount - bet)
                                    }
                                    console.log(amount)
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="friends-list" />
            </div>
        </>
    )
}