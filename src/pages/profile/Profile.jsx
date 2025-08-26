import React from 'react'
import DataTableComponent from '../../components/table/Table'
import data from '../../utils/Leads'
import { FiEdit, FiTrash2 } from 'react-icons/fi';



// const columns = [
//     {
//       name: "Project Title",
//       selector: row => row.projectTitle,
//       sortable: true,
//     },
//     {
//       name: "Description",
//       selector: row => row.description,
//       grow: 2, // Allows the column to expand more
//     },
//     {
//       name: "Location",
//       selector: row => row.location,
//     },
//     {
//       name: "Price Range",
//       selector: row => row.priceRange,
//     },
//     {
//       name: "Image",
//       cell: row => (
//         <div className="py-2 w-20">
//         <img
//           src={row.image}
//           alt={row.projectTitle}
//           className="w-30 h-20 object-cover rounded"
//           />
//           </div>
//       ),
//       ignoreRowClick: true,
//       allowOverflow: true,
//       button: true,
//     },
//     {
//       name: "Brochure",
//       cell: row => (
//         <a
//           href={row.brochure}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-600 underline"
//         >
//           View Brochure
//         </a>
//       ),
//       ignoreRowClick: true,
//       allowOverflow: true,
//       button: true,
//     },
//     {
//       name: "Action",
//       cell: row => (
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
const leadStatusStyles = {
  "New": "bg-blue-100 text-blue-700",
  "Contacted": "bg-yellow-100 text-yellow-800",
  "Follow Up": "bg-purple-100 text-purple-800",
  "Rejected": "bg-red-100 text-red-700"
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
    name: "Interested In",
    selector: row => row.interestedIn,
  },
  {
    name: "Status",
    selector: row => row.status,
    cell: row => (
      <span
        className={`text-xs px-2 py-1 rounded-full font-medium ${
          leadStatusStyles[row.status] || "bg-gray-100 text-gray-800"
        }`}
      >
        {row.status}
      </span>
    ),
  },
  {
    name: "Source",
    selector: row => row.source,
  },
  {
    name: "Date",
    selector: row => row.date,
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
const Profile = () => {
  return (
    <div className="min-h-auto bg-gray-50 p-6">
      <DataTableComponent
        data={data}
        columns={columns}
        title='Leads Table'
        filterByStatus={true}
        onAdd={() => ("Add")}
        onExport={() => ("Export clicked")}
        onDownload={() => ("Download CSV clicked")}
      />
    </div>



  )
}

export default Profile