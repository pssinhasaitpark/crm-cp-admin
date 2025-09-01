import React from "react";
import DataTableComponent from "../../components/table/Table";
import data from '../../utils/P'
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useTheme } from "../../components/context/ThemeProvider";

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
    grow: 3,
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
    $allowOverflow: true,
    $button: true,
  },
  {
    name: "Brochure",
    cell: row => (
      <a
        href={row.brochure}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline dark:text-blue-400"
      >
        View Brochure
      </a>
    ),
    ignoreRowClick: true,
    $allowOverflow: true,
    $button: true,
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
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleAddMember = (data) => {
    console.log("New Member:", data);
    // 🔁 Add logic to update state or send API
  };
    const handleAdd = () => console.log("Add New Channel Partner");
    const handleExport = () => console.log("Export clicked");
    const handleDownload = () => console.log("Download CSV clicked");
  
  const  projectFormFields = [
      {
        name: "projectTitle",
        label: "Project Title",
        type: "text",
        required: true,
      },
    
      {
        name: "location",
        label: "Location",
        type: "text",
        required: true,
      },
      {
        name: "priceRange",
        label: "Min Price Range",
        type: "text",
        required: false,
        placeholder: "e.g. $100k - $500k",
      },
      {
        name: "priceRange",
        label: "Max Price Range",
        type: "text",
        required: true,
        placeholder: "e.g. $100k - $500k",
      },
      {
        name: "image",
        label: "Image file",
        type: "file",
        required: true,
        placeholder: "Enter image ",
      },
      {
        name: "brochure",
        label: "Brochure",
        type: "file",
        required: true,
        placeholder: "Enter brochure pdf",
      },
      {
        name: "description",
        label: "Description (Optional)",
        type: "textarea",  // We will add support for textarea in form dialog
        required: false,
      },
    ];
  return (
    <div className={`min-h-auto py-6 ${isDark ? "bg-[#1e1e1e] text-gray-100 " : "bg-white text-gray-800"}`}>
      <DataTableComponent
        data={data}
        columns={columns}
        title="Projects Table"
        filterByStatus={true}
        statusOptions={statusOptions}
        formFields={projectFormFields}
        onAdd={handleAdd}
        onExport={handleExport}
        onDownload={handleDownload}
        addLabel="Add Project"
        formLabel="Add Project Form"
      />
    </div>
  );
};

export default Projects;
