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

// import React, { useState } from "react";
// import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
// import { FaSearch } from "react-icons/fa";
// import { IoNotificationsSharp } from "react-icons/io5";
// import ThemeToggle from "./ThemeToggle";
// import { useTheme } from "../components/context/ThemeProvider";

// const Header = () => {
//   const [dropdownValue, setDropdownValue] = useState("all");
//   const { theme } = useTheme(); // ✅ Get current theme

//   // ✅ Classes based on theme
//   const bgHeader = theme === "dark" ? "bg-[#1e1e1e] border-b border-gray-700 " : "bg-[#E3EDF9]";
//   const textColor = theme === "dark" ? "text-white" : "text-black";
//   const searchBg = theme === "dark" ? "bg-gray-800" : "bg-white";
//   const dropdownBg = theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-black";
//   const hoverBg = theme === "dark" ? "hover:bg-gray-600" : "hover:bg-gray-100";

//   return (
//     <header className={`${bgHeader} ${textColor} px-6 py-4`}>
//       <div className="flex justify-between items-center text-center space-x-4">
//         {/* Left Section */}
//         <div className={`flex items-center space-x-4 ${searchBg} rounded-lg py-2 px-3`}>
//           {/* Search Input */}
//           <div className={`relative w-100 flex items-center justify-between ${searchBg} rounded-lg px-3 py-2`}>
//             <input
//               placeholder="Search…"
//               className={`w-full border-none outline-none ${theme === "dark" ? "bg-gray-800 text-white" : "text-gray-700"}`}
//             />
//             <FaSearch className={theme === "dark" ? "text-gray-400" : "text-gray-600"} />
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center space-x-3">
//           <ThemeToggle />
//           {/* Notifications Icon with Badge */}
//           <div className={`relative rounded-full p-3 ${theme === "dark" ? "bg-gray-700" : "bg-blue-500"}`}>
//             <IoNotificationsSharp className="text-white w-6 h-6" />
//             <span className="absolute top-0 right-0 w-5 h-5 rounded-full bg-red-600 border-2 border-white text-xs text-white text-center">
//               2
//             </span>
//           </div>

//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../components/context/ThemeProvider";

const Header = ({ onMenuClick }) => {
  const { theme } = useTheme();
  const bgHeader = theme === "dark" ? "bg-[#1e1e1e] border-b border-gray-700" : "bg-[#E3EDF9]";
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const searchBg = theme === "dark" ? "bg-gray-800" : "bg-white";

  return (
    <header className={`${bgHeader} ${textColor} px-6 py-4`}>
      <div className="flex justify-between items-center text-center space-x-4">
        <div className="flex items-center space-x-4">
          {/* Hamburger */}
          <button className="lg:hidden text-2xl mr-2 cursor-pointer" onClick={onMenuClick}>
            <FiMenu />
          </button>

          {/* Search */}
          <div className={`items-center ${searchBg} rounded-lg py-2 px-3 hidden sm:flex`}>
            <input
              placeholder="Search…"
              className={`w-full border-none outline-none ${theme === "dark" ? "bg-gray-800 text-white" : "text-gray-700"}`}
            />
            <FaSearch className={theme === "dark" ? "text-gray-400" : "text-gray-600"} />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <div className={`relative rounded-full p-3 ${theme === "dark" ? "bg-gray-700" : "bg-blue-500"}`}>
            <IoNotificationsSharp className="text-white w-6 h-6" />
            <span className="absolute top-0 right-0 w-5 h-5 rounded-full bg-red-600 border-2 border-white text-xs text-white text-center">
              2
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

