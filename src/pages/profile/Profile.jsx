import React from 'react'
import DataTableComponent from '../../components/table/Table'
import data from '../../utils/Leads'
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { useTheme } from "../../components/context/ThemeProvider";
import StatusDropdown from '../../components/UI/Dropdown';
const statusOptions = ["All", "New", "Contacted","Follow Up","Rejected"];
const leadStatusStyles = {
  "New": "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200",
  "Contacted": "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200",
  "Follow Up": "bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-200",
  "Rejected": "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
};
const Profile = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const columns = [
    {
      name: "Name",
      selector: row => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: row => row.email,
    },
    {
      name: "Phone",
      selector: row => row.phone,
    },
    {
      name: "Interested In",
      selector: row => row.interestedIn,
    },  
    {
      name: "Source",
      selector: row => row.source,
    },         
    {
      name: "Date",
      selector: row => row.date,
    },
    // {
    //   name: "Status",
    //   selector: row => row.status,
    //   cell: (row) => (
    //     <select
    //       value={row.status}
    //       onChange={(e) => {
    //         const newStatus = e.target.value;
    //         console.log("Status changed for:", row.name, "=>", newStatus);
    //         // TODO: API call here to update backend
    //         // updateStatus(row.id, newStatus); 👈 (future)
    //       }}
    //       className={`text-xs px-2 py-1 rounded font-medium border focus:outline-none ${
    //         isDark
    //           ? "bg-gray-800 text-white border-gray-600"
    //           : "bg-white text-black border-gray-300"
    //       }`}
    //     >
    //       {statusOptions.map((status) => (
    //         <option key={status} value={status} className=''>
    //           {status}
    //         </option>
    //       ))}
    //     </select>
    //   ),
    // },
    {
      name: "Status",
      selector: row => row.status,
      cell: (row) => (
        <StatusDropdown
          value={row.status}
          onChange={(newStatus) => {
            console.log("Changed:", row.name, "=>", newStatus);
            // TODO: API update
          }}
          options={["New", "Contacted", "Follow Up", "Rejected"]}
          isDark={isDark}
        />
      ),
    },    
    {
      name: "Action",
      cell: row => (
        <div className="flex gap-2">
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
    }
  ];
  const handleAddMember = (data) => {
    console.log("New Member:", data);
    // 🔁 Add logic to update state or send API
  };
    const handleAdd = () => console.log("Add New Channel Partner");
    const handleExport = () => console.log("Export clicked");
    const handleDownload = () => console.log("Download CSV clicked");
  
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
      name: "phone",
      label: "Phone",
      type: "text",
      required: true,
    },
    {
      name: "interested",
      label: "Interested In",
      type: "text",
      required: true,
    },
    {
      name: "status",
      label: "Status",
      type: "select",
      options: ["New", "Contacted", "Converted", "Lost"], // You can customize these
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
    <div className={`min-h-auto py-6 ${isDark ? "bg-[#1e1e1e] text-gray-100 " : "bg-white text-gray-800"}`}>
      <DataTableComponent
        data={data}
        columns={columns}
        title='Leads Table'
        filterByStatus={true}
        statusOptions={statusOptions}
        formFields={leadFormFields}
        formLabel='Add Leads Form'
        onAdd={handleAdd}
        onExport={handleExport}
        onDownload={handleDownload}
        addLabel="Add Lead"
      />
    </div>
  )
}

export default Profile