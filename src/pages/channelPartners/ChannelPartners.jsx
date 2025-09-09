// import React, { useEffect } from "react";
// import data from "../../utils/CPs";
// import { FiEdit, FiTrash2 } from "react-icons/fi";
// import DataTableComponent from "../../components/table/Table";
// import { useTheme } from "../../components/context/ThemeProvider";
// import { useDispatch, useSelector } from "react-redux";
// import { createChannelPartner,fetchChannelPartners } from "../../redux/slices/channelPartnersSlice";
// import { showSuccess, showError } from "../../components/toaster/Toasters";
// import dayjs from "dayjs";

// const statusOptions = ["All", "Active", "Inactive"];
// const cpStatusStyles = {
//   active: "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-200 capitalize",
//   inactive: "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-200 capitalize",
// };

// const ChannelPartners = () => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";
//   const dispatch = useDispatch();
//   const { cpList, isLoading, error } = useSelector((state) => state.channelPartners);

// useEffect(() => {
//   dispatch(fetchChannelPartners());
// }, [dispatch]);
// console.log("Channel Partners List:", cpList);

//   const columns = [
//     {
//       name: "Name",
//       selector: (row) => row.name,
//       sortable: true,
//     },
//     {
//       name: "Email",
//       selector: (row) => row.email,
//     },
//     {
//       name: "Phone",
//       selector: (row) => row.mobile_number,
//     },
//     {
//       name: "Company",
//       selector: (row) => row.firm_name,
//     },
//     {
//       name: "Location",
//       selector: (row) => row.state,
//     },
//     {
//       name: "Status",
//       selector: (row) => row.status,
//       cell: (row) => (
//         <span
//           className={`text-xs px-2 py-1 rounded-full font-medium ${cpStatusStyles[row.status] || "bg-gray-100 text-gray-800 "
//             }`}
//         >
//           {row.status}
//         </span>
//       ),
//     },
//     {
//       name: "Joined On",
//       selector: (row) => row.createdAt,
//       cell: ({ row }) => dayjs(row?.createdAt).format("DD-MM-YYYY"),
//     },
//     {
//       name: "Action",
//       cell: (row) => (
//         <div className="flex gap-2">
//           <button
//             title="Edit"
//             onClick={() => console.log("Edit", row)}
//             className="text-blue-500 hover:text-blue-700"
//           >
//             <FiEdit />
//           </button>
//           <button
//             title="Delete"
//             onClick={() => console.log("Delete", row)}
//             className="text-red-500 hover:text-red-700"
//           >
//             <FiTrash2 />
//           </button>
//         </div>
//       ),
//       ignoreRowClick: true,
//       allowOverflow: true,
//       button: true,
//     },
//   ];

//   // You can define handlers here or pass empty functions if not used yet
//   const handleAdd = () => console.log("Add New Channel Partner");
//   const handleExport = () => console.log("Export clicked");
//   const handleDownload = () => console.log("Download CSV clicked");
//   const handleSubmit = async (values, { resetForm }) => {
//     try {
//       const formData = new FormData();
//       for (const key in values) {
//         formData.append(key, values[key]);
//       }

//       const result = await dispatch(createChannelPartner(formData)).unwrap();
//       // ✅ Success toast
//       showSuccess(result.message || "Channel Partner added successfully");
//       resetForm();
//       dispatch(fetchChannelPartners());
//       return true; // ✅ Indicate success
//     } catch (error) {
//       console.error("Error adding channel partner:", error);

//       // ✅ Error toast
//       showError(error.message || "Failed to add Channel Partner");

//       return false; // ✅ Indicate failure
//     }
//   };

