// import React from 'react'
// import Table from '../../components/table/Table';
// import data from '../../utils/Projects'

// const columns = [
//   { key: "name", label: "Name" },
//   { key: "opportunity", label: "Opportunity" },
//   {
//     key: "status",
//     label: "Status",
//     render: (value) => (
//       <span
//         className={`px-2 py-1 text-xs rounded-full font-medium ${
//           value === "Active"
//             ? "bg-green-100 text-green-700"
//             : "bg-red-100 text-red-700"
//         }`}
//       >
//         {value}
//       </span>
//     ),
//   },
//   { key: "memberId", label: "Member ID" },
//   { key: "date", label: "Date" },
//   { key: "tags", label: "Tags" },
//   { key: "action", label: "Action" },

// ];
// const Jobs = () => {

//   return (
//     <div className="min-h-auto bg-gray-50 p-6">
//     <h1 className="text-2xl font-bold mb-4">Manage Projects</h1>
//     <Table data={data} columns={columns}/>
//   </div>
//   )
// }

// export default Jobs

// import React from 'react';
// import Table from '../../components/table/Table';
// import data from '../../utils/Projects';
// import { FiEdit, FiTrash2 } from 'react-icons/fi';
// import DataTableComponent from '../../components/table/Table';

// // const columns = [
// //   { key: "name", label: "Name" },
// //   { key: "opportunity", label: "Opportunity" },
// //   { key: "status", label: "Status" },
// //   { key: "memberId", label: "Member ID" },
// //   { key: "date", label: "Date" },
// //   { key: "tags", label: "Tags" },
// //   {
// //     key: "action",
// //     label: "Action",
// //     render: (_, row) => (
// //       <div className="flex gap-2">
// //         <button
// //           title="Edit"
// //           onClick={() => console.log("Edit", row)}
// //           className="text-blue-500 hover:text-blue-700 cursor-pointer"
// //         >
// //           <FiEdit />
// //         </button>
// //         <button
// //           title="Delete"
// //           onClick={() => console.log("Delete", row)}
// //           className="text-red-500 hover:text-red-700 cursor-pointer"
// //         >
// //           <FiTrash2 />
// //         </button>
// //       </div>
// //     )
// //   }
// // ];

// const columns = [
//   { key: "name", label: "Name", selector: (row) => row.name, sortable: true },
//   { key: "opportunity", label: "Opportunity", selector: (row) => row.opportunity },
//   { key: "status", label: "Status", selector: (row) => row.status },
//   { key: "memberId", label: "Member ID", selector: (row) => row.memberId },
//   { key: "date", label: "Date", selector: (row) => row.date },
//   { key: "tags", label: "Tags", selector: (row) => row.tags },
//   {
//     key: "action",
//     label: "Action",
//     render: (_, row) => (
//       <div className="flex gap-2">
//         <button
//           title="Edit"
//           onClick={() => console.log("Edit", row)}
//           className="text-blue-500 hover:text-blue-700 cursor-pointer"
//         >
//           <FiEdit />
//         </button>
//         <button
//           title="Delete"
//           onClick={() => console.log("Delete", row)}
//           className="text-red-500 hover:text-red-700 cursor-pointer"
//         >
//           <FiTrash2 />
//         </button>
//       </div>
//     ),
//   },
// ];

// const Jobs = () => {
//   return (
//     // <div className="min-h-auto bg-gray-50 p-6">
//     //   <h1 className="text-2xl font-bold mb-4">Manage Projects</h1>
//     //   <Table data={data} columns={columns} />
//     // </div>

//     <div className="min-h-auto bg-gray-50 p-6">
//     <DataTableComponent
//       data={data}
//       columns={columns}
//       title="User Table"
//       filterByStatus={true}
//       onAdd={() => alert("Add new")}
//       onExport={() => alert("Export clicked")}
//       onDownload={() => alert("Download CSV clicked")}
//     />
//   </div>
//   );
// };

// export default Jobs;

