import React from 'react'
import DataTableComponent from '../../components/table/Table'
import { FiDownload, FiEye, FiRefreshCcw, FiCheck } from 'react-icons/fi'
import { useTheme } from "../../components/context/ThemeProvider"
import invoiceData from '../../utils/Invoice' // 👈 Make sure to have dummy data here

const paymentStatusStyles = {
  "Paid": "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-200",
  "Pending": "bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-200",
  "Failed": "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-200"
}

const columns = [
  {
    name: "Invoice No.",
    selector: row => row.invoiceId,
    sortable: true
  },
  {
    name: "Booking ID",
    selector: row => row.bookingId
  },
  {
    name: "Customer Name",
    selector: row => row.customerName
  },
  {
    name: "Agent / CP",
    selector: row => row.agent
  },
  {
    name: "Amount (₹)",
    selector: row => row.amount
  },
  // {
  //   name: "Payment Method",
  //   selector: row => row.paymentMethod
  // },
  {
    name: "Status",
    selector: row => row.status,
    cell: row => (
      <span
        className={`text-xs px-2 py-1 rounded-full font-medium ${
          paymentStatusStyles[row.status] || "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
        }`}
      >
        {row.status}
      </span>
    )
  },
  {
    name: "Date",
    selector: row => row.date
  },
  {
    name: "Action",
    cell: row => (
      <div className="flex gap-2">
        <button
          title="View"
          onClick={() => console.log("View", row)}
          className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer"
        >
          <FiEye />
        </button>

        {/* {row.status === "Paid" && ( */}
          <button
            title="Download Invoice"
            onClick={() => console.log("Download", row)}
            className="text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 cursor-pointer"
          >
            <FiDownload />
          </button>
        {/* // )} */}

        {/* {row.status === "Pending" && (
          <button
            title="Approve"
            onClick={() => console.log("Approve", row)}
            className="text-yellow-500 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300"
          >
            <FiCheck />
          </button>
        )}

        {row.status === "Failed" && (
          <button
            title="Retry"
            onClick={() => console.log("Retry", row)}
            className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
          >
            <FiRefreshCcw />
          </button>
        )} */}
      </div>
    ),
    ignoreRowClick: true,
    $allowOverflow: true,
    $button: true
  }
]

const PaymentAndInvoice = () => {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const handleAdd = () => console.log("Add Invoice")
  const handleExport = () => console.log("Export Invoices")
  const handleDownload = () => console.log("Download Invoices")

  return (
    <div className={`min-h-auto py-6 rounded-lg shadow-lg ${isDark ? "bg-[#1e1e1e] text-gray-100" : "bg-white text-gray-800"}`}>
      <DataTableComponent
        data={invoiceData}
        columns={columns}
        title="Payment & Invoices"
        onAdd={handleAdd}
        onExport={handleExport}
        onDownload={handleDownload}
        addLabel="Add Invoice"
        showAddButton={false} 
      />
    </div>
  )
}

export default PaymentAndInvoice
