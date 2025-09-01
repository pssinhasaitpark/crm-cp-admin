import React, { useEffect, useState } from "react";
import DataTableComponent from "../../components/table/Table";
import data from "../../utils/Leads";
import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";
import { useTheme } from "../../components/context/ThemeProvider";
import StatusDropdown from "../../components/UI/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeads, createLead } from "../../redux/slices/leadsSlice";
import { showError, showSuccess } from "../../components/toaster/Toasters";
import dayjs from "dayjs";
import ViewModal from "../../components/viewModal/ViewModal";

const statusOptions = ["All", "New", "Contacted", "Follow Up", "Rejected"];
const leadStatusStyles = {
  new: "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200",
  contacted:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200",
  "follow Up":
    "bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-200",
  rejected: "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200",
};
const Profile = () => {
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  const { theme } = useTheme();
  const isDark = theme === "dark";
  const dispatch = useDispatch();
  const { leadList, isLoading, error } = useSelector((state) => state.leads);

  useEffect(() => {
    dispatch(fetchLeads());
  }, [dispatch]);
  const statusOptions = [
    "new",
    "contacted",
    "interested",
    "not interested",
    "follow-Up",
    "site visit scheduled",
    "site visit done",
    "converted",
    "lost",
    "on hold",
    "duplicate",
    "dead lead",
  ];
  // console.log("agentList List:", agentList);
  const handleView = (row) => {
    setSelectedLead(row);
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
      selector: (row) => row.phone_number,
    },
    {
      name: "Interested In",
      selector: (row) => row.interested_in,
    },
    {
      name: "Source",
      selector: (row) => row.source,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Created By",
      selector: (row) => row.created_by || "Admin",
    },
    {
      name: "Status",
      selector: (row) => row.status,
      cell: (row) => (
        <StatusDropdown
          value={row.status}
          onChange={(newStatus) => {
            console.log("Changed:", row.name, "=>", newStatus);
            // TODO: API update
          }}
          options={statusOptions}
          isDark={isDark}
        />
      ),
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
            className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <FiEdit />
          </button>
          <button
            title="Delete"
            onClick={() => console.log("Delete", row)}
            className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
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
      const payload = {
        ...values,
        date: dayjs(values.date).format("DD/MM/YYYY"), // ✅ formatted date
      };
      const response = await dispatch(createLead(payload)).unwrap();
      showSuccess(response.message || "Lead created successfully");
      dispatch(fetchLeads()); // refresh table
      resetForm();
      return true;
    } catch (err) {
      showError(err.message || "Failed to create lead");
      return false;
    }
  };

  const leadFormFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
    },
    {
      name: "phone_number",
      label: "Phone",
      type: "mobile_number",
      required: true,
    },
    {
      name: "interested_in",
      label: "Interested In",
      type: "text",
      required: true,
    },
    {
      name: "source",
      label: "Source",
      type: "select",
      options: ["Website", "Referral", "Walk-in", "Ad Campaign"], // Customize as needed
      required: true,
    },
    {
      name: "date",
      label: "Date",
      type: "date",
      required: true,
    },
  ];
  return (
    <div
      className={`min-h-auto py-6 ${
        isDark ? "bg-[#1e1e1e] text-gray-100 " : "bg-white text-gray-800"
      }`}
    >
      <DataTableComponent
        data={leadList}
        columns={columns}
        title="Leads Table"
        filterByStatus={true}
        statusOptions={statusOptions}
        formFields={leadFormFields}
        formLabel="Add Leads Form"
        onAdd={handleAdd}
        onExport={handleExport}
        onDownload={handleDownload}
        addLabel="Add Lead"
        onSubmit={handleSubmit}
      />
      {/* -----Model For View Details------ */}
      <ViewModal
        isOpen={isViewModalOpen}
        onClose={() => setViewModalOpen(false)}
        title="Channel Partner Details"
        data={selectedLead}
        fieldLabels={fieldLabels}
        fieldFormatters={fieldFormatters}
      />
    </div>
  );
};

export default Profile;
