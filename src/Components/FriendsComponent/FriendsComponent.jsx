import PersonIcon from '@mui/icons-material/Person';
import Divider from "@mui/material/Divider";
import './FriendsComponent.css'

export default function FriendsComponent(props) {
    return(
        <>
            <div className="entire-FriendsComponent">
                <PersonIcon className="personIcon" /><h1 className="friendsName">{props.nome}</h1>
            </div>
            <Divider />
        </>
    )
}