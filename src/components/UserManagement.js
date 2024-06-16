import React, { useState } from "react";

import {
  Tooltip,
  TableCell,
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  DialogContentText,
  DialogTitle,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Chip,
} from "@mui/material";

import Drawer from "./Drawer";
import { usersData, userColumns } from "../data";
import { IoAddSharp, IoFilterSharp } from "react-icons/io5";

import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";

import "../styles/UserManagement.css";

const UserManagement = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [openConfirm, setOpenConfirm] = React.useState(false);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

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
        <h2>User Management</h2>

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
                {userColumns.map((column) => (
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
              {usersData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {userColumns.map((column) => {
                        const value = row[column.id];

                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "roles" ? (
                              <div className="chip-container">
                                {value.map((el) => (
                                  <Chip
                                    label={el}
                                    key={el}
                                    variant="outlined"
                                    className="chip"
                                    size="small"
                                  />
                                ))}
                              </div>
                            ) : column.id === "status" ? (
                              <Chip
                                label={value}
                                className={
                                  value === "Active"
                                    ? "chip-status-active"
                                    : "chip-status"
                                }
                                size="small"
                              />
                            ) : column.id === "actions" ? (
                              <div className="actions">
                                <Tooltip title="Edit User" arrow>
                                  <IconButton
                                    onClick={() => {
                                      setIsCreate(false);
                                      toggleDrawer();
                                    }}
                                  >
                                    <FiEdit className="edit-icon" />
                                  </IconButton>
                                </Tooltip>

                                <Tooltip title="Delete User" arrow>
                                  <IconButton onClick={handleOpenConfirm}>
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
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={usersData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <Dialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this user?"}
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
        type={"user"}
      />
    </div>
  );
};

export default UserManagement;
