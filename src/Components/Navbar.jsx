import { DivDinheiro, NavbarStyled, NavBtn, TitleSystem } from "./GeneralStyles";
import DehazeIcon from '@material-ui/icons/Dehaze'
import {IconButton} from '@material-ui/core';

const Navbar = (props) => {
    return (
        <NavbarStyled color={props.color}>
            <div className="nav-content">
                <TitleSystem>Cassinomon</TitleSystem>
                <DivDinheiro>$ 9K</DivDinheiro>
            </div>
            <nav className="nav-buttons">
                <NavBtn>Login</NavBtn>
                <NavBtn>Registre-se</NavBtn>
                <IconButton>
                    <DehazeIcon style={{color: 'white'}}/>
                </IconButton>
            </nav>
        </NavbarStyled>
    )
}

export default Navbar;