// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';
// import { logout } from '../../redux/slices/authSlice';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// export default function AccountMenu() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };
//   return (
//     <React.Fragment>
//       <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
//         <Tooltip title="Account settings">
//           <IconButton
//             onClick={handleClick}
//             size="small"
//             sx={{ ml: 2 }}
//             aria-controls={open ? 'account-menu' : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? 'true' : undefined}
//           >
//             <Avatar sx={{ width: 50, height: 50 }}>M</Avatar>
//           </IconButton>
//         </Tooltip>
//       </Box>
//       <Menu
//         anchorEl={anchorEl}
//         id="account-menu"
//         open={open}
//         onClose={handleClose}
//         onClick={handleClose}
//         slotProps={{
//           paper: {
//             elevation: 0,
//             sx: {
//               overflow: 'visible',
//               filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//               mt: 1.5,
//               '& .MuiAvatar-root': {
//                 width: 32,
//                 height: 32,
//                 ml: -0.5,
//                 mr: 1,
//               },
//               '&::before': {
//                 content: '""',
//                 display: 'block',
//                 position: 'absolute',
//                 top: 0,
//                 right: 14,
//                 width: 10,
//                 height: 10,
//                 bgcolor: 'background.paper',
//                 transform: 'translateY(-50%) rotate(45deg)',
//                 zIndex: 0,
//               },
//             },
//           },
//         }}
//         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//       >
//         <MenuItem onClick={()=> {handleClose(),navigate("/profile"); }} >
//           <Avatar /> Profile
//         </MenuItem>
//         <Divider />
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <Settings fontSize="small" />
//           </ListItemIcon>
//           Settings
//         </MenuItem>
//         <MenuItem onClick={handleLogout}>
//           <ListItemIcon>
//             <Logout fontSize="small" />
//           </ListItemIcon>
//           Logout
//         </MenuItem>
//       </Menu>
//     </React.Fragment>
//   );
// }


import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FaUserCircle, FaSignOutAlt, FaUserCog } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const AccountMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="focus:outline-none">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-semibold hover:scale-105 transition">
            M
          </div>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        sideOffset={8}
        className="bg-white rounded-md shadow-lg w-30 py-2 z-50 border border-gray-100 animate-fadeIn"
      >
        <DropdownMenu.Item
          onSelect={() => navigate("/profile")}
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
        >
          <FaUserCircle className="mr-2" />
          Profile
        </DropdownMenu.Item>

        <DropdownMenu.Separator className="h-px my-1 bg-gray-200" />

        <DropdownMenu.Item
          onSelect={() => navigate("/settings")}
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
        >
          <FaUserCog className="mr-2" />
          Settings
        </DropdownMenu.Item>

        <DropdownMenu.Item
          onSelect={handleLogout}
          className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer"
        >
          <FaSignOutAlt className="mr-2" />
          Logout
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default AccountMenu;
