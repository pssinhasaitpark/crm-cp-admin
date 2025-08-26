// import React from "react";
// import Sidebar from "../components/sidebar/Sidebar";
// import Header from "../Layout/Header";
// import { Outlet } from "react-router-dom";

// const DashboardPage = () => {
//   return (
//     <div style={{ display: "flex", minHeight: "100vh" }}>
//       <Sidebar />
//       <div style={{ flexGrow: 1 }}>
//         <Header />
//         <div style={{ padding: "8px 16px" }}>
//         <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;
// import React from "react";
// import Sidebar from "../components/sidebar/Sidebar";
// import Header from "../Layout/Header";
// import { Outlet } from "react-router-dom";

// const DashboardPage = () => {
//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         <Header />
//         <div className="p-4">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;
import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../Layout/Header";
import { Outlet } from "react-router-dom";

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar for Desktop */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Sidebar for Mobile (Offcanvas) */}
      <div
        className={`fixed inset-0 z-50 flex lg:hidden transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-[#00000082] bg-opacity-50"
          onClick={() => setIsSidebarOpen(false)}
        ></div>

        {/* Sidebar Drawer */}
        <div
          className={`relative bg-white dark:bg-[#1e1e1e] w-64 h-full shadow-lg transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar onLinkClick={() => setIsSidebarOpen(false)} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
