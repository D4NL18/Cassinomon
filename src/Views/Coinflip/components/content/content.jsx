import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import amber from '@material-ui/core/colors/amber';
import Sidelist from '../sidelist/sidelist.jsx';
import PikachuCoin from "../../assets/pikachu_coin.png";
import "./content.css";

function Content(props){

    const [bet, setBet] = useState(0);
    const [friend, setFriend] = useState([{nome: "Blackadder"}, {nome: "Dhellion"}, {nome: "Hijay"}]);

    return(
        <div className="content_content">
            <div className="content_mainscreen">
                <div className="content_mainscreen_left">
                    <img src={PikachuCoin} alt="Moeda Pikachu" className="content_coin_img"/>
                    <Button variant="contained" size="large" sx={{ bgcolor: "#F8C821", width: 2/5, color: "#000", '&:hover': { bgcolor: amber[700]} }}>Flip</Button>
                </div>
                <div className="content_mainscreen_right">
                    <p className="content_mainscreen_question">Quanto deseja apostar?</p>
                    <input className="content_mainscreen_input" value={bet} onChange={e => setBet(e.target.bet)} />
                </div>
            </div>
            <div className="content_friend_list">
                {friend.map((person)=>{return <Sidelist item={person}/>})}
            </div>
        </div>
    )
}

export default Content;