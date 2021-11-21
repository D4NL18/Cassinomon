import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import amber from '@material-ui/core/colors/amber';
import "./sidelist.css";

function Sidelist(props){

    return(
        <div className="sidelist_content">
            <PersonIcon className="sidelist_icon"/>
            <p className="sidelist_name">{props.item.nome}</p>
        </div>
    )
}

export default Sidelist;