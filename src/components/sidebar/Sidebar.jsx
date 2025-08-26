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

const mainMenu = [
  { label: "Dashboard", icon: <FiHome />, path: "/dashboard" },
  { label: "Manage Projects", icon: <FiBox />, path: "/projects" },
  { label: "Manage Agents", icon: <FiUsers />, path: "/agents" },
  { label: "Manage CPs", icon: <FiUsers />, path: "/cps" },
  { label: "Manage Leads", icon: <FiClipboard />, path: "/leads" },
];

const teamMenu = [
  { label: "Bookings", icon: <FiUserCheck />, path: "/sales/bookings" },
  { label: "Payments & Invoices", icon: <FiCreditCard />, path: "/sales/payments" },
  { label: "Wallet", icon: <FiLock />, path: "/sales/wallet" },
];

const reportMenu = [
  { label: "Leads Reports", icon: <FiBarChart2 />, path: "/reports/leads" },
  { label: "Sales Reports", icon: <FiBarChart2 />, path: "/reports/sales" },
  { label: "Payment & Commission Reports", icon: <FiBarChart2 />, path: "/reports/payments" },
];

const bottomMenu = [
  { label: "Chat & Support", icon: <FiHeadphones />, path: "/chat-support" },
  { label: "Help Center", icon: <FiHelpCircle />, path: "/help" },
  { label: "Settings", icon: <FiSettings />, path: "/settings" },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#f5f8fa] flex flex-col">
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

      <nav className="flex-1 overflow-y-auto px-2 text-sm space-y-4 mt-4">
        <Section title="Main Management" items={mainMenu} />
        <Section title="Team Management" items={teamMenu} />
        <Section title="Reports & Analytics" items={reportMenu} />
      </nav>

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
