// import React from "react";
// import DataTable from "react-data-table-component";
// import * as Select from "@radix-ui/react-select";
// import { CheckIcon, ChevronDownIcon, UploadIcon, DownloadIcon, PlusIcon } from "@radix-ui/react-icons";
// import { FiEdit, FiTrash2 } from "react-icons/fi"; // For Edit and Delete icons

// const statusOptions = ["All", "Active", "Inactive"];

// const customStyles = {
//   headCells: {
//     style: {
//       fontWeight: "bold",
//       backgroundColor: " #f9fafb",
//       fontSize: "14px",
//     },
//   },
//   rows: {
//     style: {
//       minHeight: "50px",
//     },
//   },
//   cells: {
//     style: {
//       fontSize: "14px",
//       padding:"10px 0px"
//     },
//   },
// };

// const DataTableComponent = ({
//   data = [],
//   columns = [],
//   title = "Data Table",
//   onAdd = () => {},
//   onExport = () => {},
//   onDownload = () => {},
//   filterByStatus = false,
// }) => {
//   const [statusFilter, setStatusFilter] = React.useState("All");

//   const filteredData = React.useMemo(() => {
//     if (!filterByStatus || statusFilter === "All") return data;
//     return data.filter(
//       (item) =>
//         item.status &&
//         item.status.toLowerCase() === statusFilter.toLowerCase()
//     );
//   }, [data, statusFilter, filterByStatus]);

//   return (
//     <div className="p-4 bg-white rounded-md shadow-md">
//       <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
//         {filterByStatus && (
//           <Select.Root value={statusFilter} onValueChange={setStatusFilter}>
//             <Select.Trigger className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm bg-white shadow-sm min-w-[140px]">
//               <Select.Value />
//               <Select.Icon>
//                 <ChevronDownIcon />
//               </Select.Icon>
//             </Select.Trigger>
//             <Select.Portal>
//               <Select.Content className="bg-white border border-gray-200 rounded-md shadow-md">
//                 <Select.Viewport className="p-1">
//                   {statusOptions.map((option) => (
//                     <Select.Item
//                       key={option}
//                       value={option}
//                       className="px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100"
//                     >
//                       <Select.ItemText>{option}</Select.ItemText>
//                       <Select.ItemIndicator className="absolute right-2">
//                         <CheckIcon />
//                       </Select.ItemIndicator>
//                     </Select.Item>
//                   ))}
//                 </Select.Viewport>
//               </Select.Content>
//             </Select.Portal>
//           </Select.Root>
//         )}

//         <div className="flex gap-2">
//           <button
//             onClick={onExport}
//             className="inline-flex items-center gap-1 px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
//           >
//             <UploadIcon className="w-4 h-4" />
//             Export
//           </button>
//           <button
//             onClick={onDownload}
//             className="inline-flex items-center gap-1 px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
//           >
//             <DownloadIcon className="w-4 h-4" />
//             Download CSV
//           </button>
//           <button
//             onClick={onAdd}
//             className="inline-flex items-center gap-1 px-4 py-2 text-sm text-white bg-green-500 rounded hover:bg-green-600"
//           >
//             <PlusIcon className="w-4 h-4" />
//             New
//           </button>
//         </div>
//       </div>

//       <DataTable
//         title={title}
//         columns={columns}
//         data={filteredData}
//         customStyles={customStyles}
//         pagination
//         highlightOnHover
//         responsive
//         selectableRows
//         onSelectedRowsChange={selected => console.log(selected)}
//         dense
//       />
//     </div>
//   );
// };

// export default DataTableComponent;

// import React from "react";
// import DataTable from "react-data-table-component";
// import * as Select from "@radix-ui/react-select";
// import {
//   CheckIcon,
//   ChevronDownIcon,
//   UploadIcon,
//   DownloadIcon,
//   PlusIcon,
// } from "@radix-ui/react-icons";
// import { FiEdit, FiTrash2 } from "react-icons/fi"; // For Edit and Delete icons
// import TableHeaderActions from "./TableHeaderActions";

// const statusOptions = ["All", "Active", "Inactive"];

