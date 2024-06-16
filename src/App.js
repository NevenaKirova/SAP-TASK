import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import UserManagement from "./components/UserManagement";
import Header from "./components/Header";
import RolesManagement from "./components/RolesManagement";
import ApplicationsManagement from "./components/ApplicationsManagement";

import "./styles/index.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Header />
        <Routes>
          <Route
            path="/management/applications"
            element={<ApplicationsManagement />}
          />
          <Route path="/management/roles" element={<RolesManagement />} />
          <Route path="/management/users" element={<UserManagement />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