//   // const channelFormFields = [
//   //   {
//   //     name: "name",
//   //     label: "Name",
//   //     type: "text",
//   //     required: true,
//   //   },
//   //   {
//   //     name: "email",
//   //     label: "Email",
//   //     type: "email",
//   //     required: true,
//   //   },
//   //   {
//   //     name: "password",
//   //     label: "Password",
//   //     type: "password",
//   //     required: true,
//   //   },
//   //   {
//   //     name: "confirm_password",
//   //     label: "Confirm Password",
//   //     type: "password",
//   //     required: true,
//   //   },
//   //   {
//   //     name: "mobile_number",
//   //     label: "Mobile Number",
//   //     type: "number",
//   //     required: true,
//   //   },
//   //   {
//   //     name: "state",
//   //     label: "State",
//   //     type: "text",
//   //     required: true,
//   //   },
//   //   {
//   //     name: "firm_name",
//   //     label: "Firm Name",
//   //     type: "text",
//   //     required: true,
//   //   },
//   //   {
//   //     name: "reraId",
//   //     label: "RERA ID",
//   //     type: "text",
//   //     required: true,
//   //   },
//   //   // {
//   //   //   name: "agent_type",
//   //   //   label: "Agent Type",
//   //   //   type: "select",
//   //   //   options: ["Individual", "Agency", "Franchise"],
//   //   //   required: true,
//   //   // },
//   //   {
//   //     name: "year_of_experience",
//   //     label: "Years of Experience",
//   //     type: "number",
//   //     required: true,
//   //   },
//   //   {
//   //     name: "referral_code",
//   //     label: "Referral Code",
//   //     type: "text",
//   //     required: false,
//   //   },
//   //   {
//   //     name: "profile_photo",
//   //     label: "Profile Photo",
//   //     type: "file",
//   //     required: true,
//   //   },
//   //   {
//   //     name: "id_proof",
//   //     label: "ID Proof",
//   //     type: "file",
//   //     required: true,
//   //   },
//   // ];
//   const channelFormFields = [
//     { name: "name", label: "Name", type: "text", required: true },
//     { name: "email", label: "Email", type: "email", required: true },
//     { name: "password", label: "Password", type: "password", required: true },
//     { name: "confirm_password", label: "Confirm Password", type: "password", required: true },
//     { name: "mobile_number", label: "Mobile Number", type: "mobile_number", required: true }, // ✅ FIXED
//     { name: "state", label: "State", type: "text", required: true },
//     { name: "firm_name", label: "Firm Name", type: "text", required: true },
//     { name: "reraId", label: "RERA ID", type: "text", required: true },
//     { name: "year_of_experience", label: "Years of Experience", type: "number", required: true },
//     { name: "referral_code", label: "Referral Code", type: "text", required: false },
//     { name: "profile_photo", label: "Profile Photo", type: "file", required: true },
//     { name: "id_proof", label: "ID Proof", type: "file", required: true },
//   ];

//   return (
//     <div className={`min-h-auto py-6 rounded-lg shadow-lg ${isDark
//         ? "bg-[#1e1e1e] text-gray-100 shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
//         : "bg-gray-50 text-gray-800 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
//       }`}>
//       {/* {isLoading && <p className="text-center">Loading channel partners...</p>} */}
//     {error && <p className="text-center text-red-500">{error.message || "Failed to fetch data"}</p>}

//     { !error && (
//       <DataTableComponent
//         data={cpList}
//         columns={columns}
//         title="Channel Partners Table"
//         filterByStatus={true}
//         statusOptions={statusOptions}
//         formFields={channelFormFields}
//         formLabel="Add Channel Partner"
//         onAdd={handleAdd}
//         onExport={handleExport}
//         onDownload={handleDownload}
//         addLabel="New CPs"
//         onSubmit={handleSubmit}
//       />
//     )}
//     </div>
//   );
// };

// export default ChannelPartners;

// ========================clode

import React, { useEffect, useState } from "react";
import data from "../../utils/CPs";
import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";
import DataTableComponent from "../../components/table/Table";
import { useTheme } from "../../components/context/ThemeProvider";
import { useDispatch, useSelector } from "react-redux";
import {
  createChannelPartner,
  fetchChannelPartners,
  updateChannelPartnerStatus,
} from "../../redux/slices/channelPartnersSlice";
import { showSuccess, showError } from "../../components/toaster/Toasters";
import dayjs from "dayjs";
import StatusDialog from "../../components/dialogbox/StatusDialog";
import ViewModal from "../../components/viewModal/ViewModal";
import { useDebounce } from "../../hooks/useDebounce";

const statusOptions = ["All", "Active", "Inactive"];
const cpStatusStyles = {
  active:
    "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-200 capitalize",
  inactive:
    "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-200 capitalize",
};

