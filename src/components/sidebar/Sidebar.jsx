// import React, { use, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
// import {
//   FiHome,
//   FiBox,
//   FiUsers,
//   FiUserCheck,
//   FiCreditCard,
//   FiClipboard,
//   FiBarChart2,
//   FiLock,
//   FiHeadphones,
//   FiHelpCircle,
//   FiSettings,
// } from "react-icons/fi";
// import { useDispatch } from "react-redux";
// import { logout } from "../../redux/slices/authSlice";
// import Dialogbox from "../dialogbox/Dialogbox";
// import { useTheme } from "../../components/context/ThemeProvider";

// // ✅ Main Management Menu
// const mainMenu = [
//   { label: "Dashboard", icon: <FiHome />, path: "/dashboard" },
//   { label: "Manage Projects", icon: <FiBox />, path: "/projects" },
//   { label: "Manage Agents", icon: <FiUsers />, path: "/agents" },
//   { label: "Manage CPs", icon: <FiUsers />, path: "/cps" },
//   { label: "Manage Leads", icon: <FiClipboard />, path: "/leads" },
// ];

// // ✅ Team Management (Sales)
// const teamMenu = [
//   { label: "Bookings", icon: <FiUserCheck />, path: "/sales/bookings" },
//   { label: "Payments & Invoices", icon: <FiCreditCard />, path: "/sales/payments" },
//   { label: "Wallet", icon: <FiLock />, path: "/sales/wallet" },
// ];

// // ✅ Reports & Analytics
// const reportMenu = [
//   { label: "Leads Reports", icon: <FiBarChart2 />, path: "/reports/leads" },
//   { label: "Sales Reports", icon: <FiBarChart2 />, path: "/reports/sales" },
//   { label: "Payment & Commission Reports", icon: <FiBarChart2 />, path: "/reports/payments" },
// ];

// // ✅ Bottom Menu
// const bottomMenu = [
//   { label: "Chat & Support", icon: <FiHeadphones />, path: "/chat-support" },
//   { label: "Help Center", icon: <FiHelpCircle />, path: "/help" },
//   { label: "Settings", icon: <FiSettings />, path: "/settings" },
// ];

// export default function Sidebar() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
// const [logoutOpen, setLogoutOpen] = useState(false);
//   const { theme } = useTheme();
//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };
//    const isDark = theme === "dark";
//   return (
//     <div className="w-64 h-screen bg-[#f5f8fa] flex flex-col">
//       {/* ✅ Profile Section with Radix Dropdown */}
//       <DropdownMenu.Root>
//         <DropdownMenu.Trigger asChild>
//           <button className="flex items-center gap-3 p-4 hover:bg-gray-100 cursor-pointer">
//             <img
//               src="https://i.pravatar.cc/40"
//               alt="avatar"
//               className="w-10 h-10 rounded-full"
//             />
//             <div className="flex flex-col text-left">
//               <span className="font-medium text-sm text-gray-500">James Robert Wilson</span>
//               <span className="text-xs text-gray-500">james@pipeline.id</span>
//             </div>
//           </button>
//         </DropdownMenu.Trigger>

//         <DropdownMenu.Content
//           className="bg-white shadow-md rounded-md p-2 w-48"
//           sideOffset={8}
//         >
//           <DropdownMenu.Item className="p-2 hover:bg-gray-100 cursor-pointer text-sm">
//             Profile
//           </DropdownMenu.Item>
//           <DropdownMenu.Item className="p-2 hover:bg-gray-100 cursor-pointer text-sm">
//             Settings
//           </DropdownMenu.Item>
//           <DropdownMenu.Item   onSelect={() => setLogoutOpen(true)} className="p-2 hover:bg-gray-100 cursor-pointer text-sm text-red-600">
//             Logout
//           </DropdownMenu.Item>
//         </DropdownMenu.Content>
//       </DropdownMenu.Root>
//        {/* Logout confirmation dialog */}
//       <Dialogbox
//         open={logoutOpen}
//         setOpen={setLogoutOpen}
//         title="Confirm Logout"
//         description="Are you sure you want to logout?"
//         onConfirm={handleLogout}
//       />

//       {/* ✅ Navigation */}
//       <nav className="flex-1 overflow-y-auto px-2 text-sm space-y-4 mt-4">
//         {/* Main Management */}
//         <Section title="Main Management" items={mainMenu} />

//         {/* Team Management */}
//         <Section title="Team Management" items={teamMenu} />

//         {/* Reports & Analytics */}
//         <Section title="Reports & Analytics" items={reportMenu} />
//       </nav>

//       {/* ✅ Bottom Section */}
//       <div className="p-3 space-y-2">
//         <h3 className="text-xs font-semibold text-gray-400 px-2 mb-2 uppercase">
//           Other
//         </h3>
//         {bottomMenu.map((item, i) => (
//           <MenuLink key={i} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// }

// // ✅ Section Component
// function Section({ title, items }) {
//   return (
//     <div>
//       <h3 className="text-xs font-semibold text-gray-400 px-2 mb-2 uppercase">
//         {title}
//       </h3>
//       {items.map((item, i) => (
//         <MenuLink key={i} {...item} />
//       ))}
//     </div>
//   );
// }

