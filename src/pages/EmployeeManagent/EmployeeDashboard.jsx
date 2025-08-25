import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/BreadCrumb/BreadCrumb";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import { breadcrumbConfig } from "../../routes/breadcrumbConfig";
import { rows, columns as originalColumns } from "../../utils/Employee";

const EmployeeDashboard = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [actions, setActions] = useState({});

  const navigate = useNavigate();

  const columns = [
    ...originalColumns,
    { id: "action", label: "Action", align: "center", minWidth: 150 },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleActionChange = (event, employeeCode) => {
    const selectedAction = event.target.value;
   console.log("employeeCode", employeeCode)
    if (selectedAction === "view") {
      navigate(`/employees/${employeeCode}`);
    } else if (selectedAction === "edit") {
      navigate(`/employees/${employeeCode}`);
    }

    setActions((prev) => ({
      ...prev,
      [employeeCode]: "",
    }));
  };

  return (
    <div>
      <Breadcrumb crumbs={breadcrumbConfig["/employees"]} />
      <Box sx={{ width: "100%", overflow: "hidden", marginTop: 2 }}>
        <TableContainer sx={{ maxHeight: 750 }}>
          <Table stickyHeader aria-label="employee table">
            <TableHead>
              <TableRow>
                {columns.map((col) => (
                  <TableCell
                    key={col.id}
                    align={col.align || "left"}
                    sx={{
                      minWidth: col.minWidth,
                      fontWeight: "bold",
                      py: 2,
                      border: "none",
                      backgroundColor: "#E3EDF9",
                    }}
                  >
                    {col.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isAlternateRow = index % 2 === 1;
                  return (
                    <TableRow
                      key={row.code}
                      hover
                      sx={{
                        backgroundColor: isAlternateRow ? "#E3EDF9" : "white",
                        cursor: "default",
                        "&:hover": { backgroundColor: "#D3E3F3" },
                      }}
                    >
                      {columns.map((col) => {
                        if (col.id === "action") {
                          return (
                            <TableCell
                              key={col.id}
                              align="center"
                            //   sx={{ py: 3 }}
                            >
                              <FormControl
                                sx={{ m: 1, minWidth: 120, p:"0px" }}
                                size="small"
                              >
                                <InputLabel id={`action-label-${row.code}`}>
                                  Action
                                </InputLabel>
                                <Select
                                  labelId={`action-label-${row.code}`}
                                  id={`action-select-${row.code}`}
                                  value={actions[row.code] || ""}
                                  label="Action"
                                  onChange={(e) =>
                                    handleActionChange(e, row.id)
                                  }
                                  
                                >
                                  <MenuItem
                                    value="view"
                                  >
                                    View
                                  </MenuItem>
                                  <MenuItem
                                    value="edit"
                                  >
                                    Edit
                                  </MenuItem>
                                </Select>
                              </FormControl>
                            </TableCell>
                          );
                        }

                        const value = row[col.id];
                        return (
                          <TableCell
                            key={col.id}
                            align={col.align || "left"}
                            sx={{ py: 2, fontWeight: "bold", border: "none" }}
                          >
                            {col.format && typeof value === "number"
                              ? col.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ mt: 2 }}
        />
      </Box>
    </div>
  );
};

export default EmployeeDashboard;
