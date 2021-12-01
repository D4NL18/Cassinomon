import React from "react";
import { Typography } from "@material-ui/core";

import Card from "../../Components/Inventory/Card";
import Cyndaquil from "../../Images/cyndaquil.png";
import PokeballMenu from "../../Components/PokeballMenu";
import Header from "../../Components/Header/Header";
import axios from "axios";
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
    const [apiCyn, setApiCyn] = React.useState();
    const [apiToto, setApiToto] = React.useState();
    const [apiPika, setApiPika] = React.useState();
    const [apiChiko, setApiChiko] = React.useState();
    let loaded = false;
    const [list, setList] = React.useState([]);
    React.useEffect(async () => {
        try {
            setApiCyn(await axios.get("https://pokeapi.co/api/v2/pokemon/cyndaquil").data)
            setApiToto(await axios.get("https://pokeapi.co/api/v2/pokemon/totodile/").data);
            setApiPika(await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu/").data);
            setApiChiko(await axios.get("https://pokeapi.co/api/v2/pokemon/chikorita/").data);
        } catch {
            console.log("Não foi possível fazer a requisição da api")
        } finally {
            console.log(apiCyn)
            setList([apiCyn, apiToto, apiChiko, apiPika]);
        }


    }, []);
    return (
        <div className="entire-page-inventory">
            <Header color="#011F4B" />
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
            <PokeballMenu />

        </div >
    );
};

export default Inventory;