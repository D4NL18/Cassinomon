import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import "./styles.css"
import { useHistory } from "react-router-dom";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(2),
        left: theme.spacing(2),
    },
}));

const actions = [
    { icon: <LocalGroceryStoreOutlinedIcon />, name: 'Loja', route: "Lojinha" },
    { icon: <BackpackOutlinedIcon />, name: 'Inventário', route: "/Inventory" },
    { icon: <PersonOutlineOutlinedIcon />, name: 'Perfil', route: "/Profile" },
];


export default function PlaygroundSpeedDial() {
    const history = useHistory();

    return (
        <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1, position: "absolute", bottom: 3 }}>
            <Box sx={{ height: 100 }}>
                <StyledSpeedDial
                    ariaLabel="menuPokeball"
                    icon={<CatchingPokemonIcon />}
                    direction="right"
                    styleOverride

                >
                    {actions.map((action) => {
                        return (
                                <SpeedDialAction
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                    tooltipPlacement="bottom"
                                    onClick={() => history.push(action.route)}
                                />
                        )
                    }
                    )
                    }
                </StyledSpeedDial>
            </Box>
        </Box>
    );
}
