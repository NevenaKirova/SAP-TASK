import React, { useState } from "react";

import {
  Tooltip,
  TableCell,
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Chip,
  Tabs,
  Tab,
  Box,
  DialogTitle,
  DialogContentText,
  Button,
} from "@mui/material";

import Drawer from "./Drawer";

import {
  rolesColumns,
  rolesData,
  permissionsColumns,
  permissionsData,
} from "../data";

import { IoAddSharp, IoFilterSharp } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";

import "../styles/UserManagement.css";
import "../styles/RolesManagement.css";
export const RolesManagement = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [page, setPage] = useState(0);
  const [pagePermissions, setPagePermissions] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rowsPerPagePermissions, setRowsPerPagePermissions] = useState(10);
  const [tab, setTab] = useState(0);
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
    setIsDrawerOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangePagePermissions = (event, newPage) => {
    setPagePermissions(newPage);
  };
  const handleChangeRowsPerPagePermissions = (event) => {
    setRowsPerPagePermissions(+event.target.value);
    setPagePermissions(0);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box className="roles-management">
      <Box>
        <Tabs
          value={tab}
          onChange={handleChangeTab}
          aria-label="tabs"
          className={"tabs"}
        >
          <Tab label="Roles" />
          <Tab label="Permissions" />
        </Tabs>
      </Box>

      <div
        role="tabpanel"
        hidden={tab !== 0}
        id={`simple-tabpanel-${0}`}
        aria-labelledby={`simple-tab-${0}`}
      >
        {tab === 0 && (
          <Box sx={{ p: 3 }}>
            <div>
              <div className="user-management-header">
                <h2>Roles Management</h2>

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

              <Paper
                sx={{ width: "100%", overflow: "hidden" }}
                className="table"
              >
                <TableContainer sx={{ maxHeight: 560 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {rolesColumns.map((column) => (
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
                      {rolesData
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage,
                        )
                        .map((row) => {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.id}
                            >
                              {rolesColumns.map((column) => {
                                const value = row[column.id];

                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                    {column.id === "permissions" ||
                                    column.id === "applications" ? (
                                      <div className="chip-container">
                                        {value.map((el) => (
                                          <Chip
                                            label={el}
                                            key={el}
                                            variant={
                                              column.id === "permissions"
                                                ? "outlined"
                                                : ""
                                            }
                                            className={
                                              column.id === "permissions"
                                                ? "chip"
                                                : ""
                                            }
                                            size="small"
                                          />
                                        ))}
                                      </div>
                                    ) : column.id === "actions" ? (
                                      <div className="actions">
                                        <Tooltip title="Edit Role" arrow>
                                          <IconButton
                                            onClick={() => {
                                              setIsCreate(false);
                                              toggleDrawer();
                                            }}
                                          >
                                            <FiEdit className="edit-icon" />
                                          </IconButton>
                                        </Tooltip>

                                        <Tooltip title="Delete Role" arrow>
                                          <IconButton
                                            onClick={handleOpenConfirm}
                                          >
                                            <GoTrash className="delete-icon" />
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
                  key={"roles"}
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rolesData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </div>
          </Box>
        )}
      </div>

      <div
        role="tabpanel"
        hidden={tab !== 1}
        id={`simple-tabpanel-${1}`}
        aria-labelledby={`simple-tab-${1}`}
      >
        {tab === 1 && (
          <Box sx={{ p: 3 }}>
            <div>
              <div className="user-management-header">
                <h2>Permissions </h2>
              </div>

              <Paper
                sx={{ width: "100%", overflow: "hidden" }}
                className="table"
              >
                <TableContainer sx={{ maxHeight: 580 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {permissionsColumns.map((column) => (
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
                      {permissionsData
                        .slice(
                          page * rowsPerPagePermissions,
                          page * rowsPerPagePermissions +
                            rowsPerPagePermissions,
                        )
                        .map((row) => {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.id}
                            >
                              {permissionsColumns.map((column) => {
                                const value = row[column.id];

                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                    {value}
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
                  key={"permissions"}
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={permissionsData.length}
                  rowsPerPage={rowsPerPagePermissions}
                  page={pagePermissions}
                  onPageChange={handleChangePagePermissions}
                  onRowsPerPageChange={handleChangeRowsPerPagePermissions}
                />
              </Paper>
            </div>
          </Box>
        )}
      </div>

      <Dialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this role?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please proceed with caution as this may result in unwanted results
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirm}>Cancel</Button>
          <Button onClick={handleCloseConfirm} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <Drawer
        isOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        isCreate={isCreate}
        type={"role"}
      />
    </Box>
  );
};

export default RolesManagement;
