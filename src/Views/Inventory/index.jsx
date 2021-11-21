import React from "react";
import { Typography } from "@material-ui/core";

import Card from "../../components/Inventory/Card";
import Cyndaquil from "../../assets/cyndaquil.png";
import "./styles.css";

const cards = [
    {
        bgColor: "yellow",
        image: Cyndaquil,
        name: "Cyndaquil",
        description: "Pokemon de fogo brabissimo, um dos iniciais mais balas que tem"
    },
    {
        bgColor: "red",
        image: Cyndaquil,
        name: "Cyndaquil",
        description: "Pokemon de fogo brabissimo, um dos iniciais mais balas que tem"
    },
    {
        bgColor: "green",
        image: Cyndaquil,
        name: "Cyndaquil",
        description: "Pokemon de fogo brabissimo, um dos iniciais mais balas que tem"
    },
    {
        bgColor: "blue",
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
                    }}
                >
                    {cards.map((pokemon, index) => (
                        <Card
                            bgColor={pokemon.bgColor}
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