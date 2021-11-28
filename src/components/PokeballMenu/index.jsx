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
    { icon: <BackpackOutlinedIcon />, name: 'Inventário', route: "Inventário" },
    { icon: <PersonOutlineOutlinedIcon />, name: 'Perfil', route: "Perfil" },
];


export default function PlaygroundSpeedDial() {

    return (
        <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
            <Box sx={{ position: 'absolute', bottom: 3, height: 100 }}>
                <StyledSpeedDial
                    ariaLabel="menuPokeball"
                    icon={<CatchingPokemonIcon />}
                    direction="right"
                    styleOverride

                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipPlacement="bottom"
                            onClick={() => console.log(action.route)}
                        />
                    ))}
                </StyledSpeedDial>
            </Box>
        </Box>
    );
}