import React, { useEffect, useState } from "react";
import DataTableComponent from "../../components/table/Table";
// import data from '../../utils/Projects'
import data from "../../utils/Agents";
import { CheckIcon } from "@radix-ui/react-icons";
import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";
import { useTheme } from "../../components/context/ThemeProvider";
import { useDispatch, useSelector } from "react-redux";
import { showError, showSuccess } from "../../components/toaster/Toasters";
import { createAgent, fetchAgents } from "../../redux/slices/agentSlice";
import ViewModal from "../../components/viewModal/ViewModal";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import StatusDialog from "../../components/dialogbox/StatusDialog";
import { updateChannelPartnerStatus } from "../../redux/slices/channelPartnersSlice";
import { useDebounce } from "../../hooks/useDebounce";

const agentStatusStyles = {
  active:
    "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-200 capitalize",
  inactive:
    "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-200 capitalize",
};
// const columns = [
//   {
//     name: "Name",
//     selector: row => row.name,
//     sortable: true,
//   },
//   {
//     name: "Email",
//     selector: row => row.email,
//   },
//   {
//     name: "Phone",
//     selector: row => row.phone,
//   },
//   {
//     name: "Agency",
//     selector: row => row.agency,
//   },
//   {
//     name: "Location",
//     selector: row => row.location,
//   },
//   {
//     name: "Leads",
//     selector: row => row.leads,
//   },
//   {
//     name: "Status",
//     selector: row => row.status,
//     cell: row => (
//       <span
//         className={`text-xs px-2 py-1 rounded-full font-medium ${
//           agentStatusStyles[row.status] || 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
//         }`}
//       >
//         {row.status}
//       </span>
//     ),
//   },
//   {
//     name: "Joined On",
//     selector: row => row.joinedOn,
//   },
//   {
//     name: "Action",
//     cell: row => (
//       <div className="flex gap-2">
//         <button
//           title="Edit"
//           onClick={() => console.log("Edit", row)}
//           className="text-blue-500 hover:text-blue-700"
//         >
//           <FiEdit />
//         </button>
//         <button
//           title="Delete"
//           onClick={() => console.log("Delete", row)}
//           className="text-red-500 hover:text-red-700"
//         >
//           <FiTrash2 />
//         </button>
//       </div>
//     ),
//     ignoreRowClick: true,
//     $allowOverflow: true,
//     $button: true,
//   }
// ];