// // ✅ Menu Link Component
// function MenuLink({ icon, label, path }) {
//   return (
//     <NavLink
//       to={path}
//       className={({ isActive }) =>
//         `flex items-center gap-3 p-2 rounded hover:bg-gray-100 transition mb-0 ${
//           isActive ? "bg-gray-200 font-semibold text-blue-600" : "text-gray-700"
//         }`
//       }
//     >
//       {icon && <span className="text-lg">{icon}</span>}
//       <span className="text-sm"> {label}</span>
//     </NavLink>
//   );
// }
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  FiHome,
  FiBox,
  FiUsers,
  FiUserCheck,
  FiCreditCard,
  FiClipboard,
  FiBarChart2,
  FiLock,
  FiHeadphones,
  FiHelpCircle,
  FiSettings,
} from "react-icons/fi";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import Dialogbox from "../dialogbox/Dialogbox";
import { useTheme } from "../../components/context/ThemeProvider"; // ✅ Use custom theme provider

// ✅ Main Management Menu
const mainMenu = [
  { label: "Dashboard", icon: <FiHome />, path: "/dashboard" },
  { label: "Manage Projects", icon: <FiBox />, path: "/projects" },
  { label: "Manage Agents", icon: <FiUsers />, path: "/agents" },
  { label: "Manage CPs", icon: <FiUsers />, path: "/cps" },
  { label: "Manage Leads", icon: <FiClipboard />, path: "/leads" },
];

// ✅ Team Management (Sales)
const teamMenu = [
  { label: "Bookings", icon: <FiUserCheck />, path: "/sales/bookings" },
  { label: "Payments & Invoices", icon: <FiCreditCard />, path: "/sales/payments" },
  { label: "Wallet", icon: <FiLock />, path: "/sales/wallet" },
];

// ✅ Reports & Analytics
const reportMenu = [
  { label: "Leads Reports", icon: <FiBarChart2 />, path: "/reports/leads" },
  { label: "Sales Reports", icon: <FiBarChart2 />, path: "/reports/sales" },
  { label: "Payment & Commission Reports", icon: <FiBarChart2 />, path: "/reports/payments" },
];

// ✅ Bottom Menu
const bottomMenu = [
  { label: "Chat & Support", icon: <FiHeadphones />, path: "/chat-support" },
  { label: "Help Center", icon: <FiHelpCircle />, path: "/help" },
  { label: "Settings", icon: <FiSettings />, path: "/settings" },
];

export default function Sidebar({ onLinkClick }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutOpen, setLogoutOpen] = useState(false);

  const { theme } = useTheme(); // ✅ Current theme

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const isDark = theme === "dark";

  return (
    <div
      className={`w-64 h-screen flex flex-col transition-colors duration-300 ${
        isDark ? "bg-[#1e1e1e] text-white border-r border-gray-700" : "bg-[#f5f8fa] text-gray-900"
      }`}
    >
      {/* ✅ Profile Section with Radix Dropdown */}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className={`flex items-center gap-3 p-4 cursor-pointer rounded-md ${
              isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
            }`}
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col text-left">
              <span
                className={`font-medium text-sm ${
                  isDark ? "text-gray-200" : "text-gray-600"
                }`}
              >
                James Robert Wilson
              </span>
              <span
                className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
              >
                james@pipeline.id
              </span>
            </div>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          className={`shadow-md rounded-md p-2 w-48 ${
            isDark ? "bg-[#2a2a2a] text-gray-200" : "bg-white text-gray-800"
          }`}
          sideOffset={8}
        >
          <DropdownMenu.Item
            className={`p-2 cursor-pointer text-sm rounded ${
              isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className={`p-2 cursor-pointer text-sm rounded ${
              isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            Settings
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onSelect={() => setLogoutOpen(true)}
            className={`p-2 cursor-pointer text-sm rounded ${
              isDark
                ? "hover:bg-gray-700 text-red-400"
                : "hover:bg-gray-100 text-red-600"
            }`}
          >
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      {/* Logout confirmation dialog */}
      <Dialogbox
        open={logoutOpen}
        setOpen={setLogoutOpen}
        title="Confirm Logout"
        description="Are you sure you want to logout?"
        onConfirm={handleLogout}
      />

      {/* ✅ Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 text-sm space-y-4 mt-4">
        {/* Main Management */}
        <Section title="Main Management" items={mainMenu} isDark={isDark} onLinkClick={onLinkClick}/>

        {/* Team Management */}
        <Section title="Team Management" items={teamMenu} isDark={isDark} onLinkClick={onLinkClick}/>

        {/* Reports & Analytics */}
        <Section title="Reports & Analytics" items={reportMenu} isDark={isDark} onLinkClick={onLinkClick}/>
      </nav>

      {/* ✅ Bottom Section */}
      <div className="p-3 space-y-2">
        <h3
          className={`text-xs font-semibold px-2 mb-2 uppercase ${
            isDark ? "text-gray-400" : "text-gray-400"
          }`}
        >
          Other
        </h3>
        {bottomMenu.map((item, i) => (
          <MenuLink key={i} {...item} isDark={isDark} />
        ))}
      </div>
    </div>
  );
}

// ✅ Section Component
function Section({ title, items, isDark ,onLinkClick}) {
  return (
    <div>
      <h3
        className={`text-md font-semibold px-2 mb-2 uppercase ${
          isDark ? "text-gray-400" : "text-gray-400"
        }`}
      >
        {title}
      </h3>
      {items.map((item, i) => (
        <MenuLink key={i} {...item} isDark={isDark}  onClick={onLinkClick} />
      ))}
    </div>
  );
}

// ✅ Menu Link Component
function MenuLink({ icon, label, path, isDark ,onClick}) {
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-3 p-2 rounded transition mb-0 ${
          isActive
            ? isDark
              ? "bg-gray-700 text-blue-400 font-semibold"
              : "bg-gray-200 text-blue-600 font-semibold"
            : isDark
            ? "text-gray-300 hover:bg-gray-800"
            : "text-gray-700 hover:bg-gray-100"
        }`
      }
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span className="text-lg"> {label}</span>
    </NavLink>
  );
}
