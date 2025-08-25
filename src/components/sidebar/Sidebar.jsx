// // // import React from "react";
// // // import { NavLink } from "react-router-dom";
// // // import { FaTachometerAlt, FaUserFriends, FaUserTie, FaUsers, FaSignOutAlt } from "react-icons/fa";
// // // import logo from "../../assets/Img/logo.png";
// // // import { logout } from "../../redux/slices/authSlice";
// // // import { useDispatch } from "react-redux";


// // // const navSections = (unreadMessages) => [
// // //   {
// // //     items: [
// // //       { label: "Dashboard", path: "/", icon: <FaTachometerAlt size={20} /> },
// // //       {
// // //         label: "Channel Partners",
// // //         path: "/channel-partners",
// // //         icon: <FaUserFriends size={20} />,
// // //         badge: unreadMessages,
// // //       },
// // //       {
// // //         label: "Agents",
// // //         path: "/agents",
// // //         icon: <FaUserTie size={20} />,
// // //       },
// // //       {
// // //         label: "Leads",
// // //         path: "/leads",
// // //         icon: <FaUsers size={20} />,
// // //       },
// // //     ],
// // //   },
// // // ];


// // // const Sidebar = ({ user = {}, unreadMessages = 0 }) => {
// // //   const dispatch = useDispatch();
// // //   const { name = "User", role = "", avatarUrl = "" } = user;
// // // const handleLogout = () => {
// // //     dispatch(logout());
// // //     navigate("/login");
// // //   };
// // //   return (
// // //     <aside className="w-72 h-screen bg-blue-600 text-white flex flex-col">
// // //       {/* Logo */}
// // //       <div className="flex items-center justify-center">
// // //       <div className="p-1 flex items-center justify-center tracking-wide w-[150px] h-[90px]">
// // //         <img src={logo} alt="Logo" className="object-cover w-full h-full" />
// // //       </div>
// // //       </  div>

// // //       <div className="border-b border-blue-400"></div>

// // //       {/* Navigation */}
// // //       <nav className="flex-1 overflow-y-auto">
// // //         {navSections(unreadMessages).map((section, index) => (
// // //           <div key={index} className="mt-4">
// // //             {section.items.map(({ label, path, icon, badge }) => (
// // //               <NavLink
// // //                 key={path}
// // //                 to={path}
// // //                 className={({ isActive }) =>
// // //                   `flex items-center px-4 py-3 text-base ${
// // //                     isActive ? "bg-yellow-400 text-black" : ""
// // //                   }`
// // //                 }
// // //               >
// // //                 <span className="mr-4 text-2xl">{icon}</span>
// // //                 <span className="flex-1 text-xl">{label}</span>
// // //                 {badge > 0 && (
// // //                   <span className="ml-auto bg-white text-blue-600 text-xs font-bold rounded-full px-2">
// // //                     {badge}
// // //                   </span>
// // //                 )}
// // //               </NavLink>
// // //             ))}
// // //           </div>
// // //         ))}
// // //       </nav>

// // //       {/* Logout */}
// // //       <div className="p-4">
// // //         <button onClick={handleLogout} className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg text-lg cursor-pointer">
// // //           <FaSignOutAlt className="mr-2 text-xl" /> Log Out
// // //         </button>
// // //       </div>
// // //     </aside>
// // //   );
// // // };

// // // export default Sidebar;
// // import { useState } from "react";
// // import { FiHome, FiBox, FiShoppingCart, FiUsers, FiSettings, FiPackage } from "react-icons/fi";
// // import { BsGrid, BsTruck } from "react-icons/bs";

// // const Sidebar = () => {
// //   const [active, setActive] = useState("Dashboard");

// //   const menuItems = [
// //     { name: "Dashboard", icon: <FiHome /> },
// //     { name: "Milestone", icon: <BsGrid /> },
// //     { name: "Orders", icon: <FiShoppingCart /> },
// //     { name: "Inventory", icon: <FiPackage /> },
// //     { name: "Shipments", icon: <BsTruck /> },
// //     { name: "Supplies", icon: <FiBox /> },
// //   ];

