import React from "react";
import Button from '@material-ui/core/Button';
import "./header.css";

function Header(){
    return(
        <div className="header_content">
            <div className="header_title">
                <h1>Cassinomon</h1>
            </div>
            <div className="header_score">
                <h3>Saldo</h3>
            </div>
            <div className="header_buttons">
                <Button variant="contained" size="small">Login</Button>
                <Button variant="contained" size="small">Cadastro</Button>
            </div>
            <div className="header_menu"></div>
        </div>
    )
}

export default Header;