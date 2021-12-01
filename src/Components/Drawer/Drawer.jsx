import React, {useState} from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from '@mui/material/IconButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FriendsComponent from '../FriendsComponent/FriendsComponent'

const drawerWidth = 240;


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start"
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  function addFriend() {
      alert(name)
  }

  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        sx={{ ...(open && { display: "none" }) }}
      >
        <MenuIcon style={{color: '#E7EFF6'}}/>
      </IconButton>

      <Drawer
        sx={{
          width: 25,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth
          }
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <IconButton onClick={addFriend} ><PersonAddIcon /></IconButton><input onChange={(e) => {setName(e)}} />
        </List>
        <Divider />
        <List>
          {/* Aqui estará o .map de amigos rsrs */}
            <FriendsComponent nome="Tonhooow" />
            <FriendsComponent nome="Dhelion" />
            <FriendsComponent nome="nininininina" />
            <FriendsComponent nome="Racoba" />
            <FriendsComponent nome="Aslequi" />
        </List>
      </Drawer>
    </Box>
  );
}