// //   const teamItems = [
// //     { name: "Product", icon: <FiBox /> },
// //     { name: "Sales Center", icon: <FiUsers /> },
// //   ];

// //   const libraryItems = [
// //     { name: "Sizes", icon: <FiSettings /> },
// //     { name: "Colors", icon: <FiSettings /> },
// //     { name: "Samples", icon: <FiSettings /> },
// //   ];

// //   return (
// //     <div className="w-64 h-screen bg-white shadow-md flex flex-col">
// //       {/* Profile Section */}
// //       <div className="p-4 flex items-center space-x-3 border-b">
// //         <img
// //           src="https://i.pravatar.cc/40"
// //           alt="Profile"
// //           className="w-10 h-10 rounded-full"
// //         />
// //         <div>
// //           <h2 className="font-semibold text-gray-800 text-sm">James Robert Wilson</h2>
// //           <p className="text-xs text-gray-500">jamjames@pipeline.id</p>
// //         </div>
// //       </div>

// //       {/* Search */}
// //       <div className="p-4">
// //         <input
// //           type="text"
// //           placeholder="Search"
// //           className="w-full p-2 border rounded-lg text-sm"
// //         />
// //       </div>

// //       {/* Main Menu */}
// //       <div className="flex-1 overflow-y-auto">
// //         <div className="px-4 text-gray-400 text-xs font-semibold">MAIN MENU</div>
// //         <ul className="mt-2">
// //           {menuItems.map((item) => (
// //             <li
// //               key={item.name}
// //               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 ${
// //                 active === item.name ? "bg-gray-200 font-semibold" : ""
// //               }`}
// //               onClick={() => setActive(item.name)}
// //             >
// //               <span className="text-lg">{item.icon}</span>
// //               {item.name}
// //             </li>
// //           ))}
// //         </ul>

// //         {/* Team Management */}
// //         <div className="px-4 mt-4 text-gray-400 text-xs font-semibold">TEAM MANAGEMENT</div>
// //         <ul className="mt-2">
// //           {teamItems.map((item) => (
// //             <li
// //               key={item.name}
// //               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 ${
// //                 active === item.name ? "bg-gray-200 font-semibold" : ""
// //               }`}
// //               onClick={() => setActive(item.name)}
// //             >
// //               <span className="text-lg">{item.icon}</span>
// //               {item.name}
// //             </li>
// //           ))}
// //         </ul>

// //         {/* Libraries */}
// //         <div className="px-4 mt-4 text-gray-400 text-xs font-semibold">LIBRARIES</div>
// //         <ul className="mt-2">
// //           {libraryItems.map((item) => (
// //             <li
// //               key={item.name}
// //               className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 ${
// //                 active === item.name ? "bg-gray-200 font-semibold" : ""
// //               }`}
// //               onClick={() => setActive(item.name)}
// //             >
// //               <span className="text-lg">{item.icon}</span>
// //               {item.name}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Sidebar;
// import React from "react";
// import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
// import * as Accordion from "@radix-ui/react-accordion";
// import {
//   FiSearch,
//   FiHome,
//   FiBox,
//   FiLayers,
//   FiHelpCircle,
//   FiSettings,
//   FiMessageCircle,
//   FiHeadphones,
// } from "react-icons/fi";

// export default function Sidebar() {
//   return (
//     <div className="w-64 h-screen bg-[#f5f8fa] flex flex-col">
//       {/* Profile Section */}
//       <DropdownMenu.Root>
//         <DropdownMenu.Trigger asChild>
//           <button className="flex items-center gap-3 p-4 hover:bg-gray-100 cursor-pointer">
//             <img
//               src="https://i.pravatar.cc/40"
//               alt="avatar"
//               className="w-10 h-10 rounded-full"
//             />
//             <div className="flex flex-col text-left">
//               <span className="font-medium text-sm">James Robert Wilson</span>
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
//           <DropdownMenu.Item className="p-2 hover:bg-gray-100 cursor-pointer text-sm">
//             Logout
//           </DropdownMenu.Item>
//         </DropdownMenu.Content>
//       </DropdownMenu.Root>

