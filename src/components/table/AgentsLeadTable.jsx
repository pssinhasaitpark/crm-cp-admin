import React from "react";
import DataTable from "react-data-table-component";
import AgentsLeadTableActions from "./AgentsLeadTableActions";
import FormDialog from "../form/FormDialog";
import { useTheme } from "../../components/context/ThemeProvider"; // ✅ Import theme context

const DataTableComponent = ({
  data = [],
  columns = [],
  title = "Projects Table",
  filterByStatus = false,
  statusOptions = ["All", "Active", "Inactive"],
  onAdd = () => { },
  onExport = () => { },
  onDownload = () => { },
  onSubmit = () => { },
  addLabel = "Add New",
  showFilter = true,
  formFields = [],
  formLabel = "Add",
  showAddButton = true,
}) => {
  const { theme } = useTheme(); // ✅ Get theme
  const isDark = theme === "dark";
  const [statusFilter, setStatusFilter] = React.useState("All");
    const [dateFilter, setDateFilter] = React.useState({ from: null, to: null });

  // const filteredData = React.useMemo(() => {
  //   if (!filterByStatus || statusFilter === "All") return data;
  //   return data.filter(
  //     (item) =>
  //       item.status &&
  //       item.status.toLowerCase() === statusFilter.toLowerCase()
  //   );
  // }, [data, statusFilter, filterByStatus]);
  const filteredData = React.useMemo(() => {
    let filtered = data;
  
    // ✅ Status filter
    if (filterByStatus && statusFilter !== "All") {
      filtered = filtered.filter(
        (item) =>
          item.status &&
          item.status.toLowerCase() === statusFilter.toLowerCase()
      );
    }
  
    // ✅ Date range filter
    if (dateFilter.from && dateFilter.to) {
      filtered = filtered.filter((item) => {
        const itemDate = dayjs(item.date); // 👈 safe parse
        return (
          itemDate?.isSameOrAfter(dayjs(dateFilter.from), "day") &&
          itemDate?.isSameOrBefore(dayjs(dateFilter.to), "day")
        );
      });
    }
  
    return filtered;
  }, [data, statusFilter, filterByStatus, dateFilter]);
  const resetDateFilter = () => setDateFilter({ from: null, to: null });
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
       <AgentsLeadTableActions
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        statusOptions={statusOptions}
        onAdd={onAdd}
        onExport={onExport}
        onDownload={onDownload}
        addLabel={addLabel}
        addDialogTrigger={
          <FormDialog
            title={formLabel}
            triggerLabel={addLabel}
            fields={formFields}
            // onSubmit={onAdd}
            onSubmit={onSubmit}
            submitLabel="Add"
          />
        }
        showFilter={showFilter}
        showAddButton={showAddButton}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
        resetDateFilter={resetDateFilter}
      />
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
