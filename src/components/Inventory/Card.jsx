import React from "react";
import { Typography } from "@material-ui/core";
import Cyndaquil from "../../assets/Totodile.svg";


const Card = (props) => {
    const { image, name, description, type } = props;
    const getType = () => {
        if (type === "fire") {
            return "red";
        } else if (type === "water") {
            return "blue";
        } else if (type === "leaf") {
            return "green";
        } else if (type === "eletric") {
            return "yellow";
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
                }}
        >
            <Typography variant="h5">
                {name}
            </Typography>
            <div
                style={{
                    backgroundColor:"white",
                    height:"40%",
                    width:"80%",
                }}>
                <image src={Cyndaquil} height={30} width={30} />
            </div>
            <Typography
                variant="h7"
            >
                {description}
            </Typography>
        </div>
    );
};

export default Card;