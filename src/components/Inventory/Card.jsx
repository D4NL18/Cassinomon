import React from "react";

const Card = (props) => {
    const {bgColor, image, name, description} = props;
    return (
        <div 
        style={
            {backgroundColor: bgColor,
                height:200,
                width:100,
                justifyContent:"center",
            }}
        >
            <image src={image}/>
        </div>
    );
};

export default Card;