import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import "./../assets/css/sideBar.css"
function SideBar() {
  const path = useLocation().pathname;

  const sidebarLinks = [
    { path: "/dashbord", text: "Dashboard", icon: <FaBorderAll /> },
    { path: "/contact", text: "Contacts", icon: <FaUsers /> },
    { path: "/message", text: "Messages", icon: <FaClipboardList /> },
    { path: "/broadcasts", text: "Broadcasts", icon: <FaCalendar /> },
    { path: "/profile", text: "Profiles", icon: <FaUserCircle /> },
    {
      path: "/workspace",
      text: "Workspace setting",
      icon: <FaHourglassStart />,
    },
    { path: "/reports", text: "Reports", icon: <FaComments /> },
    { path: "/", text: "Déconnexion", icon: <FaArrowLeft /> },
  ];

  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-none min-h-screen">
      <div className="bg-white min-h-60 flex flex-col justify-start items-center sm:items-start px-3 rounded-4 pt-2">
        <Link
          to="/"
          className="text-white text-decoration-none pb-3 mb-sm-0 me-sm-auto">
          <span className="text-lg hidden sm:inline">Menu</span>
        </Link>
        <ul
          className="nav nav-pills flex-col mb-sm-0 mb-0 sm:items-start"
          id="menu">
          <li className="nav-item">
            <Link
              to="/dashboard"
              id={active === "/dashboard" ? "ClickHover" : ""}
              className="nav-link align-middle px-0">
              <i className="fa-solid fa-border-all"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link align-middle px-0">
              <i className="fa-solid fa-users"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Contacts</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/message"}
              href="#"
              className="nav-link align-middle px-0"
              id={active === "/message" ? "ClickHover" : ""}>
              <i className="fa-solid fa-clipboard-list"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Messages</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/broadcasts"}
              href="#"
              className="nav-link align-middle px-0"
              id={active === "/broadcasts" ? "ClickHover" : ""}>
              <i className="fa-regular fa-calendar"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Broadcasts</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className="nav-link align-middle px-0"
              id={active === "/profile" ? "ClickHover" : ""}>
              <i className="fa-regular fa-circle-user"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Profiles</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/workspace"
              className="nav-link align-middle px-0"
              id={active === "/workspace" ? "ClickHover" : ""}>
              <i className="fa-solid fa-hourglass-start"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Workspace setting</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/reports"
              className="nav-link align-middle px-0"
              id={active === "/reports" ? "ClickHover" : ""}>
              <i className="fa-solid fa-comments"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Reports</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link align-middle px-0"
              id={active === "/" ? "ClickHover" : ""}>
              <i className="fa-solid fa-arrow-left"></i>
              <span className="ms-1 d-none d-sm-inline">Deconnexion</span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <div
        className="dropdown rounded-4 m-2 p-4 bg-white absolute bottom-0 start-0"
        id="btnBottom">
        <h5>NAN DIGITAL ACADEMY</h5>
        <h6>Version: 1.0.0.11</h6>
      </div>
    </div>
  );
}

export default SideBar;
