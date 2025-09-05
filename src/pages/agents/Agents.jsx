import { socket } from "../../utils/Socket";
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
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

const agentStatusStyles = {
  active:
    "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-200 capitalize",
  inactive:
    "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-200 capitalize",
};

const Agents = () => {
  const [isStatusModalOpen, setStatusModalOpen] = useState(false);
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  // const [isStatusModalOpen, setStatusModalOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const dispatch = useDispatch();
  const { agentList, isLoading, error } = useSelector((state) => state.agents);
  const navigate = useNavigate();
  const { query } = useSelector((state) => state.search);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    dispatch(fetchAgents(debouncedQuery ? { q: debouncedQuery } : {}));
  }, [dispatch, debouncedQuery]);
  // console.log("agentList List:", agentList);
  const handleView = (row) => {
    setSelectedAgent(row);
    setViewModalOpen(true);
  };
  useEffect(() => {
        socket.on("connect", () => {
      console.log("✅ Admin connected:", socket.id);
  
      // Admin join room
      socket.emit("join-admin", { adminId: "68a848192f6953e2e590d22a" });
    });
      // ✅ Jab koi lead accept ho jaye
      socket.on("lead_accepted", (data) => {
    console.log("🔔 Lead accepted event:", data);
    // Yahin pe apn refresh call karenge
    // dispatch(fetchLeads()); 
     dispatch(fetchAgents(debouncedQuery ? { q: debouncedQuery } : {}));
  });
  
    }, [dispatch]);
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
      name: "Agent Type",
      cell: (row) => {
        const formatAgentType = (type) => {
          if (!type) return "-";
          if (type === "in_house") return "Inhouse";
          if (type === "external") return "External";
          return type.charAt(0).toUpperCase() + type.slice(1);
        };

        return <span>{formatAgentType(row.agent_type)}</span>;
      },
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
          className={`text-xs px-2 py-1 rounded-full font-medium cursor-pointer ${agentStatusStyles[row.status?.toLowerCase()] ||
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
  
  function convertArrayOfObjectsToCSV(data, columns) {
    const columnDelimiter = ',';
    const lineDelimiter = '\n';
  
    // Use column names for CSV header, skip buttons or non-exportable columns
    const keys = columns.filter(col => !col.$button).map(col => col.name);
  
    let result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;
  
    data.forEach(item => {
      let ctr = 0;
      columns
        .filter(col => !col.$button)
        .forEach(col => {
          if (ctr > 0) result += columnDelimiter;
  
          let cell = '';
          if (typeof col.selector === 'function') {
            cell = col.selector(item);
          } else if (typeof col.selector === 'string') {
            cell = item[col.selector];
          }
  
          if (cell == null) cell = '';
  
          if (Array.isArray(cell)) {
            cell = cell.join(', ');
          } else if (typeof cell === 'object') {
            cell = JSON.stringify(cell);
          }
  
          if (typeof cell === 'string' && (cell.includes(',') || cell.includes('"'))) {
            cell = `"${cell.replace(/"/g, '""')}"`;
          }
  
          result += cell;
          ctr++;
        });
      result += lineDelimiter;
    });
  
    return result;
  }
  
  function downloadCSV(data, columns) {
    let csv = convertArrayOfObjectsToCSV(data, columns);
    if (!csv) return;
  
    const filename = 'agents_export.csv';
  
    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }
  
    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(csv));
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  const handleAdd = () => console.log("Add New Channel Partner");
  const handleExport = () => console.log("Export clicked");
  const handleDownload = () =>{ downloadCSV(agentList, columns); };
  
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
  const statesList = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ]
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
    { name: "state", label: "State", type: "select", required: true, options: statesList, },
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
    {
      name: "agent_type",
      label: "Agent Type",
      type: "radio",
      required: true,
      options: [
        { label: "Inhouse", value: "in_house" },
        { label: "External", value: "external" },
      ],
    }
  ];
  return (
    <div
      className={`min-h-auto py-6 ${isDark ? "bg-[#1e1e1e] text-gray-100" : "bg-white text-gray-800"
        }`}
    >
        {/* <Breadcrumb /> */}
      {/* {error && (
        <p className="text-center text-red-500">
          {error.message || "Failed to fetch data"}
        </p>
      )}
      {!error && ( */}
        <DataTableComponent
          data={agentList}
          columns={columns}
          title="Agents Table"
          filterByStatus={true}
          formFields={agentFormFields}
          formLabel="Add Agent Form"
          onAdd={handleAdd}
          onExport={handleExport}
          // onDownload={handleDownload}
          addLabel="New Agent"
          onSubmit={handleSubmit}
          loading={isLoading}
        />
      {/* )} */}
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