const ChannelPartners = () => {
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [isStatusModalOpen, setStatusModalOpen] = useState(false);
  const [selectedCP, setSelectedCP] = useState(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const dispatch = useDispatch();
  const { cpList, isLoading, error } = useSelector((state) => state.channelPartners);
  const { query } = useSelector((state) => state.search);
   const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    dispatch(fetchChannelPartners(debouncedQuery ? { q: debouncedQuery } : {}));
  }, [dispatch, debouncedQuery]);

  const handleView = (row) => {
    setSelectedCP(row);
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
      name: "Company",
      selector: (row) => row.firm_name,
    },
    {
      name: "Location",
      selector: (row) => row.state,
    },
    {
      name: "Leads",
      selector: (row) => row.leadsCount,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      cell: (row) => (
        <span
          onClick={() => {
            setSelectedCP(row);
            setStatusModalOpen(true);
          }}
          className={`cursor-pointer text-xs px-2 py-1 rounded-full font-medium ${
            cpStatusStyles[row.status] || "bg-gray-100 text-gray-800 "
          }`}
        >
          {/* {console.log("status", row)} */}
          {row.status}
        </span>
      ),
    },
    {
      name: "Joined On",
      selector: (row) => row.createdAt,
      cell: ({ row }) => dayjs(row?.createdAt).format("DD-MM-YYYY"),
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-2">
          {/* 👁️ View Button */}
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
            className="text-blue-500 hover:text-blue-700 cursor-pointer"
          >
            <FiEdit />
          </button>
          <button
            title="Delete"
            onClick={() => console.log("Delete", row)}
            className="text-red-500 hover:text-red-700  cursor-pointer"
          >
            <FiTrash2 />
          </button>
        </div>
      ),
      $ignoreRowClick: true,
      $allowOverflow: true,
      $button: true,
    },
  ];

  const handleAdd = () => console.log("Add New Channel Partner");
  const handleExport = () => console.log("Export clicked");
  const handleDownload = () => console.log("Download CSV clicked");

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      setSubmitting(true); // Start loading state

      const formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key]);
      }

      const result = await dispatch(createChannelPartner(formData)).unwrap();

      // ✅ Success: Show toast, reset form, refresh data
      showSuccess(result.message || "Channel Partner added successfully");
      resetForm();
      dispatch(fetchChannelPartners());
      return true; // ✅ Return true to close modal
    } catch (error) {
      console.error("Error adding channel partner:", error);

      // ✅ Error: Show toast but don't close modal
      showError(error.message || "Failed to add Channel Partner");
      return false; // ✅ Return false to keep modal open
    } finally {
      setSubmitting(false); // Stop loading state
    }
  };
  const statesList = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ]
  const channelFormFields = [
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
    },
    { name: "state", label: "State", type: "select", required: true,options: statesList, },
    { name: "firm_name", label: "Firm Name", type: "text", required: true },
    {
      name: "reraId",
      label: "RERA ID",
      type: "text",
      required: true,
      placeholder: "E.g. RAJ/AG/2025/001234",
    },
    {
      name: "year_of_experience",
      label: "Years of Experience",
      type: "number",
      required: true,
    },
    {
      name: "referral_code",
      label: "Referral Code (Optional)",
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
      className={`min-h-auto py-6   ${
        isDark
          ? "bg-[#1e1e1e] text-gray-100 "
          : "bg-white text-gray-800 "
      }`}
    >
      {/* Show error only if there's an error and no data
      {error && cpList.length === 0 && (
        <p className="text-center text-red-500">
          {error.message || "Failed to fetch data"}
        </p>
      )} */}

      {/* Always show table if no critical error */}
      {/* {(!error || cpList.length > 0) && (  */}
        <DataTableComponent
          data={cpList}
          columns={columns}
          title="Channel Partners Table"
          filterByStatus={true}
          statusOptions={statusOptions}
          formFields={channelFormFields}
          formLabel="Add Channel Partner"
          onAdd={handleAdd}
          onExport={handleExport}
          onDownload={handleDownload}
          addLabel="New CPs"
          onSubmit={handleSubmit}
          loading={isLoading}
        />
      {/* )} */}
      {/* ------- Model For Change the Status of Channel Partner------- */}
      <StatusDialog
        isOpen={isStatusModalOpen}
        onClose={() => setStatusModalOpen(false)}
        alldetails={selectedCP}
        currentStatus={selectedCP?.status}
        onSubmit={(newStatus) => {
          if (newStatus !== selectedCP.status) {
            dispatch(
              updateChannelPartnerStatus({
                id: selectedCP?._id,
                status: newStatus,
              })
            )
              .unwrap()
              .then((res) => {
                showSuccess(res.message || "Status updated successfully");
                dispatch(fetchChannelPartners()); // Optional: Only if backend affects more fields
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
        title="Channel Partner Details"
        data={selectedCP}
        fieldLabels={fieldLabels}
        fieldFormatters={fieldFormatters}
      />
    </div>
  );
};

export default ChannelPartners;
