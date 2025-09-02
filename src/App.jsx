// import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./dashboard/Dashboard";
import DashboardCards from "./components/DashboardsLayouts/DashboardCards";
import {
  SignUp,
  Login,
  // PayrollDashboard,
  Performance,
  Messages,
  Candidate,
  Agents,
  Resume,
  EmployeeDetails,
  EmployeeDashboard,
  LeaveDashboard,
  AgentsLead
} from "./pages/index.js";
import ProtectedRoute from "./routes/ProtectedRoutes/ProtectedRoute.jsx";
import Leads from "./pages/leads/Leads.jsx";
import  { Toaster } from 'react-hot-toast';
import "./app.css"
import Projects from "./pages/projects/Projects.jsx";
import ChannelPartners from "./pages/channelPartners/ChannelPartners.jsx";
import BookingList from "./pages/candidate/Candidate.jsx";
import PaymentAndInvoice from "./pages/paymentInvoice/PaymentAndInvoice.jsx";
import NotFound from "./pages/pageNotFound/PageNotFound.jsx";
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
          <Route path="jobs" element={<Agents />} />
          <Route path="resumes" element={<Resume />} />
          <Route path="candidates" element={<Candidate />} />
          <Route path="messages" element={<Messages />} />
          <Route path="performance" element={<Performance />} />
          {/* <Route path="payroll" element={<PayrollDashboard />} /> */}
          <Route path="profile" element={<Leads />} />
                 {/*  Connect Sidebar Routes */}
          <Route path="dashboard" element={<DashboardCards />} />
          <Route path="projects" element={<Projects />} /> {/* Example placeholder */}
          <Route path="agents" element={<Agents />} />
          <Route path="agents/:agentIdx/leads" element={<AgentsLead />} />
          <Route path="cps" element={<ChannelPartners />} />
          <Route path="leads" element={<Leads />} />

          {/* Sales (Team Management) */}
          <Route path="sales/bookings" element={<BookingList />} />
          <Route path="sales/payments" element={<PaymentAndInvoice />} />
          <Route path="sales/wallet" element={<Performance />} />

          {/* Reports */}
          <Route path="reports/leads" element={<DashboardCards />} />
          <Route path="reports/sales" element={<DashboardCards />} />
          <Route path="reports/payments" element={<DashboardCards />} />

          {/* Other */}
          <Route path="chat-support" element={<Messages />} />
          <Route path="help" element={<Leads />} />
          <Route path="settings" element={<Leads />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
