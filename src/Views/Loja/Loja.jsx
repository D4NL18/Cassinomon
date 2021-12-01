import React, { useState } from "react";
import Headder from "../../components/Header/Header.jsx";
import Sidelist from "../../components/FriendsComponent/FriendsComponent.jsx";
import Card from "../../components/Inventory/Card.jsx";
import Button from '@mui/material/Button';
import PokeballMenu from "../../components/PokeballMenu";
import PokeAPI from '../../components/PokeAPI/PokeAPI'
import "./loja.css";

const card = [
    {
        name: "Arcanine",
        type: "fire",
        description: "Cachorrão mil grau",
        pokedex_num: 59,
        color: "#F86000"
    },
    {
        name: "Wartortle",
        type: "water",
        description: "O melhor apenas",
        pokedex_num: 8,
        color: "#94D5FF"
    },
    {
        name: "Vileplume",
        type: "leaf",
        description: "Frô",
        pokedex_num: 45,
        color: "#60A848"
    },
    {
        name: "Jolteon",
        type: "eletric",
        description: "Procurar ver",
        pokedex_num: 135,
        color: "#F6BD20"
    }
]

function Loja() {

    const [friend, setFriend] = useState([{nome: "Blackadder"}, {nome: "Dhellion"}, {nome: "Hijay"}]);
    const [imgs, setImgs] = useState("");
    const [pokemon, setPokemon] = useState(card);
    
    return(
        <div className="loja_container">
            <Headder color="#011F4B"/>
            <PokeAPI setImgs={setImgs}/>
            <div className="loja_container_content">
                <div className="loja_container_content_mainscreen">
                    <div className="loja_container_content_mainscreen_title">
                        <h1 style={{color: "#FFF"}}>Loja</h1>
                    </div>
                    <div className="loja_container_content_mainscreen_store">
                        {pokemon.map((poke)=>{return <div className="loja_container_content_mainscreen_store_display">
                            <Card type={poke.type} name={poke.name} description={poke.description} image={imgs[poke.pokedex_num - 1]}/>
                            <Button variant="contained" size="large" sx={{ bgcolor: poke.color, width: 4/5, color: "#000", '&:hover': { bgcolor: poke.color} }}>Preço</Button>
                        </div>
                    })}
                    </div>
                </div>
                <div className="loja_container_content_friend_list">
                    {friend.map((person)=>{return <Sidelist nome={person.nome}/>})}
                </div>
                <PokeballMenu/>
            </div>
        </div>  
    )
}

export default Loja;