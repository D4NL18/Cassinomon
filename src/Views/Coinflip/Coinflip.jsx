import React, { useState } from 'react';
import Headder from "../../components/Header/Header.jsx";
import Sidelist from "../../components/FriendsComponent/FriendsComponent.jsx";
import Button from '@mui/material/Button';
import Pikachu from "../../Images/coinflip.png";
import Raichu from "../../Images/raichu.png";
import PokeballMenu from "../../components/PokeballMenu";
import "./coinflip.css";

function Coinflip() {

    const [bet, setBet] = useState(0);
    const [money, setMoney] = useState(10000);
    const [choice, setChoice] = useState(" ");
    const [result, setResult] = useState(0)
    const [friend, setFriend] = useState([{nome: "Blackadder"}, {nome: "Dhellion"}, {nome: "Hijay"}]);

    const flipper = () => {

        if(bet <= 0){
            alert(`Sua aposta deve ser maior que 0`);
        } else if (bet > money) {
            alert(`Saldo insuficiente. Sua aposta deve ser de, no max, ${money} pontos`);
        } else if(choice == " "){
            alert("Você deve escolher um Pokemon!");
        } else {
            setResult((Math.round(Math.random()*100)) % 2);
            const temp_result = (Math.round(Math.random()*100)) % 2;
            const options = ["Pikachu", "Raichu"];

            if(options[temp_result] == choice){
                setMoney(parseInt(money) + parseInt(bet));
            } else {
                setMoney(parseInt(money) - parseInt(bet));
            }

            setChoice(" ");
        }
    }

    const handleInputChangeBet = (e) => {
        setBet(e.target.value)
    }

    return(
        <div className="coinflip_container">
            <Headder color="#83640E"/>
            <div className="coinflip_container_content">
                <div className="coinflip_container_content_mainscreen">
                    <div className="coinflip_container_content_mainscreen_left">
                        <img src={(!result)? Pikachu : Raichu } alt="Moeda Pikachu" className="content_coin_img"/>
                        <Button variant="contained" size="large" sx={{ bgcolor: "#F8C821", width: 2/5, color: "#000", '&:hover': { bgcolor: "#F8C821"} }} onClick={flipper}>Flip</Button>
                    </div>
                    <div className="coinflip_container_content_mainscreen_right">
                        <p className="coinflip_container_content_mainscreen_question">Quanto deseja apostar?</p>
                        <input className="coinflip_container_content_mainscreen_input" onChange={handleInputChangeBet} value={bet} />
                        <p className="coinflip_container_content_mainscreen_question">{money}</p>
                        <div className="coinflip_container_content_mainscreen_choice">
                            <div className="coinflip_container_content_mainscreen_pikachu" onClick={()=>{setChoice("Pikachu")}} style={{border: (choice == "Pikachu")? '2px solid black' : ''}}>
                                Pikachu
                            </div>
                            <div className="coinflip_container_content_mainscreen_raichu" onClick={()=>{setChoice("Raichu")}} style={{border: (choice == "Raichu")? '2px solid black' : ''}}>
                                Raichu
                            </div>
                        </div>
                    </div>
                </div>
                <PokeballMenu/>
                <div className="coinflip_container_content_friend_list">
                    {friend.map((person)=>{return <Sidelist nome={person.nome}/>})}
                </div>
            </div>
        </div>
    )
}

export default Coinflip;