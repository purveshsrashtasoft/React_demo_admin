// LayoutHOC.jsx
import React, { useState } from "react";
import "../dashboard/DashboardLayout.css";

import { Avatar } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { NavLink } from "react-router-dom";

const LayoutHOC = (WrappedComponent) => {
  return function LayoutWrapper(props) {
    const [openCompliance, setOpenCompliance] = useState(true);
    const [openOperations, setOpenOperations] = useState(true);

    return (
      <div className="dashboard-container">

        {/* SIDEBAR */}
        <div className="sidebar">
          <div className="logo">
            <h3 className="text-lg font-bold text-sidebar-foreground">
              Meri Zimmedari
            </h3>
          </div>

          <nav className="menu">
            <ul>

              {/* Dashboard */}
              <li className="active">
                <NavLink to="/" className="flex items-center gap-2">
                  <DashboardIcon fontSize="small" />
                  Dashboard
                </NavLink>
              </li>

              {/* Compliance */}
              <li>
                <a
                  href="#"
                  onClick={() => setOpenCompliance(!openCompliance)}
                  className="flex items-center justify-between gap-2 w-full"
                >
                  <span className="flex items-center gap-2">
                    <FactCheckIcon fontSize="small" />
                    Manage Compliance & FAQ
                  </span>

                  {openCompliance ? (
                    <ExpandLessIcon fontSize="small" />
                  ) : (
                    <ExpandMoreIcon fontSize="small" />
                  )}
                </a>

                {openCompliance && (
                  <ul className="submenu">
                    <li>
                        <NavLink to="/policy" className="flex items-center gap-2">Business Policy</NavLink>
                    </li>
                    <li><NavLink to="/faq" className="flex items-center gap-2">FAQ</NavLink></li>
                  </ul>
                )}
              </li>

              {/* Operations */}
              <li>
                <a
                  href="#"
                  onClick={() => setOpenOperations(!openOperations)}
                  className="flex items-center justify-between gap-2 w-full"
                >
                  <span className="flex items-center gap-2">
                    <SettingsIcon fontSize="small" />
                    Manage Operations
                  </span>

                  {openOperations ? (
                    <ExpandLessIcon fontSize="small" />
                  ) : (
                    <ExpandMoreIcon fontSize="small" />
                  )}
                </a>

                {openOperations && (
                  <ul className="submenu">
                    <li><NavLink to="/manage-asset-list" className="flex items-center gap-2">Manage Asset List</NavLink></li>
                    <li><NavLink to="/life-declaration" className="flex items-center gap-2">Manage Due Life Declaration</NavLink></li>
                    <li><NavLink to="/death-certificate" className="flex items-center gap-2">Manage Death Certificate</NavLink></li>
                    <li><NavLink to="/subscription" className="flex items-center gap-2">Manage Subscription Plan</NavLink></li>
                    <li><NavLink to="/promo-codes" className="flex items-center gap-2">Manage Promo Codes</NavLink></li>
                    <li><NavLink to="/communications" className="flex items-center gap-2">Manage Communications</NavLink></li>
                    
                  </ul>
                )}
              </li>

              {/* Reports */}
              <li>
                <a href="#" className="flex items-center gap-2">
                  <AssessmentIcon fontSize="small" />
                  <NavLink to="/reports" className="flex items-center gap-2">Reports</NavLink>
                </a>
              </li>

            </ul>
          </nav>
        </div>

        {/* MAIN CONTENT */}
        <div className="main-content">

          {/* HEADER */}
          <div className="header1">
            <Avatar src="" sx={{ bgcolor: "#4e88bc" }} />
          </div>

          {/* PAGE CONTENT WRAPPER */}
          <div className="content-area">
            <WrappedComponent {...props} />
          </div>

        </div>

      </div>
    );
  };
};

export default LayoutHOC;
