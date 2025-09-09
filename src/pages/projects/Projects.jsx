import React, { useEffect, useState } from "react";
import DataTableComponent from "../../components/table/Table";
import data from '../../utils/P'
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useTheme } from "../../components/context/ThemeProvider";
import { createProject, fetchProjects } from "../../redux/slices/projectsSlice";
import { showError, showSuccess } from "../../components/toaster/Toasters";
import { useDispatch, useSelector } from "react-redux";
import {Lightbox} from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useDebounce } from "../../hooks/useDebounce";
const statusOptions = ["All", "Active", "Inactive"];
const formatPrice = (value) => {
  const num = parseFloat(value);
  if (isNaN(num)) return "N/A";
  if (num >= 10000000) return `₹${(num / 10000000).toFixed(2).replace(/\.?0+$/, '')} Cr`;
  if (num >= 100000) return `₹${(num / 100000).toFixed(2).replace(/\.?0+$/, '')} L`;
  if (num >= 1000) return `₹${(num / 1000).toFixed(0)} K`;
  return `₹${num.toFixed(0)}`;
};
const renderPriceRange = (min, max) => {
  const minFormatted = formatPrice(min);
  const maxFormatted = formatPrice(max);
  if (!min && !max) return "N/A";
  if (!min) return `Up to ${maxFormatted}`;
  if (!max) return `Above ${minFormatted}`;
  return `${minFormatted} - ${maxFormatted}`;
};
const columns = [
  {
    name: "Project Title",
    selector: row => row.project_title,
    sortable: true,
  },
  // {
  //   name: "Description",
  //   selector: row => row.description,
  //   grow: 3,
  // },
  {
    name: "Description",
    selector: row => row.description,
    grow: 1,
    wrap: true,
    // minWidth: "200px",
    // maxWidth: "250px",
    cell: row => (
      <div
      title={row.description}
      style={{
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
        // maxWidth: "200px",
        cursor: "pointer"
      }}
    >
        {row.description}
      </div>
    ),
  },
  
  {
    name: "Location",
    selector: row => row.location,
  },
  {
    name: "Price Range",
    selector: row => renderPriceRange(row.min_price, row.max_price),
  },   
  {
    name: "Image",
    cell: row => {
      const [open, setOpen] = useState(false);  
      // Convert raw image URLs to the required format
      const slides = row.images?.map((src) => ({ src })) || [];
      return (
        <div className="py-2 ">
          {slides.length > 0 && (
            <>
              <img
                src={slides[0].src}
                alt={row.project_title}
                className="w-[80px] h-[80px] object-cover rounded cursor-pointer"
                onClick={() => setOpen(true)}
              />
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
              />
            </>
          )}
        </div>
      );
    },
    ignoreRowClick: true,
    $allowOverflow: true,
    $button: true,
  },
  {
    name: "Brochure",
    cell: row => (
      <a
        href={row?.brouchers}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline dark:text-blue-400"
      >
      Brochure
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
          className="cursor-pointer text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <FiEdit />
        </button>
        <button
          title="Delete"
          onClick={() => console.log("Delete", row)}
          className="cursor-pointer text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
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
  const dispatch = useDispatch();
  const {projectList ,isLoading} = useSelector((state)=>state.projects);
   const { query } = useSelector((state) => state.search);
  const debouncedQuery = useDebounce(query, 500);
  
  useEffect(()=>{
   dispatch(fetchProjects(debouncedQuery ? { q: debouncedQuery } : {}))
  },[dispatch, debouncedQuery])

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
  
    const filename = 'projects_export.csv';
  
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
    const handleDownload = () => { downloadCSV(projectList, columns); };
    const handleSubmit = async (values, { setSubmitting, setErrors,resetForm,  }) => {
      try {
        const formData = new FormData();
        formData.append("project_title", values.projectTitle);
        formData.append("location", values.location);
        formData.append("min_price", values.minPrice);
        formData.append("max_price", values.maxPrice);
        formData.append("description", values.description);
        // Append multiple images
        Array.from(values.image).forEach((image) => {
          formData.append("images", image);
        });
        formData.append("brouchers", values.brochure);
        const result =  await dispatch(createProject(formData)).unwrap();
        showSuccess(result.message || "Channel Partner added successfully");
        resetForm();
        dispatch(fetchProjects())
        return true;
      } catch (error) {
        console.error("Error adding channel partner:", error);
       // ✅ Error: Show toast but don't close modal
        showError(error.message || "Failed to add Channel Partner");
        return false;
      } finally {
        setSubmitting(false);
      }
    };
  // const  projectFormFields = [
  //     {
  //       name: "projectTitle",
  //       label: "Project Title",
  //       type: "text",
  //       required: true,
  //     },
    
  //     {
  //       name: "location",
  //       label: "Location",
  //       type: "text",
  //       required: true,
  //     },
  //     {
  //       name: "priceRange",
  //       label: "Min Price Range",
  //       type: "text",
  //       required: false,
  //       placeholder: "e.g. $100k - $500k",
  //     },
  //     {
  //       name: "priceRange",
  //       label: "Max Price Range",
  //       type: "text",
  //       required: true,
  //       placeholder: "e.g. $100k - $500k",
  //     },
  //     {
  //       name: "image",
  //       label: "Image file",
  //       type: "file",
  //       required: true,
  //       placeholder: "Enter image ",
  //     },
  //     {
  //       name: "brochure",
  //       label: "Brochure",
  //       type: "file",
  //       required: true,
  //       placeholder: "Enter brochure pdf",
  //     },
  //     {
  //       name: "description",
  //       label: "Description (Optional)",
  //       type: "textarea",  // We will add support for textarea in form dialog
  //       required: false,
  //     },
  //   ];
  const projectFormFields = [
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
      name: "minPrice",
      label: "Min Price",
      type: "number",
      required: true,
      placeholder: "e.g. 100000",
    },
    {
      name: "maxPrice",
      label: "Max Price",
      type: "number",
      required: true,
      placeholder: "e.g. 500000",
    },
    {
      name: "image",
      label: "Project Images (Multiple)",
      type: "file",
      required: true,
      multiple: true,
    },
    {
      name: "brochure",
      label: "Brochure (PDF only)",
      type: "file",
      required: true,
      accept: "application/pdf",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
    },
  ];
  return (
    <div className={`min-h-auto py-6 ${isDark ? "bg-[#1e1e1e] text-gray-100 " : "bg-white text-gray-800"}`}>
      <DataTableComponent
        data={projectList }
        columns={columns}
        title="Projects Table"
        filterByStatus={true}
        statusOptions={statusOptions}
        formFields={projectFormFields}
        onAdd={handleAdd}
        onExport={handleExport}
        // onDownload={handleDownload}
        onSubmit={handleSubmit}
        addLabel="Add Project"
        showFilter={false}
        formLabel="Add Project Form"
        loading={isLoading}
      />
    </div>
  );
};
export default Projects;
