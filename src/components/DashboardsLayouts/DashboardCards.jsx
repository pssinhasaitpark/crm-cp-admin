// import React from "react";
// import { FiUsers, FiUserCheck, FiClipboard } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import CountUp from "react-countup";

// const stats = [
//   { id: 1, title: "Channel Partners", count: 236, icon: <FiUsers size={24} />, route: "/cps" },
//   { id: 2, title: "Agents", count: 87, icon: <FiUsers size={24} />, route: "/agents" },
//   { id: 3, title: "Leads", count: 198, icon: <FiClipboard size={24} />, route: "/leads" },
//   { id: 4, title: "Bookings", count: 74, icon: <FiUserCheck size={24} />, route: "/sales/bookings" },
// ];

// const StatsCards = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//       {stats.map((stat) => (
//         <div
//           key={stat.id}
//           onClick={() => navigate(stat.route)}
//           className="flex items-center justify-between border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-all cursor-pointer"
//         >
//           <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-50 text-gray-700">
//             {stat.icon}
//           </div>
//           <div className="text-right">
//             <p className="text-sm text-gray-500">{stat.title}</p>
//             <h2 className="text-xl font-semibold text-gray-900">
//               <CountUp end={stat.count} duration={2} separator="," />
//             </h2>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StatsCards;
import React from "react";
import { FiUsers, FiUserCheck, FiClipboard } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { useTheme } from "../../components/context/ThemeProvider"; // Custom hook from ThemeProvider

const stats = [
  { id: 1, title: "Channel Partners", count: 236, icon: <FiUsers size={24} />, route: "/cps" },
  { id: 2, title: "Agents", count: 87, icon: <FiUsers size={24} />, route: "/agents" },
  { id: 3, title: "Leads", count: 198, icon: <FiClipboard size={24} />, route: "/leads" },
  { id: 4, title: "Bookings", count: 74, icon: <FiUserCheck size={24} />, route: "/sales/bookings" },
];

const StatsCards = () => {
  const navigate = useNavigate();
  const { theme } = useTheme(); // light or dark

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.id}
          onClick={() => navigate(stat.route)}
          className={`flex items-center justify-between border rounded-lg p-4 shadow-sm hover:shadow-md transition-all cursor-pointer 
            ${theme === "dark" ? "bg-[#1F2937] border-gray-700 text-gray-100" : "bg-white border-gray-300 text-gray-900"}`}
        >
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-md 
            ${theme === "dark" ? "bg-[#1e1e1e] text-gray-200" : "bg-gray-50 text-gray-700"}`}
          >
            {stat.icon}
          </div>
          <div className="text-right">
            <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
              {stat.title}
            </p>
            <h2 className="text-xl font-semibold">
              <CountUp end={stat.count} duration={2} separator="," />
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
