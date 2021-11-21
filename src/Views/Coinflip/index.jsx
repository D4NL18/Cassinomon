import React from "react";
import Headder from "./components/header/header.jsx"
import Content from "./components/content/content.jsx"
import "./coinflip.css";

function Coinflip() {
    return(
        <div className="container">
            <Headder/>
            <Content/>
        </div>
    )
}

export default Coinflip;