//       {/* Main Menu */}
//       <nav className="flex-1 overflow-y-auto px-2 text-sm mt-3">
//         <div className="space-y-1">
//           <MenuItem icon={<FiHome />} label="Dashboard" />
//           <MenuItem icon={<FiBox />} label="Orders" />
//           <MenuItem icon={<FiLayers />} label="Inventory" />

//           {/* Accordion for Libraries */}
//           <Accordion.Root type="single" collapsible>
//             <Accordion.Item value="libraries">
//               <Accordion.Trigger className="w-full flex justify-between items-center p-2 rounded hover:bg-gray-100">
//                 <span className="flex items-center gap-3">
//                   <FiLayers /> Libraries
//                 </span>
//                 <span className="text-gray-400">+</span>
//               </Accordion.Trigger>
//               <Accordion.Content className="pl-10 space-y-2 py-2">
//                 <MenuItem label="Sizes" />
//                 <MenuItem label="Colors" />
//                 <MenuItem label="Samples" />
//               </Accordion.Content>
//             </Accordion.Item>
//           </Accordion.Root>

//           <MenuItem icon={<FiSettings />} label="Settings" />
//         </div>
//       </nav>

//       {/* Bottom Section */}
//       <div className="p-3 space-y-2">
//         {/* <MenuItem icon={<FiMessageCircle />} label="Chat" /> */}
//         <MenuItem icon={<FiHeadphones />} label="Chat & Support" />
//         <MenuItem icon={<FiHelpCircle />} label="Help Center" />
//       </div>
//     </div>
//   );
// }

// function MenuItem({ icon, label }) {
//   return (
//     <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
//       {icon && <span className="text-lg">{icon}</span>}
//       <span>{label}</span>
//     </div>
//   );
// }
// import React from "react";
// import { NavLink } from "react-router-dom";
// import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
// import * as Accordion from "@radix-ui/react-accordion";
// import {
//   FiSearch,
//   FiHome,
//   FiBox,
//   FiLayers,
//   FiHelpCircle,
//   FiSettings,
//   FiUsers,
//   FiUserCheck,
//   FiLock,
//   FiMessageCircle,
//   FiHeadphones,
// } from "react-icons/fi";

// const mainMenu = [
//   { label: "Dashboard", icon: <FiHome />, path: "/dashboard" },
//   { label: "Manage Projects", icon: <FiBox />, path: "/projects" },
//   { label: "Manage Agents", icon: <FiLayers />, path: "/agents" },
//   { label: "Manage CPs", icon: <FiLayers />, path: "/cps" },
//   { label: "Manage Leads", icon: <FiLayers />, path: "/leads" },
//   // { label: "Manage Clients", icon: <FiLayers />, path: "/clients" },
// ];

// const salesMenu = [
//   { label: "Bookings", icon: <FiUsers />, path: "/sales/bookings" },
//   { label: "Payments & Invoices", icon: <FiUserCheck />, path: "/sales/payments" },
//   { label: "Wallet", icon: <FiLock />, path: "/sales/wallet" },
// ];

// const reportMenu = [
//   { label: "Leads Reports", icon: <FiUsers />, path: "/reports/bookings" },
//   { label: "Sales Reports", icon: <FiUserCheck />, path: "/reports/payments" },
//   { label: "Payment & Commission Reports", icon: <FiLock />, path: "/reports/wallet" },
// ];
// const bottomMenu = [
//   // { label: "Chat", icon: <FiMessageCircle />, path: "/chat" },
//   { label: "Chat & Support", icon: <FiHeadphones />, path: "/chat-support" },
//   { label: "Help Center", icon: <FiHelpCircle />, path: "/help" },
// ];

// export default function Sidebar() {
//   return (
//     <div className="w-64 h-screen bg-[#f5f8fa]  flex flex-col">
//       {/* Profile Section */}
//       <DropdownMenu.Root>
//         <DropdownMenu.Trigger asChild>
//           <button className="flex items-center gap-3 p-4 hover:bg-gray-100 cursor-pointer">
//             <img
//               src="https://i.pravatar.cc/40"
//               alt="avatar"
//               className="w-10 h-10 rounded-full"
//             />
//             <div className="flex flex-col text-left">
//               <span className="font-medium text-sm">James Robert Wilson</span>
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
//           <DropdownMenu.Item className="p-2 hover:bg-gray-100 cursor-pointer text-sm">
//             Logout
//           </DropdownMenu.Item>
//         </DropdownMenu.Content>
//       </DropdownMenu.Root>

