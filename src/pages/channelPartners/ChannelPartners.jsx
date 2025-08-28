import React, { useEffect } from "react";
import data from "../../utils/CPs";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import DataTableComponent from "../../components/table/Table";
import { useTheme } from "../../components/context/ThemeProvider";
import { useDispatch, useSelector } from "react-redux";
import { createChannelPartner,fetchChannelPartners } from "../../redux/slices/channelPartnersSlice";
import { showSuccess, showError } from "../../components/toaster/Toasters";
import dayjs from "dayjs";

const statusOptions = ["All", "Active", "Inactive"];
const cpStatusStyles = {
  active: "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-200 capitalize",
  inactive: "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-200 capitalize",
};

const ChannelPartners = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const dispatch = useDispatch();
  const { cpList, isLoading, error } = useSelector((state) => state.channelPartners);

useEffect(() => {
  dispatch(fetchChannelPartners());
}, [dispatch]);
console.log("Channel Partners List:", cpList);



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
      name: "Status",
      selector: (row) => row.status,
      cell: (row) => (
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium ${cpStatusStyles[row.status] || "bg-gray-100 text-gray-800 "
            }`}
        >
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
      allowOverflow: true,
      button: true,
    },
  ];


  // You can define handlers here or pass empty functions if not used yet
  const handleAdd = () => console.log("Add New Channel Partner");
  const handleExport = () => console.log("Export clicked");
  const handleDownload = () => console.log("Download CSV clicked");
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key]);
      }

      const result = await dispatch(createChannelPartner(formData)).unwrap();
      // ✅ Success toast
      showSuccess(result.message || "Channel Partner added successfully");
      resetForm();
      dispatch(fetchChannelPartners());
      return true; // ✅ Indicate success
    } catch (error) {
      console.error("Error adding channel partner:", error);

      // ✅ Error toast
      showError(error.message || "Failed to add Channel Partner");

      return false; // ✅ Indicate failure
    }
  };

  // const channelFormFields = [
  //   {
  //     name: "name",
  //     label: "Name",
  //     type: "text",
  //     required: true,
  //   },
  //   {
  //     name: "email",
  //     label: "Email",
  //     type: "email",
  //     required: true,
  //   },
  //   {
  //     name: "password",
  //     label: "Password",
  //     type: "password",
  //     required: true,
  //   },
  //   {
  //     name: "confirm_password",
  //     label: "Confirm Password",
  //     type: "password",
  //     required: true,
  //   },
  //   {
  //     name: "mobile_number",
  //     label: "Mobile Number",
  //     type: "number",
  //     required: true,
  //   },
  //   {
  //     name: "state",
  //     label: "State",
  //     type: "text",
  //     required: true,
  //   },
  //   {
  //     name: "firm_name",
  //     label: "Firm Name",
  //     type: "text",
  //     required: true,
  //   },
  //   {
  //     name: "reraId",
  //     label: "RERA ID",
  //     type: "text",
  //     required: true,
  //   },
  //   // {
  //   //   name: "agent_type",
  //   //   label: "Agent Type",
  //   //   type: "select",
  //   //   options: ["Individual", "Agency", "Franchise"],
  //   //   required: true,
  //   // },
  //   {
  //     name: "year_of_experience",
  //     label: "Years of Experience",
  //     type: "number",
  //     required: true,
  //   },
  //   {
  //     name: "referral_code",
  //     label: "Referral Code",
  //     type: "text",
  //     required: false,
  //   },
  //   {
  //     name: "profile_photo",
  //     label: "Profile Photo",
  //     type: "file",
  //     required: true,
  //   },
  //   {
  //     name: "id_proof",
  //     label: "ID Proof",
  //     type: "file",
  //     required: true,
  //   },
  // ];
  const channelFormFields = [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "password", label: "Password", type: "password", required: true },
    { name: "confirm_password", label: "Confirm Password", type: "password", required: true },
    { name: "mobile_number", label: "Mobile Number", type: "mobile_number", required: true }, // ✅ FIXED
    { name: "state", label: "State", type: "text", required: true },
    { name: "firm_name", label: "Firm Name", type: "text", required: true },
    { name: "reraId", label: "RERA ID", type: "text", required: true },
    { name: "year_of_experience", label: "Years of Experience", type: "number", required: true },
    { name: "referral_code", label: "Referral Code", type: "text", required: false },
    { name: "profile_photo", label: "Profile Photo", type: "file", required: true },
    { name: "id_proof", label: "ID Proof", type: "file", required: true },
  ];


  return (
    <div className={`min-h-auto py-6 rounded-lg shadow-lg ${isDark
        ? "bg-[#1e1e1e] text-gray-100 shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
        : "bg-gray-50 text-gray-800 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
      }`}>
      {/* {isLoading && <p className="text-center">Loading channel partners...</p>} */}
    {error && <p className="text-center text-red-500">{error.message || "Failed to fetch data"}</p>}

    { !error && (
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
      />
    )}
    </div>
  );
};

export default ChannelPartners;
