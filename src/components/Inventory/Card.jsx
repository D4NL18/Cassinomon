import React from "react";
import { Typography } from "@material-ui/core";
import Cyndaquil from "../../assets/Totodile.svg";


const Card = (props) => {
    const { bgColor, image, name, description } = props;
 
    return (
        <div
            style={
                {
                    backgroundColor: bgColor,
                    height: 200,
                    width: 200,
                    justifyContent: "center",
                    textAlign: "center",
                    padding: 15,
                }}
        >
            <Typography variant="h5">
                {name}
            </Typography>
            <image src={Cyndaquil} height={30} w={30} /> 
            <Typography
                variant="h7"
            >
                {description}
            </Typography>
        </div>
    );
};

export default Card;