//       {/* Navigation */}
//       <nav className="flex-1 overflow-y-auto px-2 text-sm space-y-4 mt-4">
//         {/* Main Management */}
//         <div>
//           <h3 className="text-xs font-semibold text-gray-400 px-2 mb-2 uppercase">
//             Main Management
//           </h3>
//           {mainMenu.map((item, i) => (
//             <MenuLink key={i} {...item} />
//           ))}
//           {/* <MenuLink icon={<FiSettings />} label="Settings" path="/settings" /> */}
//         </div>

//         {/* Team Management */}
//         <div>
//           <h3 className="text-xs font-semibold text-gray-400 px-2 mb-2 uppercase">
//             Team Management
//           </h3>
//           {salesMenu.map((item, i) => (
//             <MenuLink key={i} {...item} />
//           ))}
//         </div>
//           <div>
//           <h3 className="text-xs font-semibold text-gray-400 px-2 mb-2 uppercase">
//             Reports & Analytics
//           </h3>
//           {reportMenu.map((item, i) => (
//             <MenuLink key={i} {...item} />
//           ))}
//         </div>
//       </nav>

//       {/* Bottom Section */}
//       <div className="p-3 space-y-2">
//         <h3 className="text-xs font-semibold text-gray-400 px-2 mb-2 uppercase">
//             Other
//           </h3>
//         {bottomMenu.map((item, i) => (
//           <MenuLink key={i} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function MenuLink({ icon, label, path, noIcon }) {
//   return (
//     <NavLink
//       to={path}
//       className={({ isActive }) =>
//         `flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer ${
//           isActive ? "bg-gray-100 font-semibold text-blue-600" : ""
//         }`
//       }
//     >
//       {!noIcon && icon && <span className="text-lg">{icon}</span>}
//       <span>{label}</span>
//     </NavLink>
//   );
// }
import React from "react";
import { NavLink } from "react-router-dom";
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

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#f5f8fa] flex flex-col">
      {/* ✅ Profile Section with Radix Dropdown */}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="flex items-center gap-3 p-4 hover:bg-gray-100 cursor-pointer">
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col text-left">
              <span className="font-medium text-sm">James Robert Wilson</span>
              <span className="text-xs text-gray-500">james@pipeline.id</span>
            </div>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          className="bg-white shadow-md rounded-md p-2 w-48"
          sideOffset={8}
        >
          <DropdownMenu.Item className="p-2 hover:bg-gray-100 cursor-pointer text-sm">
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item className="p-2 hover:bg-gray-100 cursor-pointer text-sm">
            Settings
          </DropdownMenu.Item>
          <DropdownMenu.Item className="p-2 hover:bg-gray-100 cursor-pointer text-sm text-red-600">
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      {/* ✅ Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 text-sm space-y-4 mt-4">
        {/* Main Management */}
        <Section title="Main Management" items={mainMenu} />

        {/* Team Management */}
        <Section title="Team Management" items={teamMenu} />

        {/* Reports & Analytics */}
        <Section title="Reports & Analytics" items={reportMenu} />
      </nav>

      {/* ✅ Bottom Section */}
      <div className="p-3 space-y-2">
        <h3 className="text-xs font-semibold text-gray-400 px-2 mb-2 uppercase">
          Other
        </h3>
        {bottomMenu.map((item, i) => (
          <MenuLink key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

// ✅ Section Component
function Section({ title, items }) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-gray-400 px-2 mb-2 uppercase">
        {title}
      </h3>
      {items.map((item, i) => (
        <MenuLink key={i} {...item} />
      ))}
    </div>
  );
}

// ✅ Menu Link Component
function MenuLink({ icon, label, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center gap-3 p-2 rounded hover:bg-gray-100 transition mb-0 ${
          isActive ? "bg-gray-200 font-semibold text-blue-600" : "text-gray-700"
        }`
      }
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span className="text-sm"> {label}</span>
    </NavLink>
  );
}
