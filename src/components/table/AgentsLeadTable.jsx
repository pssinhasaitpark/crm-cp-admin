import React from "react";
import DataTable from "react-data-table-component";
import TableHeaderActions from "./TableHeaderActions";
import FormDialog from "../form/FormDialog";
import { useTheme } from "../../components/context/ThemeProvider"; // ✅ Import theme context

const DataTableComponent = ({
  data = [],
  columns = [],
  title = "Projects Table",
  filterByStatus = false,
}) => {
  const { theme } = useTheme(); // ✅ Get theme
  const isDark = theme === "dark";
  const [statusFilter, setStatusFilter] = React.useState("All");

  const filteredData = React.useMemo(() => {
    if (!filterByStatus || statusFilter === "All") return data;
    return data.filter(
      (item) =>
        item.status &&
        item.status.toLowerCase() === statusFilter.toLowerCase()
    );
  }, [data, statusFilter, filterByStatus]);
  
  const customStyles = {
    headCells: {
      style: {
        fontWeight: "bold",
        backgroundColor: isDark ? "#2a2a2a" : "#f9fafb",
        fontSize: "14px",
        color: isDark ? "#ffffff" : "#000000",
      },
    },
    rows: {
      style: {
        minHeight: "60px",
        backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
        color: isDark ? "#e5e5e5" : "#000000",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
        padding: "12px 15px",
        color: isDark ? "#e5e5e5" : "#000000",
      },
    },
    pagination: {
      style: {
        backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
        color: isDark ? "#e5e5e5" : "#000000",
      },
    },
  };
  return (
    <div  className={`p-4 rounded-md shadow-md ${
      isDark ? "bg-[#1e1e1e] text-white border border-gray-700" : "bg-white text-black shadow-md"
    }`}>
      <div >
        <DataTable
          title={title}
          columns={columns}
          data={filteredData}
          customStyles={customStyles}
          pagination
          // paginationComponent={MyCustomPagination}
          highlightOnHover
          responsive
          selectableRows
          onSelectedRowsChange={(selected) => (selected)}
          dense
          theme={isDark ? "dark" : "light"}
        />
      </div>
    </div>
  );
};

export default DataTableComponent;
