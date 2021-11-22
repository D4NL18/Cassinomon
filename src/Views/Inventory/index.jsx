import React from "react";
import { Typography } from "@material-ui/core";

import Card from "../../components/Inventory/Card";
import Cyndaquil from "../../assets/cyndaquil.png";
import "./styles.css";

const cards = [
    {
        type: "eletric",
        image: Cyndaquil,
        name: "Cyndaquil",
        description: "Pokemon de fogo brabissimo, um dos iniciais mais balas que tem"
    },
    {
        type: "fire",
        image: Cyndaquil,
        name: "Cyndaquil",
        description: "Pokemon de fogo brabissimo, um dos iniciais mais balas que tem"
    },
    {
        type: "leaf",
        image: Cyndaquil,
        name: "Cyndaquil",
        description: "Pokemon de fogo brabissimo, um dos iniciais mais balas que tem"
    },
    {
        type: "water",
        image: Cyndaquil,
        name: "Cyndaquil",
        description: "Pokemon de fogo brabissimo, um dos iniciais mais balas que tem"
    },
]

const Inventory = () => {
    return (
        <div className="entire-page">
            <div className="navbar" />
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
                            image={pokemon.image}
                            key={index}
                        />
                    ))}
                </div>

            </div>
        </div >
    );
};

export default Inventory;