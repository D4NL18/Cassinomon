import React from "react";
import { Typography } from "@material-ui/core";

import Card from "../../components/Inventory/Card";
import PokeballMenu from "../../components/PokeballMenu";
import PokeAPI from '../../components/PokeAPI/PokeAPI'
import Header from "../../components/Header/Header";
import "./styles.css";




const cards = [
    {
        type: "fire",
        name: "Charmander",
        pokedex_num: 4,
        description: "Pokemon de fogo brabissimo, um dos iniciais mais balas que tem"
    },
    {
        type: "eletric",
        name: "Pikachu",
        pokedex_num: 25,
        description: "Pokemon do tipo elétrico, protagonista de pokemon"
    },
    {
        type: "leaf",
        name: "Bulbassauro",
        pokedex_num: 1,
        description: "Pokemon de planta que tem seus momentos na série"
    },
    {
        type: "water",
        name: "Squirtle",
        pokedex_num: 7,
        description: "Pokemon de água, um dos favoritos de todos nos jogos de DS"
    },
]

const Inventory = () => {
    const [imgs, setImgs] = React.useState("");

    return (
        <div className="entire-page-inventory">
            <Header color="#011F4B" />
            <PokeAPI setImgs={setImgs} />
            <div
                style={{
                    height: "90 %",
                    justifyContent: "end",
                    paddingLeft: 50,
                    paddingRight: 50,

                }}>
                <Typography
                    variant="h2"
                    color="white"
                >
                    Inventário
                </Typography>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        paddingTop: 40,
                    }}
                >
                    {cards.map((pokemon, index) => (
                        <Card
                            type={pokemon.type}
                            name={pokemon.name}
                            description={pokemon.description}
                            image={imgs[pokemon.pokedex_num-1]}
                            key={index}
                        />
                    ))}
                </div>

            </div>
            <PokeballMenu />

        </div >
    );
};

export default Inventory;