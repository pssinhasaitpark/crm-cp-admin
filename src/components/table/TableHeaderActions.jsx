import React from "react";
import { ChevronDownIcon, UploadIcon, DownloadIcon, PlusIcon } from "@radix-ui/react-icons";
import { useTheme } from "../../components/context/ThemeProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "./datepickerTheme.css"


const TableHeaderActions = ({
  statusFilter = "All",
  setStatusFilter = () => { },
  statusOptions = [],
  onAdd = () => { },
  onExport = () => { },
  onDownload = () => { },
  addDialogTrigger = null,
  showFilter = true,
  addLabel = "Add New",
  showAddButton = true,
  dateFilter = { from: null, to: null },
  setDateFilter = () => { },
  resetDateFilter=() => {}
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const selectClasses = `capitalize appearance-none w-[160px] px-3 py-2 pr-8 rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${isDark
      ? "bg-gray-800 text-gray-200 border-gray-600"
      : "bg-white text-gray-800 border-gray-300"
    }`;

  const buttonBase = `inline-flex items-center gap-1 px-4 py-2 text-sm rounded cursor-pointer`;
  const exportBtn = `${buttonBase} ${isDark
      ? "bg-gray-800 border border-gray-600 text-gray-200 hover:bg-gray-700"
      : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"
    }`;
  const addBtn = `${buttonBase} text-white bg-green-500 hover:bg-green-600`;
  const dateInputClasses = `w-[140px] px-3 py-2 rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${isDark
      ? "bg-gray-800 text-gray-200 border-gray-600"
      : "bg-white text-gray-800 border-gray-300"
    }`;
  return (
    <div className={`flex items-center mb-4 flex-wrap gap-2 ${showFilter ? "justify-between" : "justify-end"
      }`}>
      {showFilter && (
        <div className="flex items-center gap-2">
          <div className="relative inline-block">
            <select
              aria-label="Filter by status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className={selectClasses}

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
          <DatePicker
            selected={dateFilter.from}
            onChange={(date) =>
              setDateFilter((prev) => ({ ...prev, from: date }))
            }
            selectsStart
            startDate={dateFilter.from}
            endDate={dateFilter.to}
            placeholderText="From Date"
            dateFormat="dd/MM/yyyy"
            className={dateInputClasses}
            calendarClassName={isDark ? "dark" : "light"} // 👈 theme se control
          />

          <DatePicker
            selected={dateFilter.to}
            onChange={(date) =>
              setDateFilter((prev) => ({ ...prev, to: date }))
            }
            selectsEnd
            startDate={dateFilter.from}
            endDate={dateFilter.to}
            minDate={dateFilter.from}
            placeholderText="To Date"
            dateFormat="dd/MM/yyyy"
            className={dateInputClasses}
            calendarClassName={isDark ? "dark" : "light"} // 👈 theme se control
          />
          <button
            type="button"
            onClick={resetDateFilter}
            // className="px-3 py-1 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-600"
           className={`px-3 py-1 rounded-md shadow-sm cursor-pointer hover:shadow-md
    ${isDark ? "bg-gray-800 text-gray-200 border-gray-600" : "bg-white text-gray-800 border-gray-300"}`}
          >
            Reset Dates
          </button>

        </div>
      )}

      <div className="flex gap-2 flex-wrap">
        <button
          type="button"
          aria-label="Export data"
          onClick={onExport}
          className={exportBtn}
          title="Export"
        >
          <UploadIcon className="w-4 h-4" />
          Export
        </button>
        <button
          type="button"
          aria-label="Download CSV"
          onClick={onDownload}
          className={exportBtn}
          title="Download CSV"
        >
          <DownloadIcon className="w-4 h-4" />
          Download CSV
        </button>
        {/* {addDialogTrigger} */}
        {showAddButton && addDialogTrigger}
      </div>
    </div>
  );
};

export default TableHeaderActions;
