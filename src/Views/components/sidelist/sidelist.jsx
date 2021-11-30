import React, { useState, useEffect }from "react";
import PersonIcon from '@material-ui/icons/Person';
import "./sidelist.css";

function Sidelist(props){

    const [estilo, setEstilo] = useState({});

    useEffect(()=>{
        let temp_cor = props.color;
        setEstilo({
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            backgroundColor: temp_cor,
            marginTop: "2px"
        })
    }, [props])


    return(
        <div className="sidelist_content" style={estilo}>
            <PersonIcon className="sidelist_icon"/>
            <p className="sidelist_name">{props.item.nome}</p>
        </div>
    )
}

export default Sidelist;