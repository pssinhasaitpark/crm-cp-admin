import React from "react";
import DataTableComponent from "../../components/table/Table";
import data from '../../utils/P'
import { CheckIcon } from "@radix-ui/react-icons";
import { FiEdit, FiTrash2 } from "react-icons/fi";
// Columns definition with custom renderers

const statusOptions = ["All", "Active", "Inactive"];

const columns = [
    {
      name: "Project Title",
      selector: row => row.projectTitle,
      sortable: true,
    },
    {
      name: "Description",
      selector: row => row.description,
      grow: 2, // Allows the column to expand more
    },
    {
      name: "Location",
      selector: row => row.location,
    },
    {
      name: "Price Range",
      selector: row => row.priceRange,
    },
    {
      name: "Image",
      cell: row => (
        <div className="py-2 w-20">
        <img
          src={row.image}
          alt={row.projectTitle}
          className="w-30 h-20 object-cover rounded"
          />
          </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: "Brochure",
      cell: row => (
        <a
          href={row.brochure}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View Brochure
        </a>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
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
    },
  ];
    // You can define handlers here or pass empty functions if not used yet
    const handleAdd = () => console.log("Add New Channel Partner");
    const handleExport = () => console.log("Export clicked");
    const handleDownload = () => console.log("Download CSV clicked");
  

const Projects = () => {
  return (
    <div className="min-h-auto bg-gray-50 p-6">
      <DataTableComponent
        data={data}
        columns={columns}
        title="Projects Table"
        filterByStatus={true}
        statusOptions={statusOptions}
        onAdd={handleAdd}
        onExport={handleExport}
        onDownload={handleDownload}
        addLabel="New Member"
      />
    </div>
  );
};

export default Projects;