const Agents = () => {
  const [isStatusModalOpen, setStatusModalOpen] = useState(false);
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  // const [isStatusModalOpen, setStatusModalOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const dispatch = useDispatch();
  const { agentList, isLoading, error } = useSelector((state) => state.agents);
  const navigate=useNavigate();
  const { query } = useSelector((state) => state.search);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    dispatch(fetchAgents(debouncedQuery ? { q: debouncedQuery } : {}));
  }, [dispatch,debouncedQuery]);
  // console.log("agentList List:", agentList);
  const handleView = (row) => {
    setSelectedAgent(row);
    setViewModalOpen(true);
  };
  
  // Optional: Custom labels for better UI
  const fieldLabels = {
    mobile_number: "Phone",
    firm_name: "Company",
    reraId: "RERA ID",
    year_of_experience: "Experience (Years)",
    profile_photo: "Profile Photo",
    id_proof: "ID Proof",
    referral_code: "Referral Code",
    status: "Status",
    createdAt: "Joined On",
    leadsCount: "Leads",
    state: "Location",
  };
  
  // Optional: Formatters for specific fields
  const fieldFormatters = {
    year_of_experience: (val) => `${val} years`,
    createdAt: (val) => dayjs(val).format("DD-MM-YYYY"),
    status: (val) => val.charAt(0).toUpperCase() + val.slice(1), // capitalize
  };
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.mobile_number,
    },
    {
      name: "Agency",
      selector: (row) => row.firm_name,
    },
    {
      name: "Location",
      selector: (row) => row.state,
    },
    {
      name: "Leads",
      selector: (row) => row.leads_count || 0,
      cell: (row) => (
        <button
          onClick={() => navigate(`/agents/${row._id}/leads`)} // ✅ navigate with agentId
          className="cursor-pointer"
        >
          {row.leads_count || 0}
        </button>
      ),
    },
    {
      name: "Status",
      selector: (row) => row.status,
      cell: (row) => (
        <button
        onClick={() => {
            setSelectedAgent(row);
            setStatusModalOpen(true);
          }}
          className={`text-xs px-2 py-1 rounded-full font-medium cursor-pointer ${
            agentStatusStyles[row.status?.toLowerCase()] ||
            "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
          }`}
        >
          {row.status}
        </button>
      ),
    },
    {
      name: "Joined On",
      selector: (row) => new Date(row.createdAt).toLocaleDateString(),
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            title="View"
            onClick={() => handleView(row)}
            className="text-green-600 hover:text-green-800 cursor-pointer"
          >
            <FiEye />
          </button>
          <button
            title="Edit"
            onClick={() => console.log("Edit", row)}
            className="text-blue-500 hover:text-blue-700"
          >
            <FiEdit />
          </button>
          <button
            title="Delete"
            onClick={() => console.log("Delete", row)}
            className="text-red-500 hover:text-red-700"
          >
            <FiTrash2 />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      $allowOverflow: true,
      $button: true,
    },
  ];
  
  const handleAddMember = (data) => {
    console.log("New Member:", data);
    // 🔁 Add logic to update state or send API
  };
  const handleAdd = () => console.log("Add New Channel Partner");
  const handleExport = () => console.log("Export clicked");
  const handleDownload = () => console.log("Download CSV clicked");
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key]);
      }

      const result = await dispatch(createAgent(formData)).unwrap();
      // ✅ Success toast
      showSuccess(result.message || "Channel Partner added successfully");
      resetForm();
      // dispatch(fetchAgents());
       dispatch(fetchAgents(debouncedQuery ? { q: debouncedQuery } : {}));
      return true; // ✅ Indicate success
    } catch (error) {
      console.error("Error adding channel partner:", error);

      // ✅ Error toast
      showError(error.message || "Failed to add Channel Partner");

      return false; // ✅ Indicate failure
    }
  };

  const agentFormFields = [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "password", label: "Password", type: "password", required: true },
    {
      name: "confirm_password",
      label: "Confirm Password",
      type: "password",
      required: true,
    },
    {
      name: "mobile_number",
      label: "Mobile Number",
      type: "mobile_number",
      required: true,
    }, // ✅ FIXED
    { name: "state", label: "State", type: "text", required: true },
    { name: "firm_name", label: "Firm Name", type: "text", required: true },
    { name: "reraId", label: "RERA ID", type: "text", required: true },
    {
      name: "year_of_experience",
      label: "Years of Experience",
      type: "number",
      required: true,
    },
    {
      name: "referral_code",
      label: "Referral Code",
      type: "text",
      required: false,
    },
    {
      name: "profile_photo",
      label: "Profile Photo",
      type: "file",
      required: true,
    },
    { name: "id_proof", label: "ID Proof", type: "file", required: true },
  ];
  return (
    <div
      className={`min-h-auto py-6 ${
        isDark ? "bg-[#1e1e1e] text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      {error && (
        <p className="text-center text-red-500">
          {error.message || "Failed to fetch data"}
        </p>
      )}
      {!error && (
        <DataTableComponent
          data={agentList}
          columns={columns}
          title="Agents Table"
          filterByStatus={true}
          formFields={agentFormFields}
          formLabel="Add Agent Form"
          onAdd={handleAdd}
          onExport={handleExport}
          onDownload={handleDownload}
          addLabel="New Agent"
          onSubmit={handleSubmit}
        />
      )}
      {/* ------- Model For Change the Status of Channel Partner------- */}
      <StatusDialog
        isOpen={isStatusModalOpen}
        onClose={() => setStatusModalOpen(false)}
        alldetails={selectedAgent}
        currentStatus={selectedAgent?.status}
        onSubmit={(newStatus) => {
          if (newStatus !== selectedAgent.status) {
            dispatch(
              updateChannelPartnerStatus({
                id: selectedAgent?._id,
                status: newStatus,
              })
            )
              .unwrap()
              .then((res) => {
                showSuccess(res.message || "Status updated successfully");
                // dispatch(fetchAgents()); // Optional: Only if backend affects more fields
               dispatch(fetchAgents(debouncedQuery ? { q: debouncedQuery } : {}));
              })
              .catch((err) => {
                showError(err.message || "Failed to update status");
              });
          }
          setStatusModalOpen(false);
        }}
      />
       {/* -----Model For View Details------ */}
       <ViewModal
        isOpen={isViewModalOpen}
        onClose={() => setViewModalOpen(false)}
        title="Agent Details"
        data={selectedAgent}
        fieldLabels={fieldLabels}
        fieldFormatters={fieldFormatters}
      />
    </div>
  );
};

export default Agents;
