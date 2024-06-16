import React, { useState, useEffect } from "react";

import {
  TextField,
  Autocomplete,
  Switch,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  DialogContentText,
  DialogTitle,
  FormLabel,
  FormControl,
} from "@mui/material";

import { roles, teams, applicationsData, permissionsData } from "../data";
import { debounce } from "../utils/debaunce";

import { IoMdClose } from "react-icons/io";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import "../styles/Drawer.css";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const types = {
  user: { create: "Create User", edit: "Edit User" },
  role: { create: "Create Role", edit: "Edit Role" },
  app: { create: "Creat Application", edit: "Edit Application" },
};
const Drawer = ({ isOpen, toggleDrawer, isCreate, type }) => {
  const [permissionValue, setPermissionValue] = useState("");
  const [filteredPermissions, setFilteredPermissions] =
    useState(permissionsData);
  const [openConfirm, setOpenConfirm] = React.useState(false);

  const handleSearch = debounce((value) => {
    if (!value.length) {
      setFilteredPermissions(permissionsData);
    } else {
      const filtered = permissionsData.filter((permission) =>
        permission.name.toLowerCase().includes(value.toLowerCase()),
      );
      setFilteredPermissions(filtered);
    }
  }, 300);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  useEffect(() => {
    handleSearch(permissionValue);
  }, [permissionValue,handleSearch]);

  return (
    <div className={`drawer ${isOpen ? "open" : ""}`}>
      <div className="d-flex">
        <h2>{isCreate ? types[type].create : types[type].edit}</h2>

        <button className="close-button" onClick={toggleDrawer}>
          <IoMdClose className="close-icon" />
        </button>
      </div>

      {type === "user" && (
        <form>
          <div className="drawer-content">
            <div className="drawer-content ">
              <TextField
                label="Name"
                variant="outlined"
                required
                size="small"
              />
              <TextField
                label="Email"
                variant="outlined"
                required
                type="email"
                size="small"
              />
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={teams}
                renderInput={(params) => (
                  <TextField {...params} label="Team" size="small" required />
                )}
              />

              <Autocomplete
                multiple
                options={roles}
                limitTags={4}
                disableCloseOnSelect
                getOptionLabel={(option) => option.label}
                renderOption={(props, option, { selected }) => (
                  <li {...props} key={Math.random()}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.label}
                  </li>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Roles"
                    size={"small"}
                    placeholder="Roles"
                  />
                )}
              />

              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch defaultChecked onClick={handleOpenConfirm} />
                  }
                  label="Activate user"
                  labelPlacement="start"
                  className="activate-switch"
                />
              </FormGroup>

              <Dialog
                open={openConfirm}
                onClose={handleCloseConfirm}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {
                    "Are you sure you want to change the active status of this user?"
                  }
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Please proceed with caution as this may result in unwanted
                    results
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseConfirm}>Cancel</Button>
                  <Button onClick={handleCloseConfirm} autoFocus>
                    Confirm
                  </Button>
                </DialogActions>
              </Dialog>
            </div>

            <button className="save-btn">
              <span>Save</span>
            </button>
          </div>
        </form>
      )}

      {type === "role" && (
        <form>
          <div className="drawer-content">
            <div className="drawer-content ">
              <TextField
                label="Name"
                variant="outlined"
                required
                size="small"
              />

              <Autocomplete
                multiple
                options={applicationsData}
                limitTags={3}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(props, option, { selected }) => (
                  <li {...props} key={Math.random()}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </li>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Applications"
                    size={"small"}
                    placeholder="Applications"
                  />
                )}
              />

              <FormControl component="fieldset" variant="standard">
                <div className="d-flex permissions-label-container">
                  <FormLabel component="legend">Assign Permissions</FormLabel>
                  <TextField
                    id="standard-search"
                    label="Search permission"
                    type="search"
                    variant="standard"
                    size={"small"}
                    value={permissionValue}
                    onChange={(e) => setPermissionValue(e.target.value)}
                  />
                </div>

                <FormGroup className="permissions-group">
                  {filteredPermissions.map((permission) => (
                    <FormControlLabel
                      key={permission.id}
                      control={<Switch name={permission.name} />}
                      label={permission.name}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </div>

            <button className="save-btn">
              <span>Save</span>
            </button>
          </div>
        </form>
      )}

      {type === "app" && (
        <form>
          <div className="drawer-content">
            <div className="drawer-content ">
              <TextField
                disabled={!isCreate}
                label="Name"
                variant="outlined"
                required
                size="small"
              />

              <TextField
                label="Description"
                variant="outlined"
                required
                type="text"
                size="small"
              />
            </div>

            <button className="save-btn">
              <span>Save</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Drawer;
