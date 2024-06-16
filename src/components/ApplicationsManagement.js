import React, { useState } from "react";

import {
  Tooltip,
  TableCell,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

import Drawer from "./Drawer";
import { applicationsData, applicationColumns } from "../data";
import { IoAddSharp, IoFilterSharp } from "react-icons/io5";

import { FiEdit } from "react-icons/fi";

import "../styles/UserManagement.css";

const ApplicationsManagement = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="user-management">
      <div className="user-management-header">
        <h2>Application Management</h2>

        <div className="d-flex users-btns">
          <button className="filters-btn">
            <IoFilterSharp />
            <span>Filters</span>
          </button>

          <button
            className="create-new"
            onClick={() => {
              setIsCreate(true);
              toggleDrawer();
            }}
          >
            <span>Create New</span>
            <IoAddSharp />
          </button>
        </div>
      </div>

      <Paper sx={{ width: "100%", overflow: "hidden" }} className="table">
        <TableContainer sx={{ maxHeight: 630 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {applicationColumns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {applicationsData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {applicationColumns.map((column) => {
                        const value = row[column.id];

                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "actions" ? (
                              <div className="actions">
                                <Tooltip title="Edit Application" arrow>
                                  <IconButton
                                    onClick={() => {
                                      setIsCreate(false);
                                      toggleDrawer();
                                    }}
                                  >
                                    <FiEdit className="edit-icon" />
                                  </IconButton>
                                </Tooltip>
                              </div>
                            ) : (
                              value
                            )}
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
          count={applicationsData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <Drawer
        isOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        isCreate={isCreate}
        type={"app"}
      />
    </div>
  );
};

export default ApplicationsManagement;
