import React from "react";
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import grey from '@material-ui/core/colors/grey';
import "./header.css";

function Header(props){
    return(
        <div className="header_content">
            <div className="header_title">
                <h1>Cassinomon</h1>
            </div>
            <div className="header_score">
                <h3>Saldo</h3>
            </div>
            <div className="header_buttons">
                <Button variant="contained" size="small" sx={{ bgcolor: "#E7EFF6", color: "#000", '&:hover': { bgcolor: grey[700]} }}>Login</Button>
                <Button variant="contained" size="small" sx={{ bgcolor: "#E7EFF6", color: "#000", '&:hover': { bgcolor: grey[700]} }}>Cadastro</Button>
            </div>
            <div className="header_menu">
                <MenuIcon sx={{ color: grey[400] }} />
            </div>
        </div>
    )
}

export default Header;