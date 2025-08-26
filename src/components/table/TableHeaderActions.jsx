// import React from "react";
// import { ChevronDownIcon, UploadIcon, DownloadIcon, PlusIcon } from "@radix-ui/react-icons";

// const TableHeaderActions = ({
//   statusFilter = "All",
//   setStatusFilter = () => {},
//   statusOptions = [],
//   onAdd = () => {},
//   onExport = () => {},
//   onDownload = () => {},
//   showFilter = true,
//   addLabel = "Add New",
// }) => {
//   return (
//     <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
//       {showFilter && (
//         <div className="relative inline-block">
//           <select
//             value={statusFilter}
//             onChange={(e) => setStatusFilter(e.target.value)}
//             className="appearance-none w-[160px] px-3 py-2 pr-8 border border-gray-300 rounded-md text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           >
//             {statusOptions.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//           <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400">
//             <ChevronDownIcon className="w-4 h-4" />
//           </div>
//         </div>
//       )}

//       <div className="flex gap-2">
//         <button
//           onClick={onExport}
//           className="inline-flex items-center gap-1 px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
//         >
//           <UploadIcon className="w-4 h-4" />
//           Export
//         </button>
//         <button
//           onClick={onDownload}
//           className="inline-flex items-center gap-1 px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
//         >
//           <DownloadIcon className="w-4 h-4" />
//           Download CSV
//         </button>
//         <button
//           onClick={onAdd}
//           className="inline-flex items-center gap-1 px-4 py-2 text-sm text-white bg-green-500 rounded hover:bg-green-600"
//         >
//           <PlusIcon className="w-4 h-4" />
//           {addLabel}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TableHeaderActions;


import React from "react";
import { ChevronDownIcon, UploadIcon, DownloadIcon, PlusIcon } from "@radix-ui/react-icons";

const TableHeaderActions = ({
  statusFilter = "All",
  setStatusFilter = () => {},
  statusOptions = [],
  onAdd = () => {},
  onExport = () => {},
  onDownload = () => {},
  showFilter = true,
  addLabel = "Add New",
}) => {
  return (
    <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
      {showFilter && (
        <div className="relative inline-block">
          <select
            aria-label="Filter by status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="appearance-none w-[160px] px-3 py-2 pr-8 border border-gray-300 rounded-md text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400">
            <ChevronDownIcon className="w-4 h-4" />
          </div>
        </div>
      )}

      <div className="flex gap-2">
        <button
          type="button"
          aria-label="Export data"
          onClick={onExport}
          className="inline-flex items-center gap-1 px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100 cursor-pointer"
          title="Export"
        >
          <UploadIcon className="w-4 h-4" />
          Export
        </button>
        <button
          type="button"
          aria-label="Download CSV"
          onClick={onDownload}
          className="inline-flex items-center gap-1 px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100 cursor-pointer"
          title="Download CSV"
        >
          <DownloadIcon className="w-4 h-4" />
          Download CSV
        </button>
        <button
          type="button"
          aria-label={addLabel}
          onClick={onAdd}
          className="inline-flex items-center gap-1 px-4 py-2 text-sm text-white bg-green-500 rounded hover:bg-green-600 cursor-pointer"
          title={addLabel}
        >
          <PlusIcon className="w-4 h-4" />
          {addLabel}
        </button>
      </div>
    </div>
  );
};

export default TableHeaderActions;
