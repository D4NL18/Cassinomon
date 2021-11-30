import React, { useState } from "react";
import Headder from "../components/header/header.jsx";
import Sidelist from "../components/sidelist/sidelist.jsx";
import Purchase from "../components/purchase/purchase.jsx";
import "./loja.css";

function Loja() {

    const [friend, setFriend] = useState([{nome: "Blackadder"}, {nome: "Dhellion"}, {nome: "Hijay"}]);
    const [pokemon, setPokemon] = useState([{nome: "Arcanine", tipo: "Fire", caracteristica: "Procurar ver"}, {nome: "Arcanine", tipo: "Fire", caracteristica: "Procurar ver"}, {nome: "Arcanine", tipo: "Fire", caracteristica: "Procurar ver"}, {nome: "Arcanine", tipo: "Fire", caracteristica: "Procurar ver"}, {nome: "Arcanine", tipo: "Fire", caracteristica: "Procurar ver"}, {nome: "Arcanine", tipo: "Fire", caracteristica: "Procurar ver"}, {nome: "Arcanine", tipo: "Fire", caracteristica: "Procurar ver"}, {nome: "Arcanine", tipo: "Fire", caracteristica: "Procurar ver"}]);
    
    return(
        <div className="loja_container">
            <Headder color="#011F4B"/>
            <div className="loja_container_content">
                <div className="loja_container_content_mainscreen">
                    <div className="loja_container_content_mainscreen_title">
                        <h1>Loja</h1>
                    </div>
                    <div className="loja_container_content_mainscreen_store">
                        {pokemon.map((poke)=>{return <Purchase pokemon={poke} color="#F86000"/>})}
                    </div>
                </div>
                <div className="loja_container_content_friend_list">
                    {friend.map((person)=>{return <Sidelist item={person} color="#D9534F"/>})}
                </div>
            </div>
        </div>  
    )
}

export default Loja;