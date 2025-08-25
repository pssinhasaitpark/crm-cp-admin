// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   InputBase,
//   Badge,
//   Box,
//   MenuItem,
//   Select,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import SettingsIcon from "@mui/icons-material/Build";
// import MailIcon from "@mui/icons-material/Mail";
// import SearchIcon from "@mui/icons-material/Search";
// import AccountMenu from "../components/accountMenu/AccountMenu";

// const Header = () => {
//   return (
//     <AppBar
//       position="static"
//       elevation={0}
//       sx={{
//         backgroundColor: "#E3EDF9",
//         color: "#000",
//         px: 3,
//         py: 2,
//       }}
//     >
//         <Box sx={{ display: "flex",textAlign:"center",justifyContent:"space-around"}}>

//         <Box sx={{ display: "flex", alignItems: "center",justifyContent:"center", backgroundColor:"white" , borderRadius:'10px' , paddingY:'5px'}}>
//           {/* Dropdown */}
//           <Select
//             defaultValue="all"
//             size="small"
//             sx={{
//               bgcolor: "#253D90",
//               color: "white",
//               fontWeight: "bold",
//               borderRadius: 2,
//               height:'100%',
//               "& .MuiSelect-icon": { color: "white" },
//             }}
//           >
//             <MenuItem value="all">All Candidates</MenuItem>
//             <MenuItem value="shortlisted">Shortlisted</MenuItem>
//             <MenuItem value="interviewed">Interviewed</MenuItem>
//           </Select>

//           {/* Search input */}
//           <Box
//             sx={{
//               position: "relative",
//               borderRadius: 2,
//               backgroundColor: "white",
//               width: 400,
//               display: "flex",
//               alignItems: "center",
//               justifyContent:'space-around'
              
//             }}
//           >
//             <InputBase placeholder="Search…"  />
//             <SearchIcon sx={{ color: "gray",  }} />
//           </Box>
//         </Box>

//         {/* Right side icons */}
//         <Box sx={{ display:'flex',  alignItems: "center", gap: 3 }}>
//           <Box sx={{backgroundColor:'blue',borderRadius:'50%' }}>
//           <IconButton sx={{color :"#fff"}}>

//             <Badge badgeContent={2} color="error">
//               <NotificationsIcon color="#fff" />
//             </Badge>
//           </IconButton>
//           </Box>
//           <Box sx={{backgroundColor:'#FFD400',borderRadius:'50%' }} >

//           <IconButton sx={{ color: "#000" }}>
//             <SettingsIcon />
//           </IconButton>
//           </Box>
//           <Box sx={{backgroundColor:'#4caf50',borderRadius:'50%' }}>

//           <IconButton sx={{ color: "#fff" }}>
//             <Badge badgeContent={10} color="error">
//               <MailIcon />
//             </Badge>
//           </IconButton>
//           </Box>
//           <Box>
//             <AccountMenu/>
//           </Box>
//         </Box>

//         </Box>

//     </AppBar>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import AccountMenu from "../components/accountMenu/AccountMenu";
import { FaSearch } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";

const Header = () => {
  const [dropdownValue, setDropdownValue] = useState("all");

  return (
    <header className="bg-[#E3EDF9] text-black px-6 py-4">
      <div className="flex justify-between items-center text-center space-x-4">
        {/* Left Section */}
        <div className="flex items-center space-x-4 bg-white rounded-lg py-2 px-3"> 
          {/* Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* <button className="bg-[#253D90] text-white font-bold rounded-lg px-4 py-2">
                {dropdownValue || "Select Status"}
              </button> */}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white rounded-lg shadow-md">
              <DropdownMenuItem onClick={() => setDropdownValue("all")} className="p-2 text-black hover:bg-gray-100">
                All Candidates
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDropdownValue("shortlisted")} className="p-2 text-black hover:bg-gray-100">
                Shortlisted
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDropdownValue("interviewed")} className="p-2 text-black hover:bg-gray-100">
                Interviewed
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Search Input */}
          <div className="relative w-100 flex items-center justify-between bg-white rounded-lg px-3 py-2">
            <input
              placeholder="Search…"
              className="w-full border-none text-gray-700 outline-none "
            />
            <FaSearch />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          {/* Notifications Icon with Badge */}
          <div className="relative bg-blue-500 rounded-full p-3">
            <IoNotificationsSharp className="text-white w-6 h-6" />
            <span className="absolute top-0 right-0 w-5 h-5 rounded-full bg-red-600 border-2 border-white text-xs text-white text-center">2</span>
          </div>
          {/* Account Menu */}
          <AccountMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
