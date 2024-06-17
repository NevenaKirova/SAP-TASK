import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";

import {
  MdOutlineDashboard,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import { LuFolderCog } from "react-icons/lu";
import { MdLogout } from "react-icons/md";

import logo from "../images/logo.png";

import "../styles/Sidebar.css";
const Sidebar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(true);

  function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Link to="/" className="logo">
          <img src={logo} alt="SAP Logo" />
        </Link>

        <p>Management</p>
      </div>
      <div className="sidebar-content">
        <div className="sidebar-menu">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? " sidebar-menu-item active" : "sidebar-menu-item"
            }
          >
            <MdOutlineDashboard className="menu-icon" />
            <span>Dashboard</span>
          </NavLink>

          <div className="sidebar-dropdown">
            <div className="sidebar-menu-item" onClick={toggleDropdown}>
              <LuFolderCog className="menu-icon" />
              <p>Management</p>
              {isDropdownOpen ? (
                <MdKeyboardArrowUp className="dropdown-arrow" />
              ) : (
                <MdKeyboardArrowDown className="dropdown-arrow" />
              )}
            </div>

            <ul className={`sidebar-submenu ${isDropdownOpen ? "open" : ""}`}>
              <li className="sidebar-menu-subitem">
                <NavLink
                  to="/SAP-TASK/management/applications"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <span>Applications</span>
                </NavLink>
              </li>

              <li className="sidebar-menu-subitem">
                <NavLink
                  to="/SAP-TASK/management/roles"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <span>Roles</span>
                </NavLink>
              </li>

              <li className="sidebar-menu-subitem">
                <NavLink
                  to="/SAP-TASK/management/users"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <span>Users</span>
                </NavLink>
              </li>
            </ul>
          </div>

          <NavLink
            to="/reports"
            className={({ isActive }) =>
              isActive ? " sidebar-menu-item active" : "sidebar-menu-item"
            }
          >
            <TbReportAnalytics className="menu-icon" />
            <span>Reports</span>
          </NavLink>

          <NavLink
            to="/finance"
            className={({ isActive }) =>
              isActive ? " sidebar-menu-item active" : "sidebar-menu-item"
            }
          >
            <GrMoney className="menu-icon" />
            <span>Finance</span>
          </NavLink>
        </div>

        <div className="user-info">
          <Avatar {...stringAvatar("Nevena Kirova")} />
          <div className="user-details">
            <span className="user-name">Nevena Kirova</span>
            <span className="user-role">Super Admin</span>
          </div>
          <MdLogout />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
