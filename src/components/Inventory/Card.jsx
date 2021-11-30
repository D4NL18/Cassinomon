import React from "react";
import { Typography } from "@material-ui/core";
import "./styles.css"

const Card = (props) => {
    const { image, name, description, type } = props;
    const getType = () => {
        if (type === "fire") {
            return "#F86000";
        } else if (type === "water") {
            return "#94D5FF";
        } else if (type === "leaf") {
            return "#60A848";
        } else if (type === "eletric") {
            return "#F6BD20";
        }
    }

    
    return (
        <div
            style={
                {
                    backgroundColor: getType(),
                    height: 250,
                    width: 200,
                    textAlign: "center",
                    padding: 15,
                    borderRadius: 10,
                }}
        >
            <Typography variant="h5">
                {name}
            </Typography>
            {image ?
                <img src={image} className="pokemon-image" height="40%" width="80%" alt={name} />
                :
                <div
                    style={{
                        backgroundColor: "white",
                        height: "40%",
                        width: "80%",
                    }} />
            }



            <Typography
                variant="h7"
            >
                {description}
            </Typography>
        </div>
    );
};

export default Card;