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


import React from "react";
import DataTableComponent from "../../components/table/Table";
// import data from '../../utils/Projects'
import data from '../../utils/Agents'
import { CheckIcon } from "@radix-ui/react-icons";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const agentStatusStyles = {
  "Active": "bg-green-100 text-green-700",
  "Inactive": "bg-red-100 text-red-700"
};

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
    name: "Agency",
    selector: row => row.agency,
  },
  {
    name: "Location",
    selector: row => row.location,
  },
  {
    name: "Status",
    selector: row => row.status,
    cell: row => (
      <span className={`text-xs px-2 py-1 rounded-full font-medium ${agentStatusStyles[row.status] || 'bg-gray-200 text-gray-800'}`}>
        {row.status}
      </span>
    ),
  },
  {
    name: "Joined On",
    selector: row => row.joinedOn,
  },
  {
    name: "Action",
    cell: row => (
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
  }
];
const Jobs = () => {
  return (
    <div className="min-h-auto bg-gray-50 p-6">
      <DataTableComponent
        data={data}
        columns={columns}
        title="Agents Table"
        filterByStatus={true}
        onAdd={() => ("Add")}
        onExport={() => ("Export clicked")}
        onDownload={() => ("Download CSV clicked")}
      />
    </div>
  );
};

export default Jobs;
