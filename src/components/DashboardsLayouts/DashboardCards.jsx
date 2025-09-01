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
import React, { useEffect, useState } from "react";
import { FiUsers, FiUserCheck, FiClipboard } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { useTheme } from "../../components/context/ThemeProvider"; // Custom hook from ThemeProvider
import ChannelPartners from "../../pages/channelPartners/ChannelPartners";
import Projects from "../../pages/projects/Projects";
import { Jobs } from "../../pages";
import Profile from "../../pages/profile/Profile";
import { fetchChannelPartners } from "../../redux/slices/channelPartnersSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeads } from "../../redux/slices/leadsSlice";
import { fetchAgents } from "../../redux/slices/agentSlice";
import { useMemo } from "react";


const components = [Projects, Jobs, ChannelPartners, Profile];
const StatsCards = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const dispatch = useDispatch();
 
  // Correct Redux state access
  const { pagination: cpPagination } = useSelector((state) => state.channelPartners);
  const { pagination: leadPagination } = useSelector((state) => state.leads);
  const { pagination: agentPagination } = useSelector((state) => state.agents);

  const cpCount = cpPagination?.totalItems || 0;
  const leadCount = leadPagination?.totalItems || 0;
  const agentCount = agentPagination?.totalItems || 0;

  // Fetch data only on mount if empty
  useEffect(() => {
    if (cpCount === 0) dispatch(fetchChannelPartners());
    if (agentCount === 0) dispatch(fetchAgents());
    if (leadCount === 0) dispatch(fetchLeads());
  }, [dispatch]);

  // const stats = [
  //   {
  //     id: 1,
  //     title: "Channel Partners",
  //     count: cpCount || cptotal,
  //     icon: <FiUsers size={24} />,
  //     route: "/cps",
  //   },
  //   {
  //     id: 2,
  //     title: "Agents",
  //     count: agentCount || agenttotal,
  //     icon: <FiUsers size={24} />,
  //     route: "/agents",
  //   },
  //   {
  //     id: 3,
  //     title: "Leads",
  //     count: leadCount || leadtotal,
  //     icon: <FiClipboard size={24} />,
  //     route: "/leads",
  //   },
  //   {
  //     id: 4,
  //     title: "Bookings",
  //     count: 74,
  //     icon: <FiUserCheck size={24} />,
  //     route: "/sales/bookings",
  //   },
  // ];
  // Memoized stats to prevent recalculations

  // Memoized stats
  const stats = useMemo(() => [
    {
      id: 1,
      title: "Channel Partners",
      count: cpCount,
      icon: <FiUsers size={24} />,
      route: "/cps",
    },
    {
      id: 2,
      title: "Agents",
      count: agentCount,
      icon: <FiUsers size={24} />,
      route: "/agents",
    },
    {
      id: 3,
      title: "Leads",
      count: leadCount,
      icon: <FiClipboard size={24} />,
      route: "/leads",
    },
    {
      id: 4,
      title: "Bookings",
      count: 74,
      icon: <FiUserCheck size={24} />,
      route: "/sales/bookings",
    },
  ], [cpCount, agentCount, leadCount]);
  
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            onClick={() => navigate(stat.route)}
            className={`flex items-center justify-between border rounded-lg p-4 shadow-sm hover:shadow-md transition-all cursor-pointer 
            ${
              theme === "dark"
                ? "bg-[#1F2937] border-gray-700 text-gray-100"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          >
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-md 
            ${
              theme === "dark"
                ? "bg-[#1e1e1e] text-gray-200"
                : "bg-gray-50 text-gray-700"
            }`}
            >
              {stat.icon}
            </div>
            <div className="text-right">
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {stat.title}
              </p>
              <h2 className="text-xl font-semibold">
                <CountUp end={stat.count} duration={2} separator="," />
              </h2>
            </div>
          </div>
        ))}
      </div>
      <ChannelPartners />
      <Jobs />
      <Profile />
      <Projects />
    </>
  );
};

export default StatsCards;