// const customStyles = {
//   // headRow: {
//   //     style: {
//   //       position: 'sticky',
//   //       top: 0,
//   //       backgroundColor: '#f9fafb', // or your header background color
//   //       zIndex: 10,
//   //       boxShadow: '0 2px 3px -1px rgba(0,0,0,0.1)',
//   //     }
//   //   },
//   headCells: {
//     style: {
//       fontWeight: "bold",
//       backgroundColor: " #f9fafb",
//       fontSize: "14px",
//       //   padding: "12px 15px", // Add padding for better space
//     },
//   },
//   rows: {
//     style: {
//       minHeight: "60px", // Increased row height
//       //   padding: "12px 15px", // Add padding to rows
//     },
//   },
//   cells: {
//     style: {
//       fontSize: "14px",
//       padding: "12px 15px", // Add padding to cells
//     },
//   },
// };

// const DataTableComponent = ({
//   data = [],
//   columns = [],
//   title = "Projects Table",
//   onAdd = () => {},
//   onExport = () => {},
//   onDownload = () => {},
//   filterByStatus = false,
// }) => {
//   const [statusFilter, setStatusFilter] = React.useState("All");

//   const filteredData = React.useMemo(() => {
//     if (!filterByStatus || statusFilter === "All") return data;
//     return data.filter(
//       (item) =>
//         item.status && item.status.toLowerCase() === statusFilter.toLowerCase()
//     );
//   }, [data, statusFilter, filterByStatus]);

//   return (
//     <div className="p-4 bg-white rounded-md shadow-md">
//       {/* <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
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
//       </div> */}
//       <TableHeaderActions
//         statusFilter={statusFilter}
//         setStatusFilter={setStatusFilter}
//         statusOptions={statusOptions}
//         onAdd={() => console.log("Add New")}
//         onExport={() => console.log("Export clicked")}
//         onDownload={() => console.log("Download CSV clicked")}
//         addLabel="New Member"
//       />

//       <div className="max-h-[700px] overflow-y-auto">
//         <DataTable
//           title={title}
//           columns={columns}
//           data={filteredData}
//           customStyles={customStyles}
//           pagination
//           highlightOnHover
//           responsive
//           selectableRows
//           onSelectedRowsChange={(selected) => console.log(selected)}
//           dense
//         />
//       </div>
//     </div>
//   );
// };

// export default DataTableComponent;


import React from "react";
import DataTable from "react-data-table-component";
import TableHeaderActions from "./TableHeaderActions";

const customStyles = {
  headCells: {
    style: {
      fontWeight: "bold",
      backgroundColor: "#f9fafb",
      fontSize: "14px",
    },
  },
  rows: {
    style: {
      minHeight: "60px",
    },
  },
  cells: {
    style: {
      fontSize: "14px",
      padding: "12px 15px",
    },
  },
};

const DataTableComponent = ({
  data = [],
  columns = [],
  title = "Projects Table",
  onAdd = () => {},
  onExport = () => {},
  onDownload = () => {},
  filterByStatus = false,
  statusOptions = ["All", "Active", "Inactive"],
  addLabel = "Add New",
  showFilter = true,
}) => {
  const [statusFilter, setStatusFilter] = React.useState("All");

  const filteredData = React.useMemo(() => {
    if (!filterByStatus || statusFilter === "All") return data;
    return data.filter(
      (item) =>
        item.status &&
        item.status.toLowerCase() === statusFilter.toLowerCase()
    );
  }, [data, statusFilter, filterByStatus]);

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <TableHeaderActions
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        statusOptions={statusOptions}
        onAdd={onAdd}
        onExport={onExport}
        onDownload={onDownload}
        addLabel={addLabel}
        showFilter={showFilter}
      />

      <div className="max-h-[700px] overflow-y-auto">
        <DataTable
          title={title}
          columns={columns}
          data={filteredData}
          customStyles={customStyles}
          pagination
          highlightOnHover
          responsive
          selectableRows
          onSelectedRowsChange={(selected) => console.log(selected)}
          dense
        />
      </div>
    </div>
  );
};

export default DataTableComponent;
