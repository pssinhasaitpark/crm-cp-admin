// import React from "react";
// import DataTableComponent from "../../components/table/Table";
// import data from "../../utils/CPs";
// import { FiEdit, FiTrash2 } from "react-icons/fi";
// import * as Select from "@radix-ui/react-select";
// import {
//   CheckIcon,
//   ChevronDownIcon,
//   UploadIcon,
//   DownloadIcon,
//   PlusIcon,
// } from "@radix-ui/react-icons";

// const statusOptions = ["All", "Active", "Inactive"];
// const cpStatusStyles = {
//   Active: "bg-green-100 text-green-700",
//   Inactive: "bg-red-100 text-red-700",
// };

// const columns = [
//   {
//     name: "Name",
//     selector: (row) => row.name,
//     sortable: true,
//   },
//   {
//     name: "Email",
//     selector: (row) => row.email,
//   },
//   {
//     name: "Phone",
//     selector: (row) => row.phone,
//   },
//   {
//     name: "Company",
//     selector: (row) => row.company,
//   },
//   {
//     name: "Location",
//     selector: (row) => row.location,
//   },
//   {
//     name: "Status",
//     selector: (row) => row.status,
//     cell: (row) => (
//       <span
//         className={`text-xs px-2 py-1 rounded-full font-medium ${
//           cpStatusStyles[row.status] || "bg-gray-100 text-gray-800"
//         }`}
//       >
//         {row.status}
//       </span>
//     ),
//   },
//   {
//     name: "Joined On",
//     selector: (row) => row.joinedOn,
//   },
//   {
//     name: "Action",
//     cell: (row) => (
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
//     allowOverflow: true,
//     button: true,
//   },
// ];

// const ChannelPartners = () => {
//   return (
//     <div>
//             <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
//         {filterByStatus && (
//           <div className="relative inline-block">
//             <select
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value)}
//               className="appearance-none w-[160px] px-3 py-2 pr-8 border border-gray-300 rounded-md text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             >
//               {statusOptions.map((option) => (
//                 <option key={option} value={option} >
//                   {option}
//                 </option>
//               ))}
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400">
//               <ChevronDownIcon className="w-4 h-4" />
//             </div>
//           </div>
//         )}

//         <div className="flex gap-2">
//           <button
//             onClick={onExport}
//             className="inline-flex items-center gap-1 px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100 cursor-pointer"
//           >
//             <UploadIcon className="w-4 h-4" />
//             Export
//           </button>
//           <button
//             onClick={onDownload}
//             className="inline-flex items-center gap-1 px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100 cursor-pointer"
//           >
//             <DownloadIcon className="w-4 h-4" />
//             Download CSV
//           </button>
//           <button
//             onClick={onAdd}
//             className="inline-flex items-center gap-1 px-4 py-2 text-sm text-white bg-green-500 rounded hover:bg-green-600 cursor-pointer"
//           >
//             <PlusIcon className="w-4 h-4" />
//             New Member
//           </button>
//         </div>
//       </div>
//       <div className="min-h-auto bg-gray-50 p-6">
//         <DataTableComponent
//           data={data}
//           columns={columns}
//           title="Channel Partners Table"
//           filterByStatus={true}
//           onAdd={() => "Add"}
//           onExport={() => "Export clicked"}
//           onDownload={() => "Download CSV clicked"}
//         />
//       </div>
//     </div>
//   );
// };

// export default ChannelPartners;


// import React from "react";
// import DataTableComponent from "../../components/table/Table";
// import data from "../../utils/CPs";
// import { FiEdit, FiTrash2 } from "react-icons/fi";
// import { ChevronDownIcon, UploadIcon, DownloadIcon, PlusIcon } from "@radix-ui/react-icons";
// import TableHeaderActions from "../../components/table/TableHeaderActions";

// const statusOptions = ["All", "Active", "Inactive"];
// const cpStatusStyles = {
//   Active: "bg-green-100 text-green-700",
//   Inactive: "bg-red-100 text-red-700",
// };

// const ChannelPartners = () => {
//   const [statusFilter, setStatusFilter] = React.useState("All");

//   const filteredData = React.useMemo(() => {
//     if (statusFilter === "All") return data;
//     return data.filter(
//       (item) =>
//         item.status &&
//         item.status.toLowerCase() === statusFilter.toLowerCase()
//     );
//   }, [data, statusFilter]);

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
//       selector: (row) => row.phone,
//     },
//     {
//       name: "Company",
//       selector: (row) => row.company,
//     },
//     {
//       name: "Location",
//       selector: (row) => row.location,
//     },
//     {
//       name: "Status",
//       selector: (row) => row.status,
//       cell: (row) => (
//         <span
//           className={`text-xs px-2 py-1 rounded-full font-medium ${
//             cpStatusStyles[row.status] || "bg-gray-100 text-gray-800"
//           }`}
//         >
//           {row.status}
//         </span>
//       ),
//     },
//     {
//       name: "Joined On",
//       selector: (row) => row.joinedOn,
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

//   return (
//     <div>
//       <div className="min-h-auto bg-gray-50 p-6">
//         <DataTableComponent
//           data={filteredData}
//           columns={columns}
//           title="Channel Partners Table"
//         />
//       </div>
//     </div>
//   );
// };

// export default ChannelPartners;


import React from "react";
import data from "../../utils/CPs";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import DataTableComponent from "../../components/table/Table";
import { useTheme } from "../../components/context/ThemeProvider";

const statusOptions = ["All", "Active", "Inactive"];
const cpStatusStyles = {
  Active: "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-200",
  Inactive: "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-200",
};

const ChannelPartners = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

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
      selector: (row) => row.phone,
    },
    {
      name: "Company",
      selector: (row) => row.company,
    },
    {
      name: "Location",
      selector: (row) => row.location,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      cell: (row) => (
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium ${
            cpStatusStyles[row.status] || "bg-gray-100 text-gray-800"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      name: "Joined On",
      selector: (row) => row.joinedOn,
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
  // const  channelFormFields = [
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
  //     name: "phone",
  //     label: "Phone",
  //     type: "text",
  //     required: true,
  //   },
  //   {
  //     name: "agency",
  //     label: "Agency",
  //     type: "text",
  //     required: false,
  //   },
  //   {
  //     name: "location",
  //     label: "Location",
  //     type: "text",
  //     required: false,
  //   },
  //   {
  //     name: "status",
  //     label: "Status",
  //     type: "select",
  //     options: ["Active", "Inactive", "Pending"], // you can customize this
  //     required: true,
  //   },
  //   {
  //     name: "joinedOn",
  //     label: "Joined On",
  //     type: "date",
  //     required: true,
  //   },
  // ];
  
  
  const channelFormFields = [
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
      name: "password",
      label: "Password",
      type: "password",
      required: true,
    },
    {
      name: "confirm_password",
      label: "Confirm Password",
      type: "password",
      required: true,
    },
    {
      name: "mobile_number",
      label: "Mobile Number",
      type: "text",
      required: true,
    },
    {
      name: "state",
      label: "State",
      type: "text",
      required: true,
    },
    {
      name: "firm_name",
      label: "Firm Name",
      type: "text",
      required: true,
    },
    {
      name: "reraId",
      label: "RERA ID",
      type: "text",
      required: true,
    },
    {
      name: "agent_type",
      label: "Agent Type",
      type: "select",
      options: ["Individual", "Agency", "Franchise"],
      required: true,
    },
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
      required: false,
    },
    {
      name: "id_proof",
      label: "ID Proof",
      type: "file",
      required: true,
    },
  ];

  
  return (
    <div className={`min-h-auto p-6 rounded-lg shadow-lg ${
      isDark
        ? "bg-[#1e1e1e] text-gray-100 shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
        : "bg-gray-50 text-gray-800 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
    }`}>
      <DataTableComponent
        data={data}
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
      />
    </div>
  );
};

export default ChannelPartners;
