import React, { useState } from 'react';
import Headder from "../components/header/header.jsx"
import Sidelist from '../components/sidelist/sidelist.jsx';
import Button from '@material-ui/core/Button';
import amber from '@material-ui/core/colors/amber';
import PikachuCoin from "./assets/pikachu_coin.png";
import "./coinflip.css";

function Coinflip() {

    const [bet, setBet] = useState(0);
    const [friend, setFriend] = useState([{nome: "Blackadder"}, {nome: "Dhellion"}, {nome: "Hijay"}]);

    return(
        <div className="coinflip_container">
            <Headder color="#83640E"/>
            <div className="coinflip_container_content">
                <div className="coinflip_container_content_mainscreen">
                    <div className="coinflip_container_content_mainscreen_left">
                        <img src={PikachuCoin} alt="Moeda Pikachu" className="content_coin_img"/>
                        <Button variant="contained" size="large" sx={{ bgcolor: "#F8C821", width: 2/5, color: "#000", '&:hover': { bgcolor: amber[700]} }}>Flip</Button>
                    </div>
                    <div className="coinflip_container_content_mainscreen_right">
                        <p className="coinflip_container_content_mainscreen_question">Quanto deseja apostar?</p>
                        <input className="coinflip_container_content_mainscreen_input" value={bet} onChange={e => setBet(e.target.bet)} />
                    </div>
                </div>
                <div className="coinflip_container_content_friend_list">
                    {friend.map((person)=>{return <Sidelist item={person} color="#CCA129"/>})}
                </div>
            </div>
        </div>
    )
}

export default Coinflip;