// import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./dashboard/Dashboard";
import DashboardCards from "./components/DashboardsLayouts/DashboardCards";
import {
  SignUp,
  Login,
  PayrollDashboard,
  Performance,
  Messages,
  Candidate,
  Jobs,
  Resume,
  EmployeeDetails,
  EmployeeDashboard,
  LeaveDashboard,
} from "./pages/index.js";
import ProtectedRoute from "./routes/ProtectedRoutes/ProtectedRoute.jsx";
import Profile from "./pages/profile/Profile.jsx";
import  { Toaster } from 'react-hot-toast';
import Projects from "./pages/projects/Projects.jsx";
import ChannelPartners from "./pages/channelPartners/ChannelPartners.jsx";
function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/"  element={ <ProtectedRoute>  <DashboardPage /> </ProtectedRoute>} >
          <Route index element={<DashboardCards />} />
          <Route path="employees" element={<EmployeeDashboard />} />
          <Route path="employees/:id" element={<EmployeeDetails />} />
          <Route path="leaves" element={<LeaveDashboard />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="resumes" element={<Resume />} />
          <Route path="candidates" element={<Candidate />} />
          <Route path="messages" element={<Messages />} />
          <Route path="performance" element={<Performance />} />
          <Route path="payroll" element={<PayrollDashboard />} />
          <Route path="profile" element={<Profile />} />
                 {/*  Connect Sidebar Routes */}
          <Route path="dashboard" element={<DashboardCards />} />
          <Route path="projects" element={<Projects />} /> {/* Example placeholder */}
          <Route path="agents" element={<Jobs />} />
          <Route path="cps" element={<ChannelPartners />} />
          <Route path="leads" element={<Profile />} />

          {/* Sales (Team Management) */}
          <Route path="sales/bookings" element={<Candidate />} />
          <Route path="sales/payments" element={<PayrollDashboard />} />
          <Route path="sales/wallet" element={<Performance />} />

          {/* Reports */}
          <Route path="reports/leads" element={<DashboardCards />} />
          <Route path="reports/sales" element={<DashboardCards />} />
          <Route path="reports/payments" element={<DashboardCards />} />

          {/* Other */}
          <Route path="chat-support" element={<Messages />} />
          <Route path="help" element={<Profile />} />
          <Route path="settings" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
