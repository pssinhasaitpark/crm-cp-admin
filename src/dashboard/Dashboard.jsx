import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../Layout/Header";
import { Outlet } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <Header />
        <div style={{ padding: "8px 16px" }}>
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
