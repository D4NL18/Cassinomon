import React, { useState, useEffect }from "react";
import Button from '@material-ui/core/Button';
import "./purchase.css";

function Purchase(props){

    const [estilo, setEstilo] = useState({});

    useEffect(()=>{
        let temp_cor = props.color;
        setEstilo({ 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center", 
            width: "100%",
            marginBottom: "30px",
            backgroundColor: temp_cor, 
            borderRadius: "10px"
        })
    }, [props])

    return(
        <div className="purchase_container">
            <div className="purchase_card" style={estilo}>
                <div className="purchase_card_name">
                    <h3>{props.pokemon.nome}</h3>
                </div>
                <div className="purchase_card_photo"></div>
                <div className="purchase_card_type">
                    <p>{props.pokemon.tipo}</p>
                </div>
                <div className="purchase_card_characteristic">
                    <p>{props.pokemon.caracteristica}</p>
                </div>
            </div>
            <Button variant="contained" size="large" sx={{ bgcolor: props.color, color: "#FFF", '&:hover': { bgcolor: props.color}, width: "100%" }}>Preço</Button>
        </div>
    )
}

export default Purchase;