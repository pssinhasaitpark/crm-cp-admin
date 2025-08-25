import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Box,
  MenuItem,
  Select,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Build";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import AccountMenu from "../components/accountMenu/AccountMenu";

const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#E3EDF9",
        color: "#000",
        px: 3,
        py: 2,
      }}
    >
        <Box sx={{ display: "flex",textAlign:"center",justifyContent:"space-around"}}>

        <Box sx={{ display: "flex", alignItems: "center",justifyContent:"center", backgroundColor:"white" , borderRadius:'10px' , paddingY:'5px'}}>
          {/* Dropdown */}
          <Select
            defaultValue="all"
            size="small"
            sx={{
              bgcolor: "#253D90",
              color: "white",
              fontWeight: "bold",
              borderRadius: 2,
              height:'100%',
              "& .MuiSelect-icon": { color: "white" },
            }}
          >
            <MenuItem value="all">All Candidates</MenuItem>
            <MenuItem value="shortlisted">Shortlisted</MenuItem>
            <MenuItem value="interviewed">Interviewed</MenuItem>
          </Select>

          {/* Search input */}
          <Box
            sx={{
              position: "relative",
              borderRadius: 2,
              backgroundColor: "white",
              width: 400,
              display: "flex",
              alignItems: "center",
              justifyContent:'space-around'
              
            }}
          >
            <InputBase placeholder="Search…"  />
            <SearchIcon sx={{ color: "gray",  }} />
          </Box>
        </Box>

        {/* Right side icons */}
        <Box sx={{ display:'flex',  alignItems: "center", gap: 3 }}>
          <Box sx={{backgroundColor:'blue',borderRadius:'50%' }}>
          <IconButton sx={{color :"#fff"}}>

            <Badge badgeContent={2} color="error">
              <NotificationsIcon color="#fff" />
            </Badge>
          </IconButton>
          </Box>
          <Box sx={{backgroundColor:'#FFD400',borderRadius:'50%' }} >

          <IconButton sx={{ color: "#000" }}>
            <SettingsIcon />
          </IconButton>
          </Box>
          <Box sx={{backgroundColor:'#4caf50',borderRadius:'50%' }}>

          <IconButton sx={{ color: "#fff" }}>
            <Badge badgeContent={10} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          </Box>
          <Box>
            <AccountMenu/>
          </Box>
        </Box>

        </Box>

    </AppBar>
  );
};

export default Header;
