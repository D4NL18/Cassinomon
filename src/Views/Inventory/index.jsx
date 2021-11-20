import { TextField, Typography } from "@material-ui/core";
import React from "react";

import Card from "../../components/Inventory/Card";
import "./styles.css";

const Inventory = () => {
    return (
        <div className="entire-page">
            <div className="navbar" />
            <div
                style={{
                    height: "90 %",
                    justifyContent: "end",
                    paddingLeft: 50 ,
                }}>
                <Typography
                    variant="h2"
                    color="white"
                >
                    Inventário
                </Typography>
                <Card />
            </div>
        </div >
    );
};

export default Inventory;