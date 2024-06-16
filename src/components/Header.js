import React from "react";

import { MdNotificationsNone, MdOutlineSettings } from "react-icons/md";

import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <MdNotificationsNone className="notification-icon" />

      <MdOutlineSettings className="settings-icon" />
    </header>
  );
};

export default Header